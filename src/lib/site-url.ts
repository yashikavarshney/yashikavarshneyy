/** Preserve an optional deployment path; never infer a preview host. */
export function normalizeSiteUrl(
  value: string | undefined,
): string | undefined {
  const input = value?.trim();
  if (!input) return undefined;

  let url: URL;
  try {
    url = new URL(input);
  } catch {
    throw new Error("SITE_URL must be an absolute http(s) URL.");
  }

  if (
    !["http:", "https:"].includes(url.protocol) ||
    url.username ||
    url.password ||
    url.href.includes("?") ||
    url.href.includes("#")
  ) {
    throw new Error(
      "SITE_URL must be an http(s) URL without credentials, a query, or a fragment.",
    );
  }
  if (!url.pathname.endsWith("/")) url.pathname += "/";
  return url.href;
}
