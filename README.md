# Interactive History Map

A single-page application for exploring historical locations and their global significance through an interactive map interface. Each location links to a detail page covering the site's history, daily life, and connections to broader global networks.

## Stack

- **React 19** — UI framework
- **TypeScript** — type-safe throughout
- **Vite 6** — build tooling and dev server
- **MapLibre GL / react-map-gl** — vector tile rendering for the interactive map
- **MUI (Material UI v6)** — layout primitives and component base
- **Tailwind CSS v4** — utility styling via the Vite plugin
- **Jotai** — lightweight atomic state management
- **Framer Motion** — page and component animations
- **wouter** — minimal client-side routing

Content is statically defined in TypeScript modules under `src/content/`, one file per location. Images are served from `public/`.

The app is deployed as a static site to GitHub Pages at `/interactive-history-map/`.

## Development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

## Build

```bash
npm run build
```

This runs `tsc -b` followed by `vite build`. Output goes to `dist/`.

To preview the production build locally:

```bash
npm run preview
```

## Deploy

The app deploys to GitHub Pages via `gh-pages`. Build first, then deploy from `main`:

```bash
npm run build
npm run deploy
```
