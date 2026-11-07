export interface VideoVariant {
  readonly src: string;
  readonly width: number;
  readonly height: number;
}

export interface VideoLayout {
  /** Original height in the 1920 × 1080 scene, before the stage scales. */
  readonly designHeight: number;
  /** Largest opening-camera enlargement, so source choice stays sharp. */
  readonly maxScale: number;
}

// Transparent VP9 variants preserve the original 8-second, 24 fps clips.
// Ordered by height. The original URL remains the fallback above these sizes.
export const VIDEO_VARIANTS: Readonly<Record<string, readonly VideoVariant[]>> = {
  "/media/b0a1f9aa8422854494c7d826a18e2b58.webm": [
    {
      src: "/media/responsive/b0a1f9aa8422854494c7d826a18e2b58-320h.webm",
      width: 254,
      height: 320,
    },
    {
      src: "/media/responsive/b0a1f9aa8422854494c7d826a18e2b58-480h.webm",
      width: 382,
      height: 480,
    },
  ],
  "/media/6c6aed35f42cdf7dff61b6043078d79f.webm": [
    {
      src: "/media/responsive/6c6aed35f42cdf7dff61b6043078d79f-120h.webm",
      width: 222,
      height: 120,
    },
    {
      src: "/media/responsive/6c6aed35f42cdf7dff61b6043078d79f-160h.webm",
      width: 294,
      height: 160,
    },
  ],
};

export const VIDEO_LAYOUT: Readonly<Record<string, VideoLayout>> = {
  "/media/b0a1f9aa8422854494c7d826a18e2b58.webm": {
    designHeight: 735,
    maxScale: 1.6,
  },
  "/media/6c6aed35f42cdf7dff61b6043078d79f.webm": {
    designHeight: 192,
    maxScale: 1.6,
  },
};
