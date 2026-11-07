/** No host is inferred from a preview request or a hosting provider. */
export function normalizeSiteUrl(
  value: string | undefined,
): string | undefined {
  const input = value?.trim();
  if (!input) return undefined;

  let url: URL;
  try {
    url = new URL(input);
  } catch {
    throw new Error("SITE_URL must be an absolute http(s) origin.");
  }

  if (
    !["http:", "https:"].includes(url.protocol) ||
    url.username ||
    url.password ||
    url.search ||
    url.hash ||
    url.pathname !== "/"
  ) {
    throw new Error(
      "SITE_URL must be an http(s) origin without credentials, a path, query, or fragment.",
    );
  }
  return url.href;
}
