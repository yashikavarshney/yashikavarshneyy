import assert from "node:assert/strict";
import test from "node:test";
import { chooseVideoSource } from "../src/lib/video-source.ts";

const person = "/media/b0a1f9aa8422854494c7d826a18e2b58.webm";
const dog = "/media/6c6aed35f42cdf7dff61b6043078d79f.webm";

test("a 412px phone at DPR 1.75 selects renditions covering its projection", () => {
  const scale = 412 / 1920;
  assert.deepEqual(chooseVideoSource(person, scale, 1.75), {
    src: "/media/responsive/b0a1f9aa8422854494c7d826a18e2b58-480h.webm",
    height: 480,
  });
  assert.deepEqual(chooseVideoSource(dog, scale, 1.75), {
    src: "/media/responsive/6c6aed35f42cdf7dff61b6043078d79f-120h.webm",
    height: 120,
  });
});

test("a 1440px desktop keeps original sources", () => {
  for (const src of [person, dog]) {
    assert.deepEqual(chooseVideoSource(src, 1440 / 1920, 1), {
      src,
      height: Infinity,
    });
  }
});

test("a 390px phone at DPR 3 keeps the original person source", () => {
  assert.deepEqual(chooseVideoSource(person, 390 / 1920, 3), {
    src: person,
    height: Infinity,
  });
});

test("sources without renditions remain unchanged", () => {
  for (const src of ["/media/another-clip.webm", "toString"]) {
    assert.deepEqual(chooseVideoSource(src, 412 / 1920, 1.75), {
      src,
      height: Infinity,
    });
  }
});

test("a small viewport uses the smallest person rendition", () => {
  assert.deepEqual(chooseVideoSource(person, 200 / 1920, 1), {
    src: "/media/responsive/b0a1f9aa8422854494c7d826a18e2b58-320h.webm",
    height: 320,
  });
});

test("crossing a rendition height upgrades the source", () => {
  const scaleFor480 = 480 / (735 * 1.6);
  assert.equal(chooseVideoSource(person, scaleFor480, 1).height, 480);
  assert.deepEqual(chooseVideoSource(person, scaleFor480 + 0.001, 1), {
    src: person,
    height: Infinity,
  });
});

test("invalid viewport measurements fall back to the original", () => {
  for (const [scale, ratio] of [
    [0, 1],
    [-1, 1],
    [NaN, 1],
    [Infinity, 1],
    [1, 0],
    [1, -1],
    [1, NaN],
    [1, Infinity],
  ]) {
    assert.deepEqual(chooseVideoSource(person, scale!, ratio!), {
      src: person,
      height: Infinity,
    });
  }
});
