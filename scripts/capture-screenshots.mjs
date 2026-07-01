import { chromium } from "playwright";
import { mkdirSync, readdirSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.join(__dirname, "..", "src", "assets", "screenshots");
const WAYBACK = "https://web.archive.org/web/20230601000000";

/** @type {{ slug: string; shots: { name: string; url: string; search?: string }[] }[]} */
const sites = [
  {
    slug: "pasteproof",
    shots: [
      { name: "01-home", url: "https://pasteproof.com/" },
      { name: "02-pricing", url: "https://pasteproof.com/pricing" },
      { name: "03-playground", url: "https://pasteproof.com/playground" },
      {
        name: "04-browser-extension",
        url: "https://pasteproof.com/solutions/browser-extension",
      },
      {
        name: "05-api-slack",
        url: "https://pasteproof.com/solutions/api-and-slack",
      },
    ],
  },
  {
    slug: "civicshq",
    shots: [
      { name: "01-home", url: "https://civicshq.com/" },
      { name: "02-bills", url: "https://civicshq.com/bills" },
      { name: "03-politicians", url: "https://civicshq.com/politicians" },
      { name: "04-my-district", url: "https://civicshq.com/my-district" },
      { name: "05-match", url: "https://civicshq.com/match" },
    ],
  },
  {
    slug: "freddie_mac",
    shots: [
      { name: "01-home", url: "https://sf.freddiemac.com/" },
      {
        name: "02-working-with-us",
        url: "https://sf.freddiemac.com/working-with-us",
      },
      {
        name: "03-tools-learning",
        url: "https://sf.freddiemac.com/tools-learning",
      },
      {
        name: "04-news-insights",
        url: "https://sf.freddiemac.com/news-insights",
      },
      {
        name: "05-mortgage-products",
        url: "https://sf.freddiemac.com/working-with-us/origination-underwriting/mortgage-products",
      },
    ],
  },
  {
    slug: "ibm",
    shots: [
      {
        name: "01-ibmsearch",
        url: "https://www.ibm.com/support/pages/ibmsearch",
      },
      {
        name: "02-search-results",
        url: "https://www.ibm.com/support/pages/ibmsearch",
        search: "drupal content migration",
      },
      {
        name: "03-support-portal",
        url: "https://www.ibm.com/mysupport/s/?language=en_US",
      },
      { name: "04-fix-central", url: "https://www.ibm.com/support/fixcentral/" },
      { name: "05-documentation", url: "https://www.ibm.com/docs/en" },
    ],
  },
  {
    slug: "jasaron",
    shots: [
      {
        name: "01-home",
        url: `${WAYBACK}/https://www.jasaronlearninginstitute.com/`,
      },
      {
        name: "02-about",
        url: `${WAYBACK}/https://www.jasaronlearninginstitute.com/About-Jasaron`,
      },
      {
        name: "03-services",
        url: `${WAYBACK}/https://www.jasaronlearninginstitute.com/services`,
      },
      {
        name: "04-book-session",
        url: `${WAYBACK}/https://www.jasaronlearninginstitute.com/book-a-session`,
      },
      {
        name: "05-contact",
        url: `${WAYBACK}/https://www.jasaronlearninginstitute.com/contact-us`,
      },
    ],
  },
  {
    slug: "anithrift",
    shots: [
      { name: "01-home", url: "https://anithrift.netlify.app/" },
      { name: "02-sell", url: "https://anithrift.netlify.app/listing" },
      { name: "03-signin", url: "https://anithrift.netlify.app/signin" },
      { name: "04-about", url: "https://anithrift.netlify.app/about-us" },
      { name: "05-forum", url: "https://anithrift.netlify.app/forum" },
    ],
  },
];

async function dismissOverlays(page) {
  const selectors = [
    "#onetrust-accept-btn-handler",
    'button:has-text("Accept All")',
    'button:has-text("Accept")',
    'button:has-text("Agree")',
    'button:has-text("I Agree")',
    'button:has-text("Allow all")',
    'button:has-text("Got it")',
    'button:has-text("OK")',
    '[aria-label="Close"]',
    '[aria-label="Dismiss promotion banner"]',
  ];

  for (const sel of selectors) {
    try {
      const btn = page.locator(sel).first();
      if (await btn.isVisible({ timeout: 500 })) {
        await btn.click({ timeout: 2000 });
        await page.waitForTimeout(400);
      }
    } catch {
      /* ignore */
    }
  }
}

async function runSearch(page, query) {
  const input = page
    .locator(
      'input[type="search"], input[name*="search" i], input[placeholder*="search" i], input[aria-label*="search" i]'
    )
    .first();

  if (await input.isVisible({ timeout: 3000 }).catch(() => false)) {
    await input.fill(query);
    await page.keyboard.press("Enter");
    await page.waitForTimeout(3500);
    return;
  }

  await page.evaluate((q) => {
    const input =
      document.querySelector('input[type="search"]') ||
      document.querySelector("input#edit-search") ||
      document.querySelector('form[role="search"] input');
    if (input) {
      input.value = q;
      input.dispatchEvent(new Event("input", { bubbles: true }));
      const form = input.closest("form");
      if (form) form.requestSubmit?.() || form.submit();
    }
  }, query);
  await page.waitForTimeout(3500);
}

async function captureShot(page, shot) {
  await page.goto(shot.url, { waitUntil: "domcontentloaded", timeout: 90000 });
  await page.waitForTimeout(shot.url.includes("archive.org") ? 4000 : 2500);
  await dismissOverlays(page);
  await page.evaluate(() => window.scrollTo(0, 0));

  if (shot.search) {
    await runSearch(page, shot.search);
    await dismissOverlays(page);
  }

  await page.waitForTimeout(800);
}

async function captureSite(browser, site) {
  const outDir = path.join(assetsDir, site.slug);
  mkdirSync(outDir, { recursive: true });

  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
  });

  console.log(`\n=== ${site.slug} ===`);

  for (const shot of site.shots) {
    const filepath = path.join(outDir, `${shot.name}.png`);

    try {
      await captureShot(page, shot);
      await page.screenshot({ path: filepath, fullPage: false });
      console.log(`  saved ${shot.name}.png`);
    } catch (err) {
      console.warn(`  failed ${shot.name}: ${err.message}`);
    }
  }

  await page.close();
}

async function main() {
  mkdirSync(assetsDir, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  try {
    for (const site of sites) {
      await captureSite(browser, site);
    }
  } finally {
    await browser.close();
  }

  console.log("\nDone.");
  for (const site of sites) {
    const dir = path.join(assetsDir, site.slug);
    const files = readdirSync(dir).filter((f) => f.endsWith(".png"));
    console.log(`  ${site.slug}: ${files.length} screenshots`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
