import { VIDEO_LAYOUT, VIDEO_VARIANTS } from "../data/video-variants.ts";

/** Select a rendition using the largest projected height in physical pixels. */
export function chooseVideoSource(
  originalSrc: string,
  stageScale: number,
  pixelRatio: number,
): { src: string; height: number } {
  const original = { src: originalSrc, height: Number.POSITIVE_INFINITY };
  if (
    !Object.hasOwn(VIDEO_LAYOUT, originalSrc) ||
    !Object.hasOwn(VIDEO_VARIANTS, originalSrc)
  )
    return original;

  const layout = VIDEO_LAYOUT[originalSrc]!;
  const targetHeight =
    layout.designHeight * layout.maxScale * stageScale * pixelRatio;
  if (
    !Number.isFinite(stageScale) ||
    stageScale <= 0 ||
    !Number.isFinite(pixelRatio) ||
    pixelRatio <= 0 ||
    !Number.isFinite(targetHeight)
  )
    return original;

  const variant = VIDEO_VARIANTS[originalSrc]!.find(
    (candidate) => candidate.height >= targetHeight,
  );
  return variant ? { src: variant.src, height: variant.height } : original;
}
