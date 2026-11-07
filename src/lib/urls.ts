/** Prefix site-local URLs with Astro's deployment path exactly once. */
export function withBase(path: string, base = import.meta.env.BASE_URL): string {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  const prefix = `/${base.replace(/^\/+|\/+$/g, "")}`;
  if (prefix === "/") return path;
  const pathname = path.split(/[?#]/, 1)[0]!;
  if (pathname === prefix || pathname.startsWith(`${prefix}/`)) return path;
  return `${prefix}${path}`;
}

/** Apply the deployment path to the film's public-asset srcset candidates. */
export function withBaseSrcSet(
  srcSet: string,
  base = import.meta.env.BASE_URL,
): string {
  return srcSet
    .split(",")
    .map((candidate) =>
      candidate.trim().replace(/^\S+/, (url) => withBase(url, base)),
    )
    .join(", ");
}
