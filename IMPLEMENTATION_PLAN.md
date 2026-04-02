# Implementation Plan

## Status

- Planning iterations: 1
- Build iterations: 0
- Last updated: 2026-04-02

## Tasks

### Phase 1: Foundation

- [x] Replace boilerplate homepage with topic navigation hub — 4 cards (Layout, Selectors, Typography/Color, Animations) with ADHD-friendly short descriptions and clear CTAs
- [ ] Build shared `LiveEditor` component — split-pane CSS input + sandboxed HTML preview, used across all 4 topic areas
- [ ] Build topic page shell — `/[topic]` route with Tutorials / Reference / Challenges tab navigation, consistent header

### Phase 2: Layout Module (spec: layout.md)

- [ ] Layout tutorials — Flexbox basics and wrapping/grow/shrink lessons with LiveEditor
- [ ] Layout tutorials — CSS Grid basics, placement/spanning, and responsive layouts
- [ ] Layout reference — Flexbox and Grid property cards with visual demos; common layout patterns (holy grail, sidebar, card grid)
- [ ] Layout challenges — Centering, navbar, card grid, and holy grail with pass/fail feedback

### Phase 3: Selectors Module (spec: selectors.md)

- [ ] Selectors tutorials — Basic selectors (element, class, ID, universal) and combinators (descendant, child, adjacent, sibling)
- [ ] Selectors tutorials — Pseudo-classes, pseudo-elements, specificity and cascade rules
- [ ] Selectors reference — Selector syntax quick-reference and color-coded specificity scoring guide
- [ ] Selectors challenges — Select the right elements, specificity battles, debug broken stylesheets

### Phase 4: Typography & Color Module (spec: typography-color.md)

- [ ] Typography tutorials — Font properties (family, size, weight, style) and text layout (line-height, letter-spacing, text-align, text-transform)
- [ ] Typography tutorials — Web fonts, color formats (hex, rgb, hsl, oklch), and CSS custom properties for theming
- [ ] Typography reference — Property reference table and color format comparison chart with live swatches
- [ ] Typography challenges — Match typography styles, build HSL color palettes, and theme switcher with custom properties

### Phase 5: Animations Module (spec: animations.md)

- [ ] Animations tutorials — Transitions and 2D/3D transforms (translate, rotate, scale, skew)
- [ ] Animations tutorials — Keyframe animations, combining transforms/animations, prefers-reduced-motion accessibility
- [ ] Animations reference — Transition/transform property cards, timing function gallery with cubic-bezier visualizer
- [ ] Animations challenges — Hover effects, loading spinners, page transitions, and interactive button state transitions

### Phase 6: Testing

- [ ] Unit tests for `LiveEditor` and tab navigation components
- [ ] E2E tests covering each topic module's happy path (load, interact, check output)
- [ ] Update Playwright visual regression baselines for all 4 topic pages

## Completed

<!-- Completed tasks move here -->

## Notes

### Architecture Decisions

- **Routing:** Use Next.js App Router. Route structure: `/` (hub), `/[topic]` (topic shell), `/[topic]/[mode]` (tutorial|reference|challenge)
- **LiveEditor:** Sandboxed `<iframe>` for preview to avoid style leakage into the app shell. CSS typed in editor is injected into iframe's `<style>` tag.
- **Content storage:** Static TypeScript data files (`src/data/[topic].ts`) — no CMS or database needed at this scale
- **State:** Local React state only (no Redux/Zustand). Each challenge page tracks current attempt and pass/fail status.
- **ADHD design rules:** Max ~3 sentences per concept, one concept per screen section, high contrast, no walls of text. Use short headings and visual examples over prose.
- **Tailwind CSS 4:** Uses `@import "tailwindcss"` syntax, not `@tailwind` directives. No `tailwind.config.js` — configured via CSS.
- **Next.js 16 note:** Read `node_modules/next/dist/docs/` before writing routing or data-fetching code — APIs may differ from training data.
