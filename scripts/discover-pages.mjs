import { chromium } from "playwright";

const sites = [
  "https://pasteproof.com",
  "https://anithrift.netlify.app/",
  "https://sf.freddiemac.com",
  "https://www.ibm.com/support/pages/ibmsearch",
  "https://www.jasaronlearninginstitute.com/",
];

async function discover(baseUrl, page) {
  await page.goto(baseUrl, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForTimeout(3000);

  const origin = new URL(baseUrl).origin;
  const links = await page.evaluate((origin) => {
    const seen = new Set();
    const out = [];
    for (const a of document.querySelectorAll("a[href]")) {
      try {
        const u = new URL(a.href, origin);
        if (u.origin !== origin) continue;
        const path = u.pathname.replace(/\/$/, "") || "/";
        if (path === "/#" || path.includes("#")) continue;
        const key = path + u.search;
        if (seen.has(key)) continue;
        seen.add(key);
        const text = (a.textContent || "").trim().slice(0, 60);
        out.push({ path: key, text, href: u.href });
      } catch {
        /* ignore */
      }
    }
    return out;
  }, origin);

  return links.slice(0, 25);
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  for (const url of sites) {
    console.log(`\n=== ${url} ===`);
    try {
      const links = await discover(url, page);
      links.forEach((l) => console.log(`  ${l.path.padEnd(40)} ${l.text}`));
    } catch (err) {
      console.error(`  error: ${err.message}`);
    }
  }

  await browser.close();
}

main();
