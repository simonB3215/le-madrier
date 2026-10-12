# Accueil Page Overrides

> **PROJECT:** Le Madrier
> **Generated:** 2026-10-11 21:44:05
> **Page Type:** Landing / Marketing

> ⚠️ **IMPORTANT:** Rules in this file **override** the Master file (`design-system/le-madrier/MASTER.md`).
> Only deviations from the Master are documented here. For all other rules, refer to the Master.

---

## Page-Specific Rules

### Layout Overrides

- **Max Width:** 1200px (standard)
- **Layout:** Full-width sections, centered content

### Spacing Overrides

- No overrides — use Master spacing

### Typography Overrides

- No overrides — use Master typography

### Color Overrides

- No overrides — use Master colors

### Component Overrides

- No overrides — use Master component specs

---

## Page-Specific Components

**Pattern:** Hero + Features + CTA

- Split hero: headline, intro, two CTAs on the left; winter photo of the chalet on the right (max 1282 px source, never full-bleed).
- Quick facts row with icon chips: 4 guests, 2 bedrooms, private parking, Wi-Fi, from 2 nights.
- Sections: hero > welcome text > apartment preview (3 photos) > region teaser > hosts `[À CONFIRMER]` > reviews `[AJOUTER DES AVIS RÉELS]` > CTA band.
- Skill suggestion ignored: typing effect / background-clip text / GSAP split text (does not fit a warm family chalet and hurts reduced-motion users).

---

## Recommendations

> Raw output of the skill, kept for reference. Colours, fonts and style come from MASTER.md (mandatory palette "Miel et bois"); effects that conflict with it are listed as ignored above.

- Effects: @keyframes text animation, typing effect, background-clip: text, GSAP ScrollTrigger, split text
