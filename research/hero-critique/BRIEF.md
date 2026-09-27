# Hero section critique: brief

You are one of three independent design critics (the others are different AI models). Your job is a **ruthless visual and UX audit** of one hero section, then concrete fixes. Work alone in round 1; you will see the others' work in round 2.

## The site

A personal site for Zaid Hossain, a solo builder of websites and AI automations for small business owners (dentists, gyms, salons). Stack: Astro 7 + Tailwind v4. Brand: strictly black and white (off-white #f6f4ef / #F4F2ED accents allowed), font Inter Tight, calm and honest tone, no hype. The rest of the site alternates dark (#0a0a0b) and white sections.

## What to look at

Screenshots (read them as images):
- `D:/Vibe-coding/ZAID-WEBSITE/research/hero-critique/desktop-1440.png` (1440x900)
- `D:/Vibe-coding/ZAID-WEBSITE/research/hero-critique/desktop-1920.png` (1920x1080)
- `D:/Vibe-coding/ZAID-WEBSITE/research/hero-critique/phone-390.png` (390x844 @2x)
- `D:/Vibe-coding/ZAID-WEBSITE/research/hero-critique/user-view.png` (the owner's own screenshot, ~1900 wide browser)

Source:
- `D:/Vibe-coding/ZAID-WEBSITE/src/components/Hero.astro` (layout, copy, video card)
- `D:/Vibe-coding/ZAID-WEBSITE/src/components/GridBackground.astro` (canvas grid: 60px cells, 10px plus marks at 15% opacity on 7% hairlines; marks near the cursor darken and fade back)
- `D:/Vibe-coding/ZAID-WEBSITE/src/components/Navbar.astro`

The video card on the right is a looping ~27s film: a small business (dental practice, gym) is busy, a call or DM comes in, and the system answers and books the customer. It is the proof of the headline.

## Hard constraints

- **The background grid stays.** The owner likes it. You may change its opacity, cell size, mark size, line weight, colour, masking/fading, where it appears, how it interacts, or its alignment to the layout, but not remove it.
- Black and white brand. No new accent colours, no gradients-for-decoration, no glassmorphism, no purple.
- Headline copy and sub copy are out of scope (being rewritten separately). Judge typography, not wording.
- The trust line under the button was deliberately removed. Do not bring it back.

## What to deliver (write to the output file named in your task)

1. **Flaws.** At least 8. For each: what it is, exactly where (element + screenshot), why it hurts (visual reason, UX reason, or "AI-slop" tell), and a **severity score 1-10** (10 = the single biggest reason the hero looks cheap). Be specific: pixel values, ratios, alignments, not vibes.
2. **Grid verdict.** Direct answers: opacity up or down (to what number)? Cell size up or down (to what)? Plus-mark size? Lines on or off? Masked/faded (where)? Aligned to the content column? Should it interact with the video card? Give numbers.
3. **Video card verdict.** Shadow or not (spec it)? 3D tilt/box or not (and why)? Frame, radius, background, size, position, the pause button, the "See examples" link.
4. **What makes it look AI-generated / template-y**, as a list of specific tells.
5. **Three fix directions**, each a coherent combination (not three copies with different colours). For each: a name, the full spec (layout, grid settings, card treatment, type sizes, spacing in px/rem), what it trades away, and your predicted score out of 10 with reasons.
6. **Your score of the current hero** out of 10, with a one-line reason per point lost.

Be concrete enough that a developer can build each direction from your spec without asking questions. No filler, no praise sections.
