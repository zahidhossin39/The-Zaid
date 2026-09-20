// Dev-only: render each candidate headline into the real hero and screenshot it.
import puppeteer from "puppeteer-core";

const OPTIONS = [
  {
    id: 1,
    h1: `The thing you keep putting off <span class="text-accent">—</span> I'll build it.`,
    sub: `Founders bring me the idea that's been stuck in a notes app for a year. Owners bring me the process they still do by hand. Both leave with something that works.`,
    cta: `Tell me what's stuck`,
  },
  {
    id: 2,
    h1: `You've had the idea <span class="text-accent">long enough.</span>`,
    sub: `I build the app, site, or automation you've been circling for months. Scoped tight, built in the open, handed over working.`,
    cta: `Book a 20-minute call`,
  },
  {
    id: 3,
    h1: `Still doing it <span class="text-accent">the hard way?</span>`,
    sub: `The spreadsheet process eating your Sundays. The app you sketch on napkins but never start. You describe the problem, I build the thing.`,
    cta: `Describe your stuck thing`,
  },
];

const browser = await puppeteer.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: "new",
  args: ["--hide-scrollbars", "--force-color-profile=srgb"],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 820, deviceScaleFactor: 2 });

for (const o of OPTIONS) {
  await page.goto("http://localhost:4321", { waitUntil: "networkidle2" });
  await page.evaluate((o) => {
    document.querySelector("h1").innerHTML = o.h1;
    document.querySelector("h1 + p").textContent = o.sub;
    document.querySelector('a[href="#book"]').textContent = o.cta;
    document.querySelectorAll(".reveal").forEach((e) => e.classList.add("in-view"));
  }, o);
  await new Promise((r) => setTimeout(r, 900));
  await page.screenshot({ path: `review/headline-${o.id}.png`, clip: { x: 0, y: 0, width: 1440, height: 820 } });
  console.log(`option ${o.id} captured`);
}
await browser.close();
