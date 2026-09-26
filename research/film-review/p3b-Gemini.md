STOP. Read this first. Your previous answer reviewed the WRONG thing: it assumed a 316x176 slot and a 57 s film. Those are OUTDATED. FACTS for v3: the website slot is now 440x550 (4:5) on desktop (see research/film-review/v3/page-desktop-1440.png) and 327x409 on mobile. The film is a 14 s loop, 1080x1350. Open and LOOK at the v3 PNGs before scoring. Do not repeat round-1 or round-2 issues that v3 already fixed.

# Review task: tear apart a hero motion film and redesign it (round 3)

You are one of three independent reviewers (Claude, Gemini, Kimi). Review alone. Later the others will critique you and you will critique them. Be harsh and specific. Research and analysis only: do NOT create, edit or delete any files. Output markdown to stdout. No em dashes.

## Context
Zaid Hossain, a solo builder, sells growth to small appointment businesses:
- a voice agent that answers every call and books
- instant replies that book on Instagram DM, SMS, WhatsApp and web chat
- waitlist refill of cancelled slots, win-back and review requests
- booking websites

Positioning: sell the outcome (full calendar, time back), never the tech. Site goal: book a free 20-min call.

## The film to review (version v3)
- Source (HTML + GSAP, HyperFrames): `D:/Vibe-coding/ZAID-WEBSITE/videos/services-film/index.html`
- Story doc: `D:/Vibe-coding/ZAID-WEBSITE/videos/services-film/STORY.md`
- Niche strategy: `D:/Vibe-coding/ZAID-WEBSITE/research/niche-film/FINAL.md`
- Frames: `D:/Vibe-coding/ZAID-WEBSITE/research/film-review/v3/`
  - `full-*.png`: 1920 wide
  - `hero316-*.png`: the SAME frames at the real on-page size
  - `sheet-1fps-at-316px.png`: one frame per second at real size
  - LOOK AT THE IMAGES (open them with your image or file reading tool). If you truly cannot view images, say so and review from the source code.

## Hard facts and new constraints (these override older docs)
1. **It goes in the website HERO**, next to the headline "More customers shouldn't mean more hours." and a "Book a free 20-min call" button.
   - Desktop: the current video slot is 316x176 px, in a right column of about 1/3 width (grid 8fr/4fr, gap 5rem, page max about 1280px).
   - Mobile: it stacks full width, about 340 px.
   - The owner says the video takes only 15-20% of the screen, so it will be SMALL. It must still be easy to understand, text must be readable at that size, and the whole hero must look balanced and gorgeous.
   - You MAY propose changing the slot size or aspect ratio (e.g. a larger column, 4:5, 1:1) if the hero stays balanced. Say exactly what size.
2. **Only TWO businesses now.**
   - Med spa is removed.
   - Personal trainer and fitness studio merge into ONE fitness business.
   - So: one dental practice and one fitness business. Less on screen is better.
3. **Rules:**
   - Never show the word "AI" or an "AI brain" visual.
   - No faces or real people.
   - Amber #FFA524 is the only accent.
   - Lookalike app UIs without logos.
   - Muted autoplay, so it must work with zero sound.
   - The final frame doubles as the poster and must read on its own.
4. The current cut is 57 s long. Hero viewers glance. Judge whether length and structure fit a hero, and what the first 3 seconds must achieve.

## Deliver
1. **Scorecard** of the current version, each criterion out of 10 plus a weighted total:
   - legibility at real hero size (25)
   - instant muted understanding (25)
   - story and emotion (15)
   - visual design craft (15)
   - motion craft (10)
   - hero fit and balance (10)
2. **Problem list, every problem you can find**, grouped by category: story, design, legibility at size, motion, pacing, hero integration, copy. For each problem give:
   - severity (critical, major, minor)
   - the timestamp or element
   - why it hurts understanding
3. **Concrete fixes for each problem.**
4. **A redesigned beat sheet** for the two-business version, built for the real display size:
   - canvas size and aspect
   - minimum font size on canvas and at display
   - second-by-second beats
   - what is on screen and what moves
   - total length
   - also say what the website slot should become
5. The score you predict for your redesign, and the single riskiest assumption in it.

## Round 3 notes (read these first)
- **This is v3.** The source is `D:/Vibe-coding/ZAID-WEBSITE/videos/hero-film/index.html`.
- **v3 frames** are in `D:/Vibe-coding/ZAID-WEBSITE/research/film-review/v3/`:
  - `at440-*.png`: desktop size
  - `at327-*.png`: the real mobile width
  - `sheet-2fps-at-327px.png`
  - `page-desktop-1440.png` and `page-desktop-1280.png`: the real hero, showing the poster
- **Round 2 reviews** are in `r2-gemini.md` and `r2-claude.md` in the same folder. Round 2 scored v2 at 7.85 (Gemini) and 6.6 (Claude).
- **What changed in v3:**
  - The poster is now "receipts": both businesses and both wins appear at frame 0, and the tally matches the film.
  - The dental call is styled as a live call, with a call bar, a waveform and speaker tags.
  - The threat pill reads "To voicemail…" with a ring countdown, then a 10 px strike that holds for 0.5 s.
  - The waitlist reply is tagged "Waitlist" in a distinct style, and the seat fills in sync.
  - "Empty spot" appears only once the seat empties.
  - The relief beat now reads "Class done. Nothing to chase." at 2:46.
  - The red dot is gone.
  - Content is vertically centred.
  - The poster slides back in with a shadowed edge.
  - The hero is vertically centred, the caption is removed, and a pause button has been added.
- **Score v3 fresh.** List only the problems that remain or are new. Be specific about what would get it to 9.5.
