# Tarifs Reservation Page Overrides

> **PROJECT:** Le Madrier
> **Generated:** 2026-10-11 21:44:06
> **Page Type:** Pricing / Plans

> ⚠️ **IMPORTANT:** Rules in this file **override** the Master file (`design-system/le-madrier/MASTER.md`).
> Only deviations from the Master are documented here. For all other rules, refer to the Master.

---

## Page-Specific Rules

### Layout Overrides

- **Max Width:** 1200px
- **Layout:** Responsive grid

### Spacing Overrides

- No overrides — use Master spacing

### Typography Overrides

- No overrides — use Master typography

### Color Overrides

- No overrides — use Master colors

### Component Overrides

- Avoid: Wide tables breaking layout

---

## Page-Specific Components

**Pattern:** Pricing + conditions

- Rates as a real `<table>` from 768 px; stacked cards below 768 px.
- "Included" list and conditions as short readable blocks.
- No booking calendar exists on the current site: the page shows the request CTA; if `bookingCalendarUrl` is set in `src/config/site.ts`, an iframe is rendered.
- Arrival and departure times: marker `[À CONFIRMER]`.
- Skill suggestions ignored: "Liquid Glass" style and testimonials carousel (no real reviews available).

---

## Recommendations

> Raw output of the skill, kept for reference. Colours, fonts and style come from MASTER.md (mandatory palette "Miel et bois"); effects that conflict with it are listed as ignored above.

- Responsive: Use horizontal scroll or card layout
