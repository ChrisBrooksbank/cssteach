# CSS/SCSS Teaching PWA — Research & Detailed Plan

## Table of Contents

1. [Existing Teaching Platforms Analysis](#1-existing-teaching-platforms-analysis)
2. [Gamified CSS Learning](#2-gamified-css-learning)
3. [SCSS/Sass Teaching Landscape](#3-scsssass-teaching-landscape)
4. [Teaching Methodology & Pedagogy](#4-teaching-methodology--pedagogy)
5. [Curriculum Design: Three Skill Levels](#5-curriculum-design-three-skill-levels)
6. [PWA Architecture & Tech Stack](#6-pwa-architecture--tech-stack)
7. [Feature Design by Teaching Mode](#7-feature-design-by-teaching-mode)
8. [Competitive Analysis Summary](#8-competitive-analysis-summary)
9. [Implementation Plan](#9-implementation-plan)

---

## 1. Existing Teaching Platforms Analysis

### Top-Tier Platforms

| Platform                          | Approach                           | Strengths                                             | Weaknesses                                 |
| --------------------------------- | ---------------------------------- | ----------------------------------------------------- | ------------------------------------------ |
| **web.dev Learn CSS** (Google)    | Modular, pick-any-topic            | Comprehensive, authoritative, free, includes podcasts | Not interactive, no live coding            |
| **Scrimba**                       | Interactive screencasts ("scrims") | Pause-and-edit in video, 106 scrims, MDN-aligned      | Requires account, limited free tier        |
| **CSS for JS Devs** (Josh Comeau) | Mental-model focused               | Deep understanding, custom interactive widgets        | Paid ($400+), targets JS devs only         |
| **freeCodeCamp**                  | Project-based curriculum           | Free, builds real projects, large community           | Dated UI, limited interactivity            |
| **Codecademy**                    | Step-by-step in-browser editor     | Structured, immediate feedback                        | Paywall for advanced content               |
| **Kevin Powell (YouTube)**        | Visual video tutorials             | Clear explanations, isolated concepts                 | Not interactive, no progress tracking      |
| **W3Schools**                     | Reference + "Try It" editor        | 700+ examples, instant editing                        | Shallow depth, no structured learning path |

### What Makes Them Effective

The most successful platforms share these traits:

- **Immediate feedback loops** — code changes reflected visually in real-time
- **Bite-sized lessons** — 2-10 minutes per concept prevents cognitive overload
- **Project-based learning** — building real things, not just isolated exercises
- **Progressive difficulty** — clear pathways from basics to advanced topics
- **Multiple modalities** — combining text, video, interactive coding, and quizzes

### Key Insight

The market has **no single platform** that combines: (a) gamified challenges, (b) structured curriculum at 3 levels, (c) SCSS alongside CSS, (d) offline-capable PWA, and (e) modern CSS features (container queries, cascade layers, `:has()`, native nesting). This is our gap.

---

## 2. Gamified CSS Learning

### Existing CSS Games

**Flexbox Froggy** — 24 levels moving frogs onto lily pads using Flexbox. Progressive from `justify-content` to complex combinations. No penalty for wrong answers.

**Grid Garden** — 28 levels watering carrots using CSS Grid. Covers `grid-column`, `grid-row`, `grid-area`, `grid-template`. Visual metaphor makes abstract grids tangible.

**CSS Diner** — 32 challenges selecting dinner items using CSS selectors. Covers element, class, ID, descendant, pseudo-class, attribute, and combinator selectors. Steep late-level difficulty.

**CSS Battle** — Competitive code-golf. 300K+ players. Three-column interface (editor, output, target). Scoring combines visual accuracy + character count. Daily targets and themed "battles" drive engagement.

**Others** — Flexbox Defense (tower defense), Flexbox Zombies (narrative RPG), CSS Speedrun (timed selection), Coding Fantasy (RPG-style).

### Why Gamification Works for CSS

- **Isolates one concept** — each game focuses on a single CSS subsystem
- **Visual metaphors** — frogs, gardens, dinner tables make abstract concepts concrete
- **Instant feedback** — every code change immediately visible
- **Progressive difficulty** — early levels build confidence; later levels combine properties
- **Fear-free failure** — no penalties, unlimited attempts, encourages experimentation
- **Competition** — leaderboards and scores drive repeat engagement

### Implications for Our PWA

We should implement **multiple gamification modes**:

1. **Visual Match Challenges** (like CSS Battle) — recreate a target design
2. **Puzzle Games** (like Froggy/Garden) — single-concept focused minigames
3. **Code Fix Challenges** — identify and fix broken CSS
4. **Speed Challenges** — timed exercises for advanced users
5. **Daily Challenges** — fresh content to drive return visits

---

## 3. SCSS/Sass Teaching Landscape

### Current Resources

- **Codecademy Learn Sass** — 7-hour interactive course (PRO only)
- **Udemy Complete Sass & SCSS** — 23 hours, 4.8/5.0 rating, beginner to advanced
- **Great Learning Academy** — Free Sass courses with certificates
- **Hackr.io / Class Central** — Aggregators listing 100+ community-ranked courses

### Standard SCSS Teaching Order

1. Installation and setup (Node.js, compiler configuration)
2. Variables (`$variable-name`) — the gateway concept
3. Nesting — usually the first "aha moment"
4. Partials and `@use`/`@forward` (not deprecated `@import`)
5. Mixins (`@mixin` / `@include`)
6. Extends and placeholders (`@extend`, `%placeholder`)
7. Functions and operators
8. Architecture patterns (7-1 pattern, BEM integration)

### Critical Teaching Point

SCSS curriculum must consistently highlight **which SCSS features now have native CSS equivalents**:

- Variables → CSS Custom Properties (more powerful, runtime)
- Nesting → Native CSS Nesting
- Color functions → `color-mix()`, `oklch()`
- Math → `calc()`, `min()`, `max()`, `clamp()`

The modern SCSS curriculum is as much about knowing **when NOT to use SCSS** as when to use it.

---

## 4. Teaching Methodology & Pedagogy

### Visual-First Pedagogy

CSS is inherently visual. Research in computing education supports **immediate visual feedback** as critical:

- Live preview environments improve retention by 40-60% (freeCodeCamp/Codecademy internal data)
- Visual diagrams for Box Model, Flexbox, and Grid are essential
- Interactive sliders/controls build intuition faster than documentation

### Effective Teaching Strategies

| Strategy                 | Description                                              | Best For               |
| ------------------------ | -------------------------------------------------------- | ---------------------- |
| **Live Sandbox**         | Real-time code editing with visual output                | All levels             |
| **Parsons Problems**     | Rearrange scrambled CSS into correct order               | Beginners              |
| **Faded Examples**       | Complete CSS with progressively removed parts to fill in | Beginners/Intermediate |
| **Error Identification** | Find and fix broken CSS                                  | Intermediate           |
| **Visual Match**         | Recreate a target design from scratch                    | Intermediate/Advanced  |
| **Code Golf**            | Achieve target with minimum code                         | Advanced               |
| **Deliberate Practice**  | "Build with only Flexbox, then rebuild with only Grid"   | Advanced               |
| **Spaced Repetition**    | Revisit concepts at increasing intervals                 | All levels             |

### Misconception-Driven Teaching

Explicitly address known misconceptions at the moment they're most likely to occur:

- "Margin collapse is a bug" — address right after box model
- Confusing `width` with total element size — introduce `box-sizing` early
- Specificity as "weight" vs. scoring system
- `em` vs `rem` inheritance chains
- Percentage heights requiring parent context
- Inline elements ignoring vertical margin/padding

### Three Teaching Modes (Our PWA's Core Innovation)

#### Mode 1: Novice ("Learn CSS from Scratch")

- **Audience**: Complete beginners, designers, non-technical people
- **Approach**: Guided, visual, project-based, encouraging
- **Pacing**: Slow, lots of repetition, small wins early
- **Tone**: Friendly, zero jargon, lots of analogies
- **Assessment**: Gentle quizzes, "try it yourself" sandboxes, visual match (easy targets)

#### Mode 2: Developer ("CSS for Working Developers")

- **Audience**: JS/backend developers who know some CSS but have gaps
- **Approach**: Mental-model focused (inspired by Josh Comeau), explains "why"
- **Pacing**: Faster, skips basics, dives into layout modes and stacking contexts
- **Tone**: Technical but approachable, "you probably thought X, but actually Y"
- **Assessment**: Debug challenges, complex layout tasks, "explain this behavior" quizzes

#### Mode 3: Advanced ("Master Modern CSS & SCSS")

- **Audience**: Senior frontend developers, CSS specialists, UI architects
- **Approach**: Deep dives, performance analysis, architecture patterns, cutting-edge features
- **Pacing**: Self-directed, reference-style with deep-dive articles
- **Tone**: Peer-to-peer, assumes strong fundamentals
- **Assessment**: CSS Battle-style challenges, design system exercises, performance audits

---

## 5. Curriculum Design: Three Skill Levels

### Level 1: Novice — "CSS Foundations" (40 lessons + 20 challenges)

#### Module 1: First Steps (8 lessons)

1. What is CSS? How it connects to HTML
2. Adding CSS: inline, `<style>`, external stylesheets
3. Your first styles: changing colors
4. Selecting elements: tags, classes, IDs
5. Text styling: font-family, size, weight, alignment
6. Colors deep dive: named, hex, rgb, hsl
7. Backgrounds: color, images, gradients
8. **Project: Style a personal card**

#### Module 2: The Box Model (8 lessons)

1. Every element is a box
2. Content, padding, border, margin (visual explorer)
3. `box-sizing: border-box` (the fix everyone uses)
4. Width and height
5. Margin collapse (addressed head-on with visuals)
6. Units: px, em, rem, %, vw, vh
7. Display: block, inline, inline-block
8. **Project: Build a blog post layout**

#### Module 3: Layout with Flexbox (8 lessons)

1. What is Flexbox? The flex container
2. `justify-content` — horizontal alignment
3. `align-items` — vertical alignment
4. `flex-direction` — rows and columns
5. `flex-wrap` — wrapping items
6. `gap` — spacing between items
7. `flex-grow`, `flex-shrink`, `flex-basis`
8. **Project: Build a navigation bar + card grid**

#### Module 4: Layout with Grid (8 lessons)

1. What is CSS Grid? Rows and columns
2. `grid-template-columns` and `grid-template-rows`
3. `gap` in Grid
4. Placing items: `grid-column`, `grid-row`
5. `grid-template-areas` — named areas
6. `fr` unit and `minmax()`
7. `auto-fill` vs `auto-fit`
8. **Project: Build a magazine-style layout**

#### Module 5: Making It Responsive (4 lessons)

1. What is responsive design?
2. Media queries: `@media`
3. Mobile-first approach
4. **Project: Make your previous projects responsive**

#### Module 6: Finishing Touches (4 lessons)

1. Pseudo-classes: `:hover`, `:focus`, `:first-child`
2. Pseudo-elements: `::before`, `::after`
3. Transitions: smooth property changes
4. **Final Project: Build a complete landing page**

#### Novice SCSS Add-on (4 lessons)

1. What is SCSS? Why use it?
2. Variables: `$color-primary`
3. Nesting: cleaner selectors
4. **Practice: Convert your landing page to SCSS**

---

### Level 2: Developer — "CSS Mental Models" (30 lessons + 30 challenges)

#### Module 1: How CSS Actually Works (6 lessons)

1. The cascade: origin, specificity, order — fully explained
2. Specificity calculation: the (0,0,0,0) system
3. Inheritance: which properties inherit and why
4. Computed values vs. used values vs. resolved values
5. The `all` property and `unset`/`revert`/`initial`
6. **Challenge: Predict the output (specificity puzzles)**

#### Module 2: Layout Modes Deep Dive (6 lessons)

1. Normal flow: block formatting context (BFC), inline formatting context
2. Stacking contexts and z-index — the #1 source of CSS bugs
3. Containing blocks: what `position: absolute` is actually relative to
4. Intrinsic sizing: `min-content`, `max-content`, `fit-content`
5. Overflow: scrolling contexts, `overflow: hidden` creating a BFC
6. **Challenge: Debug stacking context issues (5 scenarios)**

#### Module 3: Advanced Flexbox & Grid (6 lessons)

1. Flexbox algorithm: how `flex-grow`/`shrink`/`basis` actually calculate
2. Flexbox and minimum sizes: the `min-width: auto` gotcha
3. Grid placement algorithm: auto-placement, sparse vs. dense
4. Subgrid: aligning nested grids to parent tracks
5. Grid vs Flexbox: choosing the right tool (with examples)
6. **Challenge: Rebuild complex layouts (5 increasingly complex)**

#### Module 4: Responsive Design Systems (6 lessons)

1. Fluid typography with `clamp()`
2. CSS Custom Properties for theming
3. Logical properties: `inline-start`, `block-end`
4. Container queries: component-level responsive design
5. `@media (prefers-color-scheme)`, `prefers-reduced-motion`
6. **Challenge: Build a theme switcher + responsive component library**

#### Module 5: Animations & Performance (3 lessons)

1. `@keyframes` and animation properties
2. Performance: compositing, `will-change`, GPU-accelerated properties
3. **Challenge: Build a performant animated UI**

#### Module 6: CSS Architecture (3 lessons)

1. BEM, CUBE CSS, utility-first philosophies
2. CSS Modules and scoping strategies
3. **Challenge: Refactor a messy stylesheet using BEM**

#### Developer SCSS Track (8 lessons)

1. `@use` and `@forward` module system (not `@import`)
2. Advanced mixins: `@content`, variable arguments, conditionals
3. Functions: `@function`, `@return`, built-in modules
4. Maps and lists: `map-get()`, `map-merge()`, `@each` iteration
5. Control flow: `@if`/`@else`, `@for`, `@while`
6. Responsive mixins: breakpoint management systems
7. Architecture: 7-1 pattern, ITCSS integration
8. **Project: Build a SCSS-powered design token system**

---

### Level 3: Advanced — "Modern CSS Mastery" (25 lessons + 40 challenges)

#### Module 1: Cascade Layers & Modern Cascade (4 lessons)

1. `@layer` — ordering and priority
2. Layered vs unlayered styles precedence
3. Practical architecture: reset, base, components, utilities layers
4. **Challenge: Architect a layered CSS system for a component library**

#### Module 2: The `:has()` Revolution (3 lessons)

1. Parent selection: selecting parents based on children
2. Previous sibling selection and conditional styling
3. **Challenge: Build 5 UI patterns that previously required JavaScript**

#### Module 3: Container Queries Deep Dive (3 lessons)

1. Size queries for component-level responsive design
2. Style queries: checking custom property values
3. **Challenge: Build a fully container-query-driven component system**

#### Module 4: View Transitions & Scroll Animations (4 lessons)

1. Same-document view transitions
2. Cross-document (MPA) view transitions
3. Scroll-driven animations: `animation-timeline: scroll()` and `view()`
4. **Challenge: Build a scroll-storytelling page with zero JavaScript**

#### Module 5: Advanced Selectors & Scope (3 lessons)

1. Native CSS nesting vs SCSS nesting
2. `@scope` — donut scope, proximity-based specificity
3. **Challenge: Refactor a component library using native nesting + @scope**

#### Module 6: Modern Color & Typography (3 lessons)

1. `oklch()`, `oklab()`, `color-mix()`
2. `text-wrap: balance`, `text-wrap: pretty`
3. **Challenge: Build a perceptually uniform color system with oklch()**

#### Module 7: Cutting Edge (3 lessons)

1. Anchor positioning (`anchor()`, `@position-try`)
2. `@property` rule — typed custom properties
3. **Challenge: Build tooltip/popover system with anchor positioning**

#### Module 8: CSS Battle Arena (2 lessons + ongoing)

1. Code golf techniques and strategies
2. Advanced rendering tricks
3. **Ongoing: Daily challenges, leaderboards, competitive mode**

#### Advanced SCSS Track (5 lessons)

1. Meta-programming: `meta.mixin-exists()`, dynamic calls
2. Complex map structures for design tokens
3. Generating utility classes programmatically
4. Building a design system with SCSS
5. **Migration strategies: SCSS → Native CSS (when to stay, when to go)**

---

## 6. PWA Architecture & Tech Stack

### Recommended Stack

| Layer                  | Technology                 | Rationale                                                                      |
| ---------------------- | -------------------------- | ------------------------------------------------------------------------------ |
| **Framework**          | SvelteKit                  | Smallest bundle, excellent PWA support, fast                                   |
| **Code Editor**        | CodeMirror 6               | Lighter than Monaco, mobile-friendly, CSS/SCSS language support                |
| **Live Preview**       | `<iframe srcdoc>`          | Standard sandbox approach (used by CodePen, CodeSandbox)                       |
| **SCSS Compilation**   | Dart Sass (WASM)           | Client-side SCSS→CSS compilation, no server needed                             |
| **Service Worker**     | Workbox                    | Google's standard, cache-first for lessons, stale-while-revalidate for dynamic |
| **Local Storage**      | IndexedDB (via Dexie.js)   | User progress, lesson cache, code submissions                                  |
| **Styling**            | Tailwind CSS + custom CSS  | Rapid development, dogfooding CSS                                              |
| **Visual Comparison**  | Canvas pixel diff          | For CSS Battle-style challenges, compare rendered vs target                    |
| **Auth (optional)**    | Firebase Auth or Supabase  | Social login, cross-device sync                                                |
| **Backend (optional)** | Supabase or Firebase       | Leaderboards, daily challenges, user profiles                                  |
| **Deployment**         | Vercel or Cloudflare Pages | Edge-deployed, fast globally                                                   |

### Offline Architecture

```
┌─────────────────────────────────────────────┐
│                   PWA Shell                  │
├─────────────┬─────────────┬─────────────────┤
│  Lessons    │  Challenges │  Code Sandbox   │
│  (cached)   │  (cached)   │  (client-side)  │
├─────────────┴─────────────┴─────────────────┤
│           Service Worker (Workbox)           │
├─────────────┬─────────────┬─────────────────┤
│ Cache API   │ IndexedDB   │ SCSS WASM       │
│ (assets)    │ (progress)  │ (compilation)   │
├─────────────┴─────────────┴─────────────────┤
│        Background Sync (when online)         │
└─────────────────────────────────────────────┘
```

### Key Offline Capabilities

1. **Full lesson content cached** via service worker after first load
2. **In-browser SCSS compilation** — Dart Sass compiled to WASM, no server needed
3. **Live preview rendering** — HTML/CSS in iframe, entirely client-side
4. **Progress tracking in IndexedDB** — stored locally, synced when online
5. **Visual comparison engine** — canvas pixel diff for challenge scoring, client-side
6. **Installable** — full PWA manifest, "Add to Home Screen" on mobile
7. **Background sync** — progress synced to server when connectivity returns

### Performance Targets

- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Lighthouse PWA score: 100
- Offline: all core learning paths functional

---

## 7. Feature Design by Teaching Mode

### Mode 1: Novice — "Guided Learning"

**UI/UX:**

- Clean, uncluttered interface with large text and clear visuals
- Side-by-side: lesson text (left) + live preview (right)
- "Try It" buttons inline with lesson text that pre-populate the editor
- Progress bar showing module/lesson completion
- Encouraging feedback ("Great job!", "Almost there!")

**Features:**

- Syntax-highlighted code editor with autocomplete
- Live preview updating as user types
- Inline visual diagrams (box model explorer, Flexbox visualizer)
- Guided projects with step-by-step instructions
- Hints system (3 hints per challenge, increasingly specific)
- Glossary of CSS terms with visual examples
- Achievement badges for completing modules

**Challenges:**

- Fill-in-the-blank CSS properties
- Parsons problems (drag-and-drop CSS into correct order)
- Visual match (easy targets with large tolerance)
- "Spot the difference" between two rendered outputs

---

### Mode 2: Developer — "Deep Dives"

**UI/UX:**

- Three-panel: lesson/article (left) + code editor (center) + live preview (right)
- "What do you think happens?" predictions before revealing behavior
- Interactive diagrams for stacking contexts, BFC, containing blocks
- Tabbed interface for switching between CSS/SCSS/output

**Features:**

- Multi-file editor (HTML + CSS + SCSS)
- DevTools-style computed values panel
- Specificity calculator widget
- Side-by-side comparison: "Your approach" vs "Optimal approach"
- Bookmarkable deep-dive articles
- SCSS ↔ CSS toggle showing compiled output

**Challenges:**

- "Predict the output" — guess what CSS will render before seeing it
- Debug challenges — fix broken layouts (stacking context, overflow, specificity)
- Rebuild challenges — recreate a complex UI from a screenshot
- Refactor challenges — improve CSS architecture of messy code
- "Explain this behavior" — written explanations graded by keyword matching

---

### Mode 3: Advanced — "CSS Arena"

**UI/UX:**

- Minimalist, power-user interface
- CSS Battle-style three columns: editor, output, target
- Real-time character count and accuracy percentage
- Leaderboard sidebar
- Feature compatibility matrix widget

**Features:**

- CSS Battle engine with pixel-perfect comparison
- Daily challenges with global leaderboard
- Weekly themed "battles" (e.g., "Container Queries Week")
- Solution sharing and discussion (after completion)
- Performance profiling panel (paint times, layer counts)
- Browser compatibility checker for cutting-edge features
- SCSS challenge mode: build complex systems with SCSS

**Challenges:**

- Visual match (pixel-perfect, scored by accuracy + code length)
- Speed challenges (timed, correct solution fastest wins)
- Architecture challenges (design a token system, layer architecture)
- "Zero JS" challenges (build interactive UIs with only CSS)
- Code review challenges (evaluate and improve submitted CSS)

---

## 8. Competitive Analysis Summary

### What Exists vs. What We're Building

| Feature                 | Flexbox Froggy | CSS Battle | Scrimba  | Josh Comeau | **Our PWA**  |
| ----------------------- | -------------- | ---------- | -------- | ----------- | ------------ |
| Beginner-friendly       | Yes            | No         | Yes      | No          | **Yes**      |
| Developer mental models | No             | No         | No       | Yes         | **Yes**      |
| Advanced/competitive    | No             | Yes        | No       | Partial     | **Yes**      |
| SCSS included           | No             | No         | No       | No          | **Yes**      |
| Offline/PWA             | No             | No         | No       | No          | **Yes**      |
| Modern CSS (2024+)      | No             | Partial    | No       | Partial     | **Yes**      |
| Gamified                | Yes            | Yes        | No       | Partial     | **Yes**      |
| Free                    | Yes            | Freemium   | Freemium | Paid        | **Freemium** |
| 3 skill levels          | No             | No         | No       | No          | **Yes**      |

### Our Unique Value Proposition

**The only PWA that combines structured CSS/SCSS curriculum at three skill levels with gamified challenges, offline support, and coverage of modern CSS features.**

---

## 9. Implementation Plan

### Phase 1: Foundation (Weeks 1-3)

- [ ] SvelteKit project setup with PWA configuration
- [ ] CodeMirror 6 integration with CSS/SCSS language support
- [ ] iframe-based live preview system
- [ ] Basic lesson rendering engine (Markdown → interactive lessons)
- [ ] Service worker with Workbox for offline caching
- [ ] IndexedDB progress tracking (Dexie.js)

### Phase 2: Novice Track (Weeks 4-6)

- [ ] Modules 1-3 lesson content (First Steps, Box Model, Flexbox)
- [ ] Inline "Try It" sandboxes
- [ ] Visual diagrams (Box Model explorer, Flexbox visualizer)
- [ ] Fill-in-the-blank and Parsons problem challenge types
- [ ] Basic visual match challenges with tolerance scoring
- [ ] Progress tracking and achievement badges

### Phase 3: Developer Track (Weeks 7-9)

- [ ] Modules 1-3 lesson content (Cascade, Layout Modes, Advanced Flex/Grid)
- [ ] Multi-file editor (HTML + CSS + SCSS tabs)
- [ ] SCSS compilation via Dart Sass WASM
- [ ] "Predict the output" challenge type
- [ ] Debug challenge type with scenario engine
- [ ] Specificity calculator widget

### Phase 4: Advanced Track (Weeks 10-12)

- [ ] Modern CSS lesson content (Layers, :has(), Container Queries, etc.)
- [ ] CSS Battle engine with pixel-perfect comparison
- [ ] Leaderboard system (requires backend)
- [ ] Daily challenge generation/curation system
- [ ] Solution sharing and discussion

### Phase 5: SCSS Deep Dive (Weeks 13-14)

- [ ] SCSS curriculum content at all three levels
- [ ] SCSS ↔ compiled CSS comparison view
- [ ] SCSS-specific challenges
- [ ] "SCSS vs Native CSS" comparison tool

### Phase 6: Polish & Launch (Weeks 15-16)

- [ ] PWA manifest, icons, splash screens
- [ ] Performance optimization (Lighthouse 100)
- [ ] User onboarding flow (skill-level assessment quiz)
- [ ] Analytics integration
- [ ] Beta testing and content review
- [ ] Launch

### Stretch Goals

- AI-powered hint system (explain why code isn't matching target)
- Community challenge creation
- Multiplayer CSS Battle mode
- VS Code extension integration
- Certificate of completion

---

## Sources

- [web.dev Learn CSS](https://web.dev/learn/css) — Google's comprehensive CSS course
- [Scrimba HTML & CSS Course](https://scrimba.com/learn/htmlandcss) — Interactive screencasts, MDN-aligned
- [CSS for JavaScript Developers](https://css-for-js.dev/) — Josh W. Comeau's mental-model course
- [freeCodeCamp Learn CSS](https://www.freecodecamp.org/news/learn-css/) — Free project-based curriculum
- [Codecademy Learn CSS](https://www.codecademy.com/learn/learn-css) — Step-by-step interactive
- [Codecademy Learn Sass](https://www.codecademy.com/learn/learn-sass) — Interactive SCSS course
- [Flexbox Froggy](https://flexboxfroggy.com/) — Gamified Flexbox learning
- [Grid Garden](https://cssgridgarden.com/) — Gamified CSS Grid learning
- [CSS Diner](https://flukeout.github.io/) — Gamified CSS selector learning
- [CSS Battle](https://cssbattle.dev/) — Competitive CSS code golf
- [Web Maker PWA](https://webmaker.app/) — Offline-first code playground
- [HCODX](https://hcodx.com/) — Offline HTML/CSS editor PWA
- [Learn to Code HTML & CSS](https://learn.shayhowe.com/) — Shay Howe's structured courses
- [Kevin Powell YouTube](https://www.youtube.com/@KevinPowell) — Visual CSS tutorials
- [The Odin Project](https://www.theodinproject.com/) — Full-stack curriculum with CSS track
