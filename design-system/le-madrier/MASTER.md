# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/le-madrier/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Le Madrier
**Generated:** 2026-10-11 21:43:52 (UI UX Pro Max 2.13.0), then edited by hand
**Category:** Holiday apartment in a mountain chalet (hospitality)

## What comes from the skill and what does not

| Part | Source |
|------|--------|
| Colour palette | **Project brief ("Miel et bois"), mandatory.** The skill proposed a blue/green palette; it is not used. |
| Typography | **Project brief** (Fraunces + Nunito Sans). The skill proposed Outfit + Work Sans, and its typography search for "warm serif cozy hospitality rustic" returned no fitting warm serif pairing, so the brief's suggestion is used. |
| Style | Skill, style search "warm organic rustic hospitality photo" → **Nature Distilled** (replaces the auto-selected "Minimalism & Swiss Style", which targets SaaS and dashboards). |
| Page pattern, spacing, shadows, anti-patterns, checklist | Skill (`--design-system`). |

---

## Global Rules

### Color Palette — "Miel et bois" (mandatory, use nothing else)

| Role | Hex | CSS Variable | Use |
|------|-----|--------------|-----|
| Primary (noyer) | `#5C3A21` | `--color-noyer` | CTA, header text, highlighted titles, links |
| Accent (miel) | `#C8892B` | `--color-miel` | Icon chips, badges, decorative details, hover |
| Background (crème) | `#FAF3E6` | `--color-creme` | Page background |
| Secondary background (beige) | `#EADBC0` | `--color-beige` | Alternate sections, cards, forms |
| Text | `#2B2118` | `--color-texte` | Body text, footer background |

Measured contrast ratios (WCAG 2.x):

| Pair | Ratio | Verdict |
|------|-------|---------|
| Texte on crème | 14.27 | AA/AAA |
| Texte on beige | 11.54 | AA/AAA |
| Noyer on crème | 9.14 | AA/AAA |
| Noyer on beige | 7.39 | AA/AAA |
| Crème on noyer (buttons) | 9.14 | AA/AAA |
| Texte on miel | 5.30 | AA |
| Miel on texte (footer links) | 5.30 | AA |
| Crème on texte (footer) | 14.27 | AA/AAA |
| Miel on crème | 2.69 | **Fails — never for text or meaningful icons** |
| Miel on beige | 2.18 | **Fails** |

Rules:

- Primary buttons: background `#5C3A21`, text `#FAF3E6`.
- **Never miel text on a light background, never white/crème text on miel.** On miel, text and icons are `#2B2118`.
- Icons: dark glyph (`#2B2118`) on a miel chip. Miel is never the only carrier of information.
- Footer: background `#2B2118`, crème text, miel links.
- No pure white, no pure black. Photos are the main subject.
- Borders and dividers: noyer at 15–25 % opacity (derived from the palette, no new hue).
- Focus ring: 3 px noyer on light backgrounds, 3 px miel on the dark footer.

### Typography

- **Heading Font:** Fraunces (variable, warm serif)
- **Body Font:** Nunito Sans (variable)
- Self-hosted through `@fontsource-variable` (no request to Google, `font-display: swap`).
- Body 17–18 px, line-height 1.65, measure max ~68 characters.
- Headings: weight 500–600, `text-wrap: balance`.

### Spacing Variables

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | Tight gaps |
| `--space-sm` | `8px` / `0.5rem` | Icon gaps, inline spacing |
| `--space-md` | `16px` / `1rem` | Standard padding |
| `--space-lg` | `24px` / `1.5rem` | Section padding |
| `--space-xl` | `32px` / `2rem` | Large gaps |
| `--space-2xl` | `48px` / `3rem` | Section margins |
| `--space-3xl` | `64px` / `4rem` | Hero padding |

### Shadow Depths

Shadows are tinted with the text colour `#2B2118` (43, 33, 24), never pure black.

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(43,33,24,0.08)` | Subtle lift |
| `--shadow-md` | `0 6px 16px rgba(43,33,24,0.12)` | Cards, buttons |
| `--shadow-lg` | `0 18px 40px rgba(43,33,24,0.18)` | Photos, lightbox |

---

## Component Specs

### Buttons

```css
.btn-primary   { background:#5C3A21; color:#FAF3E6; padding:14px 26px; border-radius:999px; font-weight:700; min-height:48px; transition:background-color 200ms ease, box-shadow 200ms ease; cursor:pointer; }
.btn-primary:hover { background:#2B2118; }
.btn-secondary { background:transparent; color:#5C3A21; border:2px solid #5C3A21; /* same metrics */ }
.btn-secondary:hover { background:#EADBC0; }
```

Hover never moves the layout (no scale, no translate that shifts neighbours).

### Cards

```css
.card { background:#EADBC0; border-radius:20px; padding:24px; }
/* On a beige section, cards switch to crème (#FAF3E6). */
```

Only cards that are links get a hover state and `cursor:pointer`.

### Inputs

```css
.input { background:#FAF3E6; color:#2B2118; padding:12px 16px; border:2px solid rgba(92,58,33,.45); border-radius:12px; font-size:16px; min-height:48px; }
.input:focus-visible { border-color:#5C3A21; outline:3px solid #5C3A21; outline-offset:2px; }
.input[aria-invalid="true"] { border-color:#2B2118; border-width:3px; } /* + icon + text message, colour is never the only signal */
```

### Lightbox (photo gallery)

Native `<dialog>`, backdrop `rgba(43,33,24,0.92)`, close on Escape, focus returned to the opening thumbnail.

---

## Style Guidelines

**Style:** Nature Distilled (skill style search)

**Keywords:** muted earthy tones, wood, warmth, organic materials, handmade warmth

**Key Effects:** natural easing (ease-out), soft tinted shadows, generous rounded corners (16–24 px, slightly varied on photos), gentle fade-up on scroll (disabled under `prefers-reduced-motion`). No parallax, no grain overlay (kept off for performance and legibility).

### Page Pattern

**Pattern Name:** Hero + Features + CTA (skill)

- **CTA Placement:** Hero + sticky header + bottom of every page; on mobile a fixed bottom bar "Appeler / Réserver".
- **Section Order:** Hero with headline and photo > Value proposition > Key features (3–5) > CTA section > Footer
- The hero uses a split layout (text + photo) rather than a full-bleed image: the source photos are at most 1282 px wide.

---

## Anti-Patterns (Do NOT Use)

- ❌ **Invented content** — no reviews, ratings, prices or equipment that the owner has not published. Use the visible markers `[À CONFIRMER]` / `[AJOUTER DES AVIS RÉELS]`.
- ❌ **Emojis as icons** — Use SVG icons (Lucide-style, 1.75 px stroke, one family)
- ❌ **Missing cursor:pointer** — All clickable elements must have cursor:pointer
- ❌ **Layout-shifting hovers** — Avoid scale transforms that shift layout
- ❌ **Low contrast text** — Maintain 4.5:1 minimum contrast ratio
- ❌ **Instant state changes** — Always use transitions (150-300ms)
- ❌ **Invisible focus states** — Focus states must be visible for a11y
- ❌ **Pure white or pure black backgrounds**

---

## Pre-Delivery Checklist

The completed checklist is in `design-system/le-madrier/CHECKLIST.md`.

- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from consistent icon set
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbars
- [ ] No horizontal scroll on mobile
