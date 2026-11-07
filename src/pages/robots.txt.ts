import type { APIRoute } from 'astro';
import { normalizeSiteUrl } from '../lib/site-url';

export const GET: APIRoute = () => {
  const site = normalizeSiteUrl(import.meta.env.SITE);
  const sitemap = site ? `Sitemap: ${new URL('sitemap.xml', site).href}\n` : '';
  return new Response(`User-agent: *\nAllow: /\n${sitemap}`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
