import type { APIRoute } from 'astro';
import { normalizeSiteUrl } from '../lib/site-url';
import { pageUrl } from '../lib/seo';

export const GET: APIRoute = () => {
  const site = normalizeSiteUrl(import.meta.env.SITE);
  const sitemap = site ? `Sitemap: ${pageUrl('/sitemap.xml', new URL(site))}\n` : '';
  return new Response(`User-agent: *\nAllow: /\n${sitemap}`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
