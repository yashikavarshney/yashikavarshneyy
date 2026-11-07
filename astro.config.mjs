import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import { loadEnv } from 'vite';
import { normalizeSiteUrl } from './src/lib/site-url.ts';

const environment = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), 'SITE_URL');
const site = normalizeSiteUrl(process.env.SITE_URL ?? environment.SITE_URL);

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  integrations: [react()],
});
