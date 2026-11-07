export interface ResponsivePoster {
  readonly src: string;
  readonly srcSet: string;
  readonly sizes: string;
}

// Native viewport/DPR selection includes the largest opening-camera scale.
// Original bitmaps remain the high-resolution fallback; alpha stays lossless.
export const POSTER_VARIANTS: Readonly<Record<string, ResponsivePoster>> = {
  "/media/2f384c20c92f9ef944f51c81c3f9d7f9.webp": {
    "src": "/media/2f384c20c92f9ef944f51c81c3f9d7f9.webp",
    "srcSet": "/media/responsive/2f384c20c92f9ef944f51c81c3f9d7f9-320h.webp 254w, /media/responsive/2f384c20c92f9ef944f51c81c3f9d7f9-480h.webp 381w, /media/2f384c20c92f9ef944f51c81c3f9d7f9.webp 590w",
    "sizes": "min(48.617188vw, 86.430556vh)"
  },
  "/media/44411792726a475f15e880342b6f791e.webp": {
    "src": "/media/44411792726a475f15e880342b6f791e.webp",
    "srcSet": "/media/responsive/44411792726a475f15e880342b6f791e-120h.webp 221w, /media/responsive/44411792726a475f15e880342b6f791e-160h.webp 295w, /media/responsive/44411792726a475f15e880342b6f791e-240h.webp 443w, /media/44411792726a475f15e880342b6f791e.webp 952w",
    "sizes": "min(29.533333vw, 52.503704vh)"
  }
};
