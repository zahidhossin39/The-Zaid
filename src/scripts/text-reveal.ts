// Section-heading line reveal. Each line slides up out of its own clip mask
// once, when the heading's top crosses 85% of the viewport.
// The hero H1 is left alone on purpose: it's the LCP element.
// Each heading is split only when it gets near (whenNear), and GSAP + SplitText
// load then too, so page load never measures or splits text below the fold.
import { whenNear } from "./near";

// Keep in sync with the matching rule in global.css.
export const HEADINGS = "main .h2, .band h2, .proc-head h2";

if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const libs = () =>
    Promise.all([import("gsap"), import("gsap/SplitText"), document.fonts.ready]).then(([g, s]) => {
      g.gsap.registerPlugin(s.SplitText);
      return { gsap: g.gsap, SplitText: s.SplitText };
    });

  document.querySelectorAll<HTMLElement>(HEADINGS).forEach((el) =>
    whenNear(el, async () => {
      // Split only after webfonts land, so line breaks are measured once, correctly.
      const { gsap, SplitText } = await libs();
      let shown = false;
      let tween: gsap.core.Tween;
      SplitText.create(el, {
        type: "lines",
        linesClass: "tr-line", // masks get "tr-line-mask"
        mask: "lines",
        autoSplit: true, // re-split on resize / font swap
        aria: "auto",
        // Returning the tween lets SplitText time-sync it across re-splits,
        // so a finished reveal stays finished after a resize.
        onSplit: (self) =>
          (tween = gsap.from(self.lines, {
            yPercent: 100,
            duration: 0.9,
            ease: "expo.out",
            stagger: 0.08,
            paused: !shown,
          })),
      });
      const play = () => { shown = true; tween.play(); };
      const done = () => { shown = true; tween.progress(1); };

      const io = new IntersectionObserver(
        ([e]) => {
          // skipped past it (fast fling, anchor jump): show it finished, never leave it hidden
          const passed = !e.isIntersecting && e.boundingClientRect.bottom < 0;
          // on screen at split time: reveal now (the -15% dead zone must not hold it back)
          const onScreen = e.boundingClientRect.top < innerHeight && e.boundingClientRect.bottom > 0;
          if (!e.isIntersecting && !passed && !(first && onScreen)) { first = false; return; }
          first = false;
          passed ? done() : play();
          io.disconnect();
          removeEventListener("scroll", onScroll);
        },
        { rootMargin: "0px 0px -15% 0px" }
      );
      let first = true;
      io.observe(el);

      // A jump from below the viewport to above it in one scroll step never fires
      // the observer (not intersecting both times), so catch it on scroll.
      let ticking = false;
      const onScroll = () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          ticking = false;
          if (el.getBoundingClientRect().bottom < 0) { done(); io.disconnect(); removeEventListener("scroll", onScroll); }
        });
      };
      addEventListener("scroll", onScroll, { passive: true });
    })
  );
}
