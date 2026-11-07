export interface ImageVariant {
  readonly src: string;
  readonly width: number;
  readonly height: number;
}

// 186px inside the frame, enlarged by the opening camera up to 1.6×.
// The stage itself fits within both viewport dimensions.
export const OPENING_IMAGE_SIZES = "min(15.5vw, 27.556vh)";

export const IMAGE_VARIANTS: Readonly<Record<string, readonly ImageVariant[]>> =
  {
    "/media/38a2b6621b784b40f42f187fb5cfd7be.webp": [
      {
        src: "/media/responsive/38a2b6621b784b40f42f187fb5cfd7be-320w.webp",
        width: 320,
        height: 213,
      },
      {
        src: "/media/responsive/38a2b6621b784b40f42f187fb5cfd7be-640w.webp",
        width: 640,
        height: 426,
      },
    ],
    "/media/b94cb4a8c218405a416314618a278048.webp": [
      {
        src: "/media/responsive/b94cb4a8c218405a416314618a278048-320w.webp",
        width: 320,
        height: 213,
      },
      {
        src: "/media/responsive/b94cb4a8c218405a416314618a278048-640w.webp",
        width: 640,
        height: 426,
      },
    ],
  };
