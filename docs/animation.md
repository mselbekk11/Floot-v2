# Scroll Animations

## Library

All animations use `motion` from `motion/react` (Framer Motion).

## Pattern

Every major section uses the same lightweight scroll-triggered fade-in pattern. There are two animation "weights":

### Intro text (subtitle, heading, description)

```tsx
<motion.div
  initial={{ opacity: 0, y: 12 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
>
```

- `y: 12` — very subtle upward drift (barely noticeable)
- `duration: 0.5` — half a second
- `once: true` — only animates the first time it enters the viewport

### Content blocks (grids, cards, videos)

```tsx
<motion.div
  initial={{ opacity: 0, y: 16 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
>
```

- `y: 16` — slightly more drift than intro text
- `duration: 0.6` — a touch longer
- `delay: 0.1` — staggers after the intro text has started fading in

### Easing

All animations use `[0.25, 0.1, 0.25, 1]` — a smooth ease-out cubic bezier. This is the same easing used in the hero section.

## Components with animations

| Component | File | What's animated |
|-----------|------|-----------------|
| HeroSection | `hero-section.tsx` | h1, p, chat interface (uses `animate` not `whileInView` since it's above the fold) |
| DiscoverTwo | `discover-two.tsx` | Header+tabs row, marketplace button |
| FeatureTwo | `feature-two.tsx` | Text column, video column (per feature section) |
| BentoSeven | `bento-7.tsx` | Intro text, parent card |
| Extras | `extras.tsx` | Intro text, feature grid |
| Yours | `yours.tsx` | Intro text, cards grid |
| Testimonials | `testimonials.tsx` | Intro text, masonry grid |
| CTAThree | `cta-three.tsx` | h2, p, chat interface (already had `whileInView`) |
| FooterTwo | `footer-two.tsx` | Entire footer card |

## Key rules

1. **Hero uses `animate`** (not `whileInView`) because it's visible on page load — no scroll needed
2. **Everything else uses `whileInView`** with `viewport={{ once: true }}` so it only fires once
3. **Always add `'use client'`** at the top of any file importing `motion`
4. **Keep y values small** (12-16px) — the goal is a gentle reveal, not a dramatic entrance
5. **No scale transforms** on regular sections — only the hero and CTA chat interfaces use `scale: 0.98`

## Adding animations to a new section

1. Add `'use client'` to the top of the file
2. Import: `import { motion } from 'motion/react';`
3. Wrap the intro `<div>` with `<motion.div>` using the intro pattern above
4. Wrap the main content `<div>` with `<motion.div>` using the content pattern above
5. That's it — no need to animate individual cards or items within a grid
