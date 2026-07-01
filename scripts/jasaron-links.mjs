import { chromium } from "playwright";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
const url =
  "https://web.archive.org/web/20230601000000/https://www.jasaronlearninginstitute.com/";
await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45000 });
await page.waitForTimeout(3000);
const links = await page.evaluate(() =>
  [...document.querySelectorAll("a[href]")]
    .map((a) => ({ href: a.href, text: (a.textContent || "").trim().slice(0, 50) }))
    .filter((l) => l.href.includes("jasaronlearninginstitute"))
    .slice(0, 20)
);
console.log(links);
await browser.close();
