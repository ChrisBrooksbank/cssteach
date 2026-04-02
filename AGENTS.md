<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# AGENTS.md - Operational Guide

Keep this file under 60 lines. It's loaded every iteration.

## Build Commands

```bash
npm run build          # Production build
npm run dev            # Development server
```

## Test Commands

```bash
npm run test:run       # Run unit tests once
npm run test:coverage  # Coverage report
npm run test:e2e       # Playwright end-to-end tests
```

## Validation (run before committing)

```bash
npm run typecheck && npm run lint && npm run test:run
```

## Project Notes

- Next.js 16 with React 19, Tailwind CSS 4, TypeScript
- UI must be short, scannable, low cognitive load (ADHD-friendly design)
- Three content modes: interactive tutorials, reference/cheat sheets, challenges
- Four topic areas: layout, selectors, typography/color, animations
- Done criteria: all tests pass
