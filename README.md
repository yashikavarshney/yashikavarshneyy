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
npm test
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

## SEO and structured data

Set `SITE_URL` to the public origin at build time, or copy `.env.example` to `.env` and fill it in. The site currently serves from the domain root, so use an origin without a subdirectory, query, or fragment.

```sh
SITE_URL=https://your-domain.tld npm run build
```

When set, this generates canonical URLs, absolute Open Graph/Twitter sharing URLs, stable JSON-LD identifiers, `sitemap.xml`, and the sitemap reference in `robots.txt`. When unset or blank, those domain-dependent fields and the sitemap are omitted; no preview host or placeholder domain is substituted. Invalid non-empty values fail the build.

Both pages include descriptive titles, descriptions, author metadata, crawl directives, and factual `ProfilePage`/`Person` JSON-LD. With `SITE_URL` set, the graph also includes `WebSite` and visible `BreadcrumbList` markup on `/portfolio/`. The sharing image is a screenshot of the existing portfolio. Edit `src/data/profile.ts` for identity, social profiles, and readable project summaries.

The public `/portfolio/` page exposes the project text, headings, images, contact links, and answers without animation or JavaScript. It is linked from the film and provides a readable source for people, search engines, and answer engines. It is not hidden crawler-only content. The film's no-JavaScript fallback also links to this page.

The structured data describes the existing content; it does not assert ratings, current employment, a complete hosted video, or unsupported qualifications. Valid markup does not guarantee rich-result display. Once deployed with `SITE_URL`, validate the live pages with Google's Rich Results Test and submit the sitemap in Search Console. See Google's [profile markup documentation](https://developers.google.com/search/docs/appearance/structured-data/profile-page) and [AI search guidance](https://developers.google.com/search/docs/appearance/ai-features); there is no special AEO schema or `llms.txt` requirement for Google's AI search features.
