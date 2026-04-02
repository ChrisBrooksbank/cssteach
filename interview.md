# Project Interview — CSS/SCSS Teaching PWA

## About the Developer

- **Background**: Experienced developer — C#, JavaScript, .NET, many years of professional experience
- **Pain point**: Struggles with frontend work and CSS despite strong programming skills. Suspected ADHD makes it harder to focus on dense content, and difficulty looking at something visually and deciding what needs changing or how
- **This means**: The app should be built by a developer, for developers (and others) who find CSS frustrating — with particular attention to ADHD-friendly design patterns

## Technical Decisions

| Decision      | Choice                                                                                                             |
| ------------- | ------------------------------------------------------------------------------------------------------------------ |
| **Framework** | Next.js                                                                                                            |
| **Backend**   | None — fully client-side                                                                                           |
| **Hosting**   | Netlify                                                                                                            |
| **PWA**       | Yes — installable, with install promotion dialogs, update detection, and cache name bumping for version management |

### PWA Requirements (Hard Requirements)

- Must be a fully installable PWA
- Install promotion dialogs to encourage users to install
- Update detection — notify users when new version is available
- Cache name bumping strategy so updates are properly detected and applied
- Offline-capable for core learning paths

## Scope & Content

| Decision             | Choice                                                                                |
| -------------------- | ------------------------------------------------------------------------------------- |
| **Skill levels**     | All three from day one (Novice, Developer, Advanced)                                  |
| **SCSS**             | First-class citizen (or near first-class) alongside CSS                               |
| **Content creation** | AI-generated (by Claude), not hand-written                                            |
| **Content format**   | Structured YAML files with rich metadata (audience level, estimated time, tags, etc.) |
| **Content quality**  | Top quality is a hard requirement — this is crucial                                   |
| **Monetization**     | None — free, open-source side project                                                 |

## Design & UX Principles

### ADHD-Friendly Design (Core Requirement)

- **Short lessons** — bite-sized, max 5-10 minutes each
- **Low cognitive load UI** — clean, uncluttered, not too much on screen at once
- **Easy pick-up/put-down** — progress saved automatically, resume exactly where you left off
- **No walls of text** — content must be scannable, visual, with generous whitespace
- **Clear progress indicators** — always know where you are and what's next
- **Text not too dense** — generous spacing, breathing room on every page

### Visual Learning Tools

- **Visual diff overlays** — show exactly where your CSS output differs from the target
- **Property explorers with sliders** — change CSS values in real-time to see what each property does
- **Interactive diagrams** — box model explorer, Flexbox visualizer, Grid visualizer

### Accessibility

- Light/dark mode support
- Easy text size adjustment
- General WCAG best practices
- Color blindness considerations in UI design

## Gamification

- **Mix of styles** — not just one approach:
  - Puzzle games (Froggy-style single-concept challenges)
  - Competitive code golf (CSS Battle-style visual matching)
  - Debug challenges (find and fix broken CSS)
  - Speed challenges for advanced users
- **Great interactivity** is a priority alongside great content

## Summary of Hard Requirements

1. Next.js on Netlify — no backend
2. Installable PWA with install prompts, update detection, cache bumping
3. All three skill levels from launch
4. SCSS as first-class citizen
5. Top quality AI-generated content in structured YAML
6. ADHD-friendly: short lessons, clean UI, visual tools, low density
7. Visual diff for comparing output to target
8. Interactive property explorers
9. Light/dark mode + adjustable text size
10. Free and open source
