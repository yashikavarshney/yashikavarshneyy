import { PROFILE } from "../data/profile.ts";

export const PAGE_PATHS = ["/", "/portfolio/"] as const;
export const SOCIAL_IMAGE = "/social/portfolio.jpg";
export const HOME_TITLE =
  "Yashika Varshney | Product Designer & Creative Thinker";
export const PORTFOLIO_TITLE =
  "Projects & About | Yashika Varshney, Product Designer";

export function pageUrl(path: string, site?: URL): string | undefined {
  return site ? new URL(path, site).href : undefined;
}

export function structuredData(options: {
  title: string;
  description: string;
  path: "/" | "/portfolio/";
  site?: URL;
}) {
  const { title, description, path, site } = options;
  const canonical = pageUrl(path, site);
  const home = pageUrl("/", site);
  const personId = home ? `${home}#person` : undefined;
  const websiteId = home ? `${home}#website` : undefined;

  const person = {
    "@type": "Person",
    ...(personId && { "@id": personId }),
    name: PROFILE.name,
    alternateName: PROFILE.shortName,
    jobTitle: PROFILE.jobTitle,
    description: PROFILE.description,
    email: `mailto:${PROFILE.email}`,
    sameAs: PROFILE.sameAs,
    knowsAbout: PROFILE.skills,
    ...(home && { url: home }),
  };

  const profilePage = {
    "@type": "ProfilePage",
    ...(canonical && { "@id": `${canonical}#webpage`, url: canonical }),
    name: title,
    description,
    inLanguage: "en",
    ...(websiteId && { isPartOf: { "@id": websiteId } }),
    mainEntity: person,
  };

  const graph: Record<string, unknown>[] = [profilePage];
  if (home) {
    graph.push({
      "@type": "WebSite",
      "@id": websiteId,
      url: home,
      name: `${PROFILE.name} — ${PROFILE.jobTitle}`,
      inLanguage: "en",
      publisher: { "@id": personId },
    });
    if (path === "/portfolio/") {
      const breadcrumbId = `${canonical}#breadcrumbs`;
      graph.push({
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: home },
          {
            "@type": "ListItem",
            position: 2,
            name: "Portfolio",
            item: canonical,
          },
        ],
      });
      Object.assign(profilePage, { breadcrumb: { "@id": breadcrumbId } });
    }
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

/** Escape HTML delimiters so future content cannot end the JSON-LD script. */
export function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}
