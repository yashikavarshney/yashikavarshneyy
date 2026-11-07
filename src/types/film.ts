import type { CSSProperties } from "react";

export type FilmStyle = CSSProperties & {
  [property: `--${string}`]: string | number;
};
