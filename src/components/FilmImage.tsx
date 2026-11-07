import type { ImgHTMLAttributes } from "react";
import { MEDIA_DIMENSIONS, type FilmImageSource } from "../data/media";
import { IMAGE_VARIANTS, OPENING_IMAGE_SIZES } from "../data/image-variants";
import { withBase } from "../lib/urls";

type FilmImageProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "src" | "srcSet" | "sizes" | "width" | "height" | "loading" | "decoding"
> & {
  src: FilmImageSource;
  eager?: boolean;
};

/** A static image whose deferred source is activated by the film timeline. */
export default function FilmImage({
  src,
  eager = false,
  style,
  ...props
}: FilmImageProps) {
  const dimensions = MEDIA_DIMENSIONS[src];
  const variants = eager ? IMAGE_VARIANTS[src] : undefined;
  const srcSet = variants
    ? [
        ...variants.map(
          (variant) => `${withBase(variant.src)} ${variant.width}w`,
        ),
        `${withBase(src)} ${dimensions.width}w`,
      ].join(", ")
    : undefined;

  // Keep width styles scaling the original natural aspect ratio.
  return (
    <img
      {...props}
      src={eager ? withBase(src) : undefined}
      srcSet={srcSet}
      sizes={srcSet ? OPENING_IMAGE_SIZES : undefined}
      data-src={eager ? undefined : src}
      width={dimensions.width}
      height={dimensions.height}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      style={{
        height: "auto",
        ...(srcSet
          ? { aspectRatio: `${dimensions.width} / ${dimensions.height}` }
          : {}),
        ...style,
      }}
    />
  );
}
