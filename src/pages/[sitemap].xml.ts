import type { APIRoute } from 'astro';
import { normalizeSiteUrl } from '../lib/site-url';
import { PAGE_PATHS, pageUrl } from '../lib/seo';

export function getStaticPaths() {
  return normalizeSiteUrl(import.meta.env.SITE)
    ? [{ params: { sitemap: 'sitemap' } }]
    : [];
}

export const GET: APIRoute = () => {
  const site = new URL(normalizeSiteUrl(import.meta.env.SITE)!);
  const escapeXml = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
  const urls = PAGE_PATHS.map((path) => `<url><loc>${escapeXml(pageUrl(path, site)!)}</loc></url>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>\n`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
