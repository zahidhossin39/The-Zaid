// Dev-only: screenshot each palette prototype hero.
import puppeteer from "puppeteer-core";
const browser = await puppeteer.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: "new",
  args: ["--hide-scrollbars", "--force-color-profile=srgb"],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 860, deviceScaleFactor: 2 });
await page.goto("http://localhost:4321/proto", { waitUntil: "networkidle2" });
await new Promise((r) => setTimeout(r, 1200));
const boxes = await page.evaluate(() =>
  [...document.querySelectorAll("[data-proto]")].map((s) => {
    const b = s.getBoundingClientRect();
    return { id: s.dataset.proto, top: Math.round(b.top + scrollY), h: Math.round(s.offsetHeight) };
  })
);
for (const b of boxes) {
  await page.screenshot({ path: `review/proto-${b.id}.png`, clip: { x: 0, y: b.top, width: 1440, height: b.h } });
  console.log(`proto ${b.id}  h=${b.h}`);
}
await browser.close();
