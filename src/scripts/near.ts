// Resolves at the load event (the scripts themselves are only fetched after the
// first screen has painted, see astro.config.mjs). Everything
// that isn't needed for the first screen (section scripts, GSAP, late fonts,
// below-fold images) waits for it, so none of it competes with the first paint
// (PageSpeed counts every request that starts before the largest paint).
export const afterFirstScreen = new Promise<void>((resolve) => {
  const go = () => resolve();
  if (document.readyState === "complete") go();
  else addEventListener("load", go, { once: true });
});

// Run when the main thread is free (falls back to a short timeout).
export const idle = (fn: () => void) =>
  "requestIdleCallback" in window ? requestIdleCallback(() => fn(), { timeout: 2000 }) : setTimeout(fn, 50);

// Start a section's script only when it's about to scroll into view (and the
// first screen is done), so page load doesn't lay out, measure or animate
// anything below the fold.
export const whenNear = (el: Element | null | undefined, fn: () => void, margin = "100% 0px") => {
  if (!el) return;
  const io = new IntersectionObserver(
    (entries) => {
      if (!entries.some((e) => e.isIntersecting)) return;
      io.disconnect();
      // each section starts in its own idle task, so they never stack into one long task
      afterFirstScreen.then(() => idle(fn));
    },
    { rootMargin: margin }
  );
  io.observe(el);
};

// GSAP is only downloaded once some animated section gets near.
export const loadGsap = () => import("gsap").then((m) => m.gsap);
