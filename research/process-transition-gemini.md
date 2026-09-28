### Weaknesses of your plan
1. **Scroll-hijacking snap:** Snapping after 180ms fights the user's intent if they pause to read halfway. 
2. **The blank zone:** Easing opacity to 0 by `|t| = 0.5` means at exactly `t = 0.5` the screen is completely empty.
3. **Violent fast-scroll:** Tying opacity directly to `sp` means fast swipes will cause aggressive flashing.

### Concrete Alternative: Masked Scroll-Linked Parallax
To keep it calm and editorial, use spatial separation and masking instead of relying purely on opacity.

*   **Clip-path Reveal:** Wrap the text in a container with `clip-path: inset(10% 0 10% 0)`. Incoming phases wipe into view organically as they slide, mimicking a physical wheel, eliminating messy overlaps.
*   **Opacity:** `opacity = Math.max(0, 1 - Math.pow(Math.abs(t) * 1.8, 3))`. This stays near 1.0 longer, then drops sharply, preventing ghosting.
*   **Distances:** Increase travel to `-t * 150px` to guarantee physical separation.
    *   Kick: `-t * 150px`
    *   Title: `-t * 120px`
    *   Body/Tags: `-t * 90px`
    *   Icon: `-t * 40px` (Drop the scale, just gentle drift).
*   **Snap Behavior:** Discard the JS `lenis.scrollTo` timer. Instead, use native CSS `scroll-snap-type: y mandatory` on the scroll wrapper, and add 5 invisible anchor divs. Lenis natively respects CSS snapping and will settle softly without forced JS hijacking.

### Objective "Smoothest"
1. **Causality:** Motion perfectly mirrors scroll momentum without artificial delays.
2. **Legibility:** No overlapping glyphs creating visual noise; contrast stays clear.
3. **Zero Pop:** No frame where the screen is completely blank or where text instantly jumps.
