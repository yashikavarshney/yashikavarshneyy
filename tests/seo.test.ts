import assert from "node:assert/strict";
import test from "node:test";
import { PROFILE } from "../src/data/profile.ts";
import { normalizeSiteUrl } from "../src/lib/site-url.ts";
import {
  HOME_TITLE,
  PORTFOLIO_TITLE,
  SOCIAL_IMAGE,
  pageUrl,
  serializeJsonLd,
  structuredData,
} from "../src/lib/seo.ts";

test("an absent or blank SITE_URL does not imply a host", () => {
  assert.equal(normalizeSiteUrl(undefined), undefined);
  assert.equal(normalizeSiteUrl("  "), undefined);
  assert.equal(pageUrl("/portfolio/"), undefined);
  const schema = structuredData({
    title: HOME_TITLE,
    description: PROFILE.description,
    path: "/",
  });
  const page = schema["@graph"][0]!;
  const person = page.mainEntity as Record<string, unknown>;
  assert.equal(page["@type"], "ProfilePage");
  assert.equal(person["@type"], "Person");
  assert.equal(person.name, PROFILE.name);
  assert.equal("@id" in person, false);
  assert.equal("@id" in page, false);
  assert.equal("url" in page, false);
  assert.equal("isPartOf" in page, false);
  assert.deepEqual(
    schema["@graph"].map((node) => node["@type"]),
    ["ProfilePage"],
  );
});

test("SITE_URL normalizes root and project URLs while rejecting unsafe URLs", () => {
  assert.equal(
    normalizeSiteUrl(" https://portfolio.example "),
    "https://portfolio.example/",
  );
  assert.equal(
    normalizeSiteUrl(" https://yashikavarshney.github.io/yashikavarshneyy "),
    "https://yashikavarshney.github.io/yashikavarshneyy/",
  );
  for (const invalid of [
    "not-a-url",
    "javascript:alert(1)",
    "ftp://portfolio.example",
    "https://user:pass@portfolio.example",
    "https://portfolio.example/?tracking=1",
    "https://portfolio.example/#fragment",
    "https://portfolio.example/yashikavarshneyy/?",
    "https://portfolio.example/yashikavarshneyy/#",
  ]) {
    assert.throws(() => normalizeSiteUrl(invalid), /SITE_URL/);
  }
});

test("site-relative routes and assets preserve a GitHub Pages project path", () => {
  const site = new URL("https://yashikavarshney.github.io/yashikavarshneyy/");
  const home = "https://yashikavarshney.github.io/yashikavarshneyy/";
  assert.equal(pageUrl("/", site), home);
  assert.equal(pageUrl("", site), home);
  assert.equal(pageUrl("/portfolio/", site), `${home}portfolio/`);
  assert.equal(pageUrl("portfolio/", site), `${home}portfolio/`);
  assert.equal(pageUrl(SOCIAL_IMAGE, site), `${home}social/portfolio.jpg`);
  assert.equal(pageUrl("/sitemap.xml", site), `${home}sitemap.xml`);
  assert.equal(pageUrl("/robots.txt", site), `${home}robots.txt`);
  assert.equal(
    pageUrl("/portfolio/", new URL(home.slice(0, -1))),
    `${home}portfolio/`,
  );
  assert.throws(() => pageUrl("../portfolio/", site), /within SITE_URL/);
  assert.throws(
    () => pageUrl("https://unrelated.example/portfolio/", site),
    /within SITE_URL/,
  );
});

test("project deployments keep JSON-LD identities and breadcrumbs inside their base", () => {
  const base = "https://yashikavarshney.github.io/yashikavarshneyy/";
  const site = new URL(base);
  const home = structuredData({
    title: HOME_TITLE,
    description: PROFILE.description,
    path: "/",
    site,
  });
  const portfolio = structuredData({
    title: PORTFOLIO_TITLE,
    description: PROFILE.description,
    path: "/portfolio/",
    site,
  });
  const person = portfolio["@graph"][0]!.mainEntity as Record<string, unknown>;
  const website = portfolio["@graph"].find((node) => node["@type"] === "WebSite")!;
  const breadcrumb = portfolio["@graph"].find((node) => node["@type"] === "BreadcrumbList")!;
  const items = breadcrumb.itemListElement as Record<string, unknown>[];
  assert.equal(home["@graph"][0]!.url, base);
  assert.equal(portfolio["@graph"][0]!.url, `${base}portfolio/`);
  assert.equal(person["@id"], `${base}#person`);
  assert.equal(person.url, base);
  assert.equal(website["@id"], `${base}#website`);
  assert.equal(website.url, base);
  assert.deepEqual(items.map((item) => item.item), [base, `${base}portfolio/`]);
  assert.deepEqual(portfolio["@graph"][0]!.breadcrumb, {
    "@id": `${base}portfolio/#breadcrumbs`,
  });
});

test("configured pages share one person identity but have distinct canonicals", () => {
  const site = new URL("https://portfolio.example/");
  const home = structuredData({
    title: HOME_TITLE,
    description: PROFILE.description,
    path: "/",
    site,
  });
  const portfolio = structuredData({
    title: PORTFOLIO_TITLE,
    description: PROFILE.description,
    path: "/portfolio/",
    site,
  });
  const homePerson = home["@graph"][0]!.mainEntity as Record<string, unknown>;
  const portfolioPerson = portfolio["@graph"][0]!.mainEntity as Record<
    string,
    unknown
  >;
  assert.equal(homePerson["@id"], "https://portfolio.example/#person");
  assert.equal(portfolioPerson["@id"], homePerson["@id"]);
  assert.equal(home["@graph"][0]!.url, "https://portfolio.example/");
  assert.equal(
    portfolio["@graph"][0]!.url,
    "https://portfolio.example/portfolio/",
  );
  assert.deepEqual(portfolioPerson.sameAs, PROFILE.sameAs);
  assert.equal("worksFor" in portfolioPerson, false);
  assert.equal("dateModified" in portfolio["@graph"][0]!, false);
});

test("breadcrumbs describe the readable page hierarchy only when URLs exist", () => {
  const site = new URL("https://portfolio.example/");
  const schema = structuredData({
    title: PORTFOLIO_TITLE,
    description: PROFILE.description,
    path: "/portfolio/",
    site,
  });
  const breadcrumb = schema["@graph"].find(
    (node) => node["@type"] === "BreadcrumbList",
  )!;
  const items = breadcrumb.itemListElement as Record<string, unknown>[];
  assert.deepEqual(
    items.map((item) => [item.position, item.name, item.item]),
    [
      [1, "Home", "https://portfolio.example/"],
      [2, "Portfolio", "https://portfolio.example/portfolio/"],
    ],
  );
  const withoutSite = structuredData({
    title: PORTFOLIO_TITLE,
    description: PROFILE.description,
    path: "/portfolio/",
  });
  assert.equal(
    withoutSite["@graph"].some((node) => node["@type"] === "BreadcrumbList"),
    false,
  );
});

test("JSON-LD cannot close its script tag and preserves the original text", () => {
  const input = {
    text: '</script><script>alert("test")</script> & \u2028\u2029',
  };
  const serialized = serializeJsonLd(input);
  assert.equal(serialized.includes("<"), false);
  assert.equal(serialized.includes(">"), false);
  assert.equal(serialized.includes("&"), false);
  assert.deepEqual(JSON.parse(serialized), input);
});
