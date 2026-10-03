// Start a section's script only when it's about to scroll into view, so page
// load doesn't lay out, measure or animate anything below the fold (PageSpeed).
export const whenNear = (el: Element | null | undefined, fn: () => void, margin = "100% 0px") => {
  if (!el) return;
  const io = new IntersectionObserver(
    (entries) => {
      if (!entries.some((e) => e.isIntersecting)) return;
      io.disconnect();
      fn();
    },
    { rootMargin: margin }
  );
  io.observe(el);
};

// GSAP is only downloaded once some animated section gets near.
export const loadGsap = () => import("gsap").then((m) => m.gsap);
