# Cherokee Park Ranch — Blueprint WebStudio Concept

Independent, non-official redesign concept for https://www.cherokeeparkranch.com/ (Livermore, CO).
Preview: https://cpr.blueprintwebstudio.com (noindex; the demo code lives in the Neon `demos` table).

Custom build, not the shared concept layout. Content and layout are in `src/App.jsx`, styles in `src/styles.css`, and the Blueprint WebStudio concept widget in `src/concept.jsx`.

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

Vercel project `cherokee-park-ranch` (framework: Vite, team mrwerner-s-projects). Pushes to `main` deploy automatically.
Domain `cpr.blueprintwebstudio.com` is a CNAME at Porkbun pointing to the target Vercel shows for this project.

Environment variables (optional): `VITE_CONCEPT_END_DATE` (countdown end, 2026-11-24). The "I'm Interested" form posts to `api/demo-interest.js`, which proxies to the main studio site (prospect "Cherokee Park Ranch", source `cpr.blueprintwebstudio.com`).

## Design

- Motif: the 1886 stagecoach stop. Rates and the hero "2027 Season" card are notched fare tickets with a tear-off stub; the first day is a stagecoach-style timetable. The North Fork of the Cache la Poudre runs through the page as a winding gold/copper river line between sections, and cabins carry numbered map pins that match the ranch's own bird's-eye map.
- Fraunces (headings, italic accents) with Karla body and Rye for numerals and stamps.
- Colors from their logo (copper #9b522a, rust #732b11) and site (gold #cbaa5c, cream #f7f5e7), deepened with a saddle-leather brown and a pine green for contrast.
- Hero: saddle-leather panel with the headline, a real photo of a rider crossing the creek, and the season/rate ticket. USA Today award bar above the header.
- Section order: hero, stats (1886 / 130 horses / 86% return / 300 acres / 7,200 ft), the week + day-one timetable, horse program, seasons & rates, lodging, activities (water / land / after dark / kids & teens tabs), dining, the Prince family story, awards, guest testimonials, getting here + guest paperwork PDFs.
- Booking links go to their existing Mews booking engine.
- Logo and award badges are downloaded into `src/assets`; photos are their own (Caree Prince's photography), downloaded from cherokeeparkranch.com and resized into `public/img`. Guest paperwork PDFs are hotlinked from their site. All must be confirmed/licensed before a real launch.

## What changed from the current site

- Replaces the 2016 WordPress theme (narrow fixed left-sidebar menu, "© Copyright 2016" footer, empty blog calendar widget) with a modern one-page layout.
- Rates, season dates, what's included and the booking policy are on the homepage instead of a separate page; phone and Reserve are in the sticky header.
- All six awards/badges and both association memberships are shown together (the old site scatters them across pages and labels the TripsToDiscover badge as a Tripadvisor award in its alt text).
- Cleans up contradictions: "Book for 2026!" welcome bar while the rates page lists 2027; one set of season dates.
- Checked at 1440px and 390px with no sideways scrolling.

## Owner should confirm

- 2027 rates ($3,300 adult / $2,724 ages 2–12 / $2,475 Getaway Week) and dates. The current site says High Season ends Aug 13 in one place and "until August 14th" in another; Late Season starts "August 13" vs "August 14". The concept uses May 29 – Aug 13 and Aug 14 – Sep 17.
- Deposit: the rates page says 25% refundable until March 5; the contact page says $500 per person and mentions a 5% card fee. The concept uses the 25% wording.
- Horse count: the site says 130, "over 100 quarter horses" and "135+" on the same page. The concept uses 130.
- Cabin count: the site says "six outlying cabins" but lists eight (Beaver, Cherokee, Pawnee, Cheyenne, Birdhouse, Cache, Outlaw, Porcupine). The concept says eight.
- "Voted America's #1 Dude Ranch by USA Today": the site shows USA Today 10Best Readers' Choice "Best Dude Ranch" winner in 2023 and 2017. Confirm the 2017 award should still be shown, and whether Equitrekking Top 20, the Tripadvisor certificates and the TripsToDiscover feature are current.
- 86% return rate, 300 acres, 2,000+ staff applications, CPR/First Aid cards and the elevation (7,200 ft) are copied from their pages.
- Saddle Sore Saloon hours (5–7pm), art class teacher (the site names both Amy Brackenbury and "Amy Larson" in a quote), and square dance caller Roger.
- Guest quotes are verbatim from testimonials published on cherokeeparkranch.com, not Google reviews; no star rating is shown. Confirm permission to reuse them.
- Photo and badge usage rights; Mews booking link; PDF links (2025 uploads).
