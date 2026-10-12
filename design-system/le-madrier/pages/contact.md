# Contact Page Overrides

> **PROJECT:** Le Madrier
> **Generated:** 2026-10-11 21:44:08
> **Page Type:** General

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

- Avoid: No feedback after submit
- Avoid: Placeholder-only inputs

---

## Page-Specific Components

**Pattern:** Form + contact details

- Two columns from 1024 px: request form on beige, contact details and map beside it.
- Fields: arrival, departure, number of guests, extra bed / cot, name, email, phone, message. "Room wanted" is replaced by "extra bed / cot" because there is a single apartment.
- Visible labels, hints, inline errors under each field, error summary with focus, `aria-live` status.
- Form endpoint (Formspree or similar) configurable in `src/config/site.ts`; while it is not set, the form opens the visitor's email client with the request pre-filled.
- Skill suggestion ignored: "Proof (logos, certs, stats)" block — nothing real to show.

---

## Recommendations

> Raw output of the skill, kept for reference. Colours, fonts and style come from MASTER.md (mandatory palette "Miel et bois"); effects that conflict with it are listed as ignored above.

- Forms: Show loading then success/error state
- Accessibility: Use label with for attribute or wrap input
