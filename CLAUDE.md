# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `bun run dev` (Vite with HMR)
- **Build:** `bun run build` (runs `tsc -b && vite build`)
- **Lint:** `bun run lint` (ESLint)
- **Preview production build:** `bun run preview`
- **Install dependencies:** `bun install`

## Tech Stack

- React 19 + TypeScript (~5.9), Vite 7, Tailwind CSS 4 (via `@tailwindcss/vite` plugin)
- Package manager: bun (see `bun.lock`)
- Node 22 required (see `engines` in package.json)
- ESLint with typescript-eslint, react-hooks, and react-refresh plugins

## Architecture

This is a product catalog app using static data from [dummyjson.com](https://dummyjson.com/products) format.

- `src/main.tsx` — React entry point (StrictMode, renders into `#root`)
- `src/App.tsx` — Root component, renders a product grid layout
- `src/components/` — UI components (e.g., `Product.tsx` takes an `IProduct` prop)
- `src/interfaces/` — TypeScript interfaces (e.g., `IProduct.ts` mirrors the dummyjson product schema)
- `src/data/` — Static data files (`products_data.ts`)
- `src/utils/` — Utility functions (e.g., `formatPrice.ts` uses `Intl.NumberFormat`)

## Styling

- Tailwind CSS 4 imported via `@reference "tailwindcss"` in `src/index.css`
- Custom button component classes (`.btn`, `.btn-primary`, `.btn-secondary`, etc.) defined in `src/index.css` using `@layer components` with `@apply` directives
- Button size variants: `.btn-sm`, `.btn-md`, `.btn-lg`

## Conventions

- Interfaces prefixed with `I` (e.g., `IProduct`)
- Components are default-exported function components with typed props
- Props interfaces defined inline in the component file (e.g., `ProductProps`)
