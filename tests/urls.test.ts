import assert from "node:assert/strict";
import test from "node:test";
import { withBase, withBaseSrcSet } from "../src/lib/urls.ts";

const base = "/yashikavarshneyy/";

test("project deployment paths cover home, pages, and media without duplication", () => {
  for (const [input, expected] of [
    ["/", base],
    ["/portfolio/", `${base}portfolio/`],
    ["/media/person.webm", `${base}media/person.webm`],
    ["/fonts/figtree.woff2", `${base}fonts/figtree.woff2`],
    ["/yashikavarshneyy", "/yashikavarshneyy"],
    ["/yashikavarshneyy/?view=film#intro", `${base}?view=film#intro`],
    ["/yashikavarshneyy/portfolio/", `${base}portfolio/`],
    ["/yashikavarshneyy-other/", `${base}yashikavarshneyy-other/`],
  ]) {
    assert.equal(withBase(input!, base), expected);
    assert.equal(withBase(withBase(input!, base), base), expected);
  }
});

test("root hosting and external, relative, and fragment URLs remain usable", () => {
  for (const url of ["/", "/portfolio/", "/media/person.webp"]) {
    assert.equal(withBase(url, "/"), url);
  }
  for (const url of [
    "https://dribbble.com/yashie_uiux",
    "//cdn.example/photo.webp",
    "mailto:yashikavarshney.yv@gmail.com",
    "#projects",
    "portfolio/",
    "data:image/webp;base64,example",
  ]) {
    assert.equal(withBase(url, base), url);
  }
});

test("responsive candidates retain descriptors and external URLs", () => {
  assert.equal(
    withBaseSrcSet(
      "/media/small.webp 320w, /media/large.webp 820w, https://cdn.example/full.webp 1200w",
      base,
    ),
    `${base}media/small.webp 320w, ${base}media/large.webp 820w, https://cdn.example/full.webp 1200w`,
  );
});
