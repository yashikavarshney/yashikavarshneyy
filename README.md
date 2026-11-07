# Yashika Varshney's portfolio

An animated portfolio built with Astro and React TSX components. Astro pre-renders the TSX components to static HTML at build time without client hydration. A small TypeScript browser script controls the film timeline, playback, and navigation; visitors do not download a React runtime. No server adapter is required.

## Development

Use Node.js 22.23.4 or newer and npm 9.6.5 or newer.

```sh
npm ci
npm run dev
```

The development server prints its local preview address.

```sh
npm run check
npm run build
npm run preview
```

`check` validates Astro and TypeScript files. `build` writes the production site to `dist/`; `preview` serves that build locally.

## Project structure

```text
src/
  pages/index.astro             Home page
  layouts/BaseLayout.astro      Document metadata and shared styles
  components/PortfolioFilm.tsx  Film composition
  components/FilmControls.tsx   Playback and chapter controls
  components/FilmOverlays.tsx   Shared visual overlays
  components/scenes/            Individual TSX film scenes
  data/film.ts                 Chapter and shot timing
  scripts/film-player.ts        Browser playback and input handling
  styles/fonts.css             Local font definitions
  styles/portfolio.css         Original portfolio styling and animation
public/
  fonts/                       WOFF2 fonts
  media/                       WebP images and WebM videos
```

Media and fonts are separate files so browsers can cache them independently. Edit scenes, styles, or timing data in `src/`; `dist/` is generated output.

The original artwork, typography, scene composition, and 230-second animation timeline are preserved. Videos load when their scenes become visible. Chapter navigation opens readable frames, and the transparent closing overlay no longer blocks contact links.

This migration keeps the original fixed-ratio mobile layout and Safari poster fallback. It does not redesign the mobile experience or provide a complete reduced-motion alternative.

## Hosting

Run `npm ci` followed by `npm run build`, then publish the contents of `dist/` to a static host. Production does not need a Node.js server. The film's interactive controls require JavaScript in the visitor's browser.
