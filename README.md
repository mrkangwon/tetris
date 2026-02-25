# Tetris (Incremental Build)

This repository contains the first milestone of an incremental classic Tetris implementation.

> Note: the default stack target is TypeScript + Vite + Vitest. In this environment, package registry access is blocked, so this milestone uses TypeScript compiled with `tsc` plus Node's built-in test runner while preserving pure core game logic and tests.

## Milestone scope (current)

- Project scaffold with TypeScript.
- Minimal UI scaffold with a canvas and status panel placeholders.
- Pure board logic helpers with unit tests for rotation, collision, and line clears.
- Backlog document for future milestones.

## Install

```bash
npm install
```

## Run locally

```bash
npm run build
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Build

```bash
npm run build
```

## Test

```bash
npm test
```

## Lint / Format

```bash
npm run lint
npm run format
```
