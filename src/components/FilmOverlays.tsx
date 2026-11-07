import type { FilmStyle } from "../types/film";

export default function FilmOverlays() {
  return (
    <>
      {/* ================= GLOBAL OVERLAYS ================= */}
      <div
        className="a sweep"
        aria-hidden="true"
        style={{ "--d": "151.3s", "--l": "1.4s" } as FilmStyle}
      ></div>
      <div
        className="a"
        aria-hidden="true"
        style={
          {
            left: "0",
            top: "0",
            width: "1920px",
            height: "1080px",
            zIndex: "55",
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 75% 70% at 50% 48%, rgba(42,32,27,0) 60%, rgba(42,32,27,.16) 100%)",
          } as FilmStyle
        }
      ></div>
      <svg
        className="a"
        aria-hidden="true"
        width="1920"
        height="1080"
        style={
          {
            left: "0",
            top: "0",
            zIndex: "56",
            pointerEvents: "none",
            opacity: ".06",
            mixBlendMode: "multiply",
          } as FilmStyle
        }
      >
        <filter id="paperGrain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".9"
            numOctaves="2"
            stitchTiles="stitch"
          ></feTurbulence>
          <feColorMatrix type="saturate" values="0"></feColorMatrix>
        </filter>
        <rect width="1920" height="1080" filter="url(#paperGrain)"></rect>
      </svg>
      <div
        className="a sweep"
        aria-hidden="true"
        style={{ "--d": "13.3s", "--l": "1.4s" } as FilmStyle}
      ></div>
      <div
        className="a sweep"
        aria-hidden="true"
        style={{ "--d": "19.3s", "--l": "1.4s" } as FilmStyle}
      ></div>
      <div
        className="a sweep"
        aria-hidden="true"
        style={{ "--d": "49.3s", "--l": "1.4s" } as FilmStyle}
      ></div>
      <div
        className="a sweep"
        aria-hidden="true"
        style={{ "--d": "165.3s", "--l": "1.4s" } as FilmStyle}
      ></div>
      <div
        className="a sweep"
        aria-hidden="true"
        style={{ "--d": "185.3s", "--l": "1.4s" } as FilmStyle}
      ></div>
      <div
        className="a sweep"
        aria-hidden="true"
        style={{ "--d": "35.3s", "--l": "1.4s" } as FilmStyle}
      ></div>
      <div
        className="a sweep"
        aria-hidden="true"
        style={{ "--d": "57.3s", "--l": "1.4s" } as FilmStyle}
      ></div>
      <div
        className="a sweep"
        aria-hidden="true"
        style={{ "--d": "79.3s", "--l": "1.4s" } as FilmStyle}
      ></div>
      <div
        className="a sweep"
        aria-hidden="true"
        style={{ "--d": "97.3s", "--l": "1.4s" } as FilmStyle}
      ></div>
      <div
        className="a sweep"
        aria-hidden="true"
        style={{ "--d": "113.3s", "--l": "1.4s" } as FilmStyle}
      ></div>
      <div
        className="a sweep"
        aria-hidden="true"
        style={{ "--d": "121.3s", "--l": "1.4s" } as FilmStyle}
      ></div>
      <div
        className="a sweep"
        aria-hidden="true"
        style={{ "--d": "137.3s", "--l": "1.4s" } as FilmStyle}
      ></div>
      <div
        className="a sweep"
        aria-hidden="true"
        style={{ "--d": "197.3s", "--l": "1.4s" } as FilmStyle}
      ></div>
      <div
        className="a sweep"
        aria-hidden="true"
        style={{ "--d": "213.3s", "--l": "1.4s" } as FilmStyle}
      ></div>

      <div
        className="a lbar"
        style={
          {
            left: "0",
            top: "0",
            width: "1920px",
            background: "#17110E",
            zIndex: "60",
            "--d": "0s",
            "--l": "14.4s",
          } as FilmStyle
        }
      ></div>
      <div
        className="a lbar"
        style={
          {
            left: "0",
            bottom: "0",
            width: "1920px",
            background: "#17110E",
            zIndex: "60",
            "--d": "0s",
            "--l": "14.4s",
          } as FilmStyle
        }
      ></div>
      <div
        className="a slate bub"
        style={
          {
            left: "56px",
            top: "104px",
            "--d": ".6s",
            "--l": "3.4s",
          } as FilmStyle
        }
      >
        <b>01</b>Intro
      </div>
      <div
        className="a slate bub"
        style={
          {
            left: "1560px",
            top: "40px",
            "--d": "20.2s",
            "--l": "3s",
          } as FilmStyle
        }
      >
        <b>02</b>My world
      </div>
      <div
        className="a slate bub"
        style={
          {
            left: "1560px",
            top: "40px",
            "--d": "36.2s",
            "--l": "3s",
          } as FilmStyle
        }
      >
        <b>03</b>My work
      </div>
      <div
        className="a slate bub"
        style={
          {
            left: "110px",
            top: "34px",
            "--d": "122.6s",
            "--l": "3s",
          } as FilmStyle
        }
      >
        <b>04</b>Playground
      </div>
      <div
        className="a slate bub"
        style={
          {
            left: "1580px",
            top: "40px",
            "--d": "138.2s",
            "--l": "3s",
          } as FilmStyle
        }
      >
        <b>05</b>AI
      </div>
      <div
        className="a slate bub"
        style={
          {
            left: "1500px",
            top: "40px",
            "--d": "152.4s",
            "--l": "3s",
          } as FilmStyle
        }
      >
        <b>06</b>Social
      </div>
      <div
        className="a slate bub"
        style={
          {
            left: "1560px",
            top: "40px",
            "--d": "166.4s",
            "--l": "3s",
          } as FilmStyle
        }
      >
        <b>07</b>Travel
      </div>
      <div
        className="a slate bub"
        style={
          {
            left: "1560px",
            top: "40px",
            "--d": "198.2s",
            "--l": "3s",
          } as FilmStyle
        }
      >
        <b>08</b>About
      </div>
      <div
        className="a slate bub"
        style={
          {
            left: "1130px",
            top: "56px",
            "--d": "217.6s",
            "--l": "3s",
          } as FilmStyle
        }
      >
        <b>09</b>Connect
      </div>
    </>
  );
}
