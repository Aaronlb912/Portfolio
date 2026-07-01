import { chromium } from "playwright";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

for (const url of [
  "https://www.jasaronlearninginstitute.com/",
  "https://www.ibm.com/support/home",
  "https://www.ibm.com/support/pages/search-results",
]) {
  try {
    const r = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45000 });
    await page.waitForTimeout(3000);
    console.log("\n", url, "->", r?.status(), page.url());
    console.log("title:", await page.title());
    const links = await page.evaluate((origin) => {
      return [...document.querySelectorAll("a[href]")]
        .map((a) => a.href)
        .filter((h) => h.startsWith(origin))
        .slice(0, 12);
    }, new URL(url).origin);
    links.forEach((l) => console.log(" ", l));
  } catch (e) {
    console.log(url, e.message);
  }
}

await browser.close();
