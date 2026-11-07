import FilmImage from "../FilmImage";
import type { FilmStyle } from "../../types/film";

export default function About() {
  return (
    <>
      {/* ================= SCENE 11 · BEHIND THE DESIGNER (198–214s) ================= */}
      <section
        className="scene win"
        style={{ "--d": "198s", "--l": "16s" } as FilmStyle}
        aria-label="Scene 11: behind the designer"
      >
        <div
          className="a"
          style={{ inset: "0", background: "#2E2220" } as FilmStyle}
        ></div>
        <div
          className="cam"
          style={{ animation: "cam11 16s ease-in-out 198s both" } as FilmStyle}
        >
          <div
            className="a glow"
            style={
              {
                left: "560px",
                top: "120px",
                width: "800px",
                height: "800px",
                borderRadius: "50%",
                background:
                  "radial-gradient(closest-side, rgba(247,213,120,.32), transparent)",
              } as FilmStyle
            }
          ></div>
          {/* desk lamp */}
          <svg
            className="a"
            style={{ left: "1240px", top: "300px" } as FilmStyle}
            width="220"
            height="420"
            viewBox="0 0 220 420"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M110 410V200L60 120"
              stroke="#C9AE86"
              strokeWidth="10"
              strokeLinecap="round"
            ></path>
            <path d="M10 120 L60 60 L120 110 Z" fill="#F7D578"></path>
            <rect
              x="60"
              y="400"
              width="100"
              height="16"
              rx="6"
              fill="#C9AE86"
            ></rect>
          </svg>
          <div
            className="a"
            style={
              {
                left: "420px",
                top: "880px",
                width: "1100px",
                height: "60px",
                borderRadius: "50%",
                background: "rgba(0,0,0,.3)",
              } as FilmStyle
            }
          ></div>
          <video
            className="a fi chr clip"
            data-src="/media/2e5a2ed042644743478fa9c8911e04ee.webm"
            data-poster="/media/c513980416766cf9fbede322f1f03701.webp"
            width={614}
            height={756}
            muted
            playsInline
            preload="none"
            data-loop="1"
            aria-label="Yashika cross-legged with her laptop, tired but happy"
            style={
              {
                left: "560px",
                top: "200px",
                height: "768px",
                width: "auto",
                maxWidth: "none",
                marginLeft: "-16px",
                marginTop: "-32px",
                filter: "brightness(.94) sepia(.12)",
                "--d": "198s",
                "--l": "1.2s",
              } as FilmStyle
            }
          ></video>
          <video
            className="a chr clip"
            data-src="/media/6c6aed35f42cdf7dff61b6043078d79f.webm"
            data-poster="/media/44411792726a475f15e880342b6f791e.webp"
            width={952}
            height={516}
            muted
            playsInline
            preload="none"
            data-loop="1"
            aria-label="Coco asleep beside her"
            style={
              {
                left: "1150px",
                top: "780px",
                height: "180px",
                width: "auto",
                maxWidth: "none",
                marginLeft: "-23px",
                marginTop: "-26px",
                filter: "brightness(.9)",
              } as FilmStyle
            }
          ></video>
          <div
            className="a hand"
            style={
              {
                left: "1250px",
                top: "760px",
                fontSize: "40px",
                color: "#E9DBC6",
                fontWeight: "700",
              } as FilmStyle
            }
          >
            <span className="a zz" style={{ left: "0", top: "0" } as FilmStyle}>
              z
            </span>
            <span
              className="a zz"
              style={
                {
                  left: "22px",
                  top: "-18px",
                  animationDelay: "1s",
                } as FilmStyle
              }
            >
              z
            </span>
          </div>
          <svg
            className="a"
            style={{ left: "380px", top: "820px" } as FilmStyle}
            width="70"
            height="66"
            viewBox="0 0 130 120"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M10 10h90v70a30 30 0 0 1-30 30H40a30 30 0 0 1-30-30z"
              fill="#F8D6DF"
              stroke="#2A201B"
              strokeWidth="6"
            ></path>
            <path
              d="M100 30h10a16 16 0 0 1 0 32h-10"
              stroke="#2A201B"
              strokeWidth="6"
            ></path>
          </svg>
          <svg
            className="a steam"
            style={{ left: "400px", top: "760px" } as FilmStyle}
            width="30"
            height="70"
            viewBox="0 0 30 70"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M15 66c-10-12 10-18 0-30s10-18 0-30"
              stroke="#FFFDF8"
              strokeWidth="3"
              strokeLinecap="round"
            ></path>
          </svg>
        </div>
        <span
          className="a hand pop"
          style={
            {
              left: "150px",
              top: "150px",
              "--d": "200.4s",
              "--l": ".5s",
              fontSize: "64px",
              fontWeight: "700",
              color: "#F8D6DF",
              rotate: "-6deg",
            } as FilmStyle
          }
        >
          design
        </span>
        <span
          className="a hand pop"
          style={
            {
              left: "1580px",
              top: "140px",
              "--d": "201s",
              "--l": ".5s",
              fontSize: "64px",
              fontWeight: "700",
              color: "#D3E5F5",
              rotate: "5deg",
            } as FilmStyle
          }
        >
          travel
        </span>
        <span
          className="a hand pop"
          style={
            {
              left: "140px",
              top: "450px",
              "--d": "201.6s",
              "--l": ".5s",
              fontSize: "64px",
              fontWeight: "700",
              color: "#F7E5A6",
              rotate: "4deg",
            } as FilmStyle
          }
        >
          learn
        </span>
        <span
          className="a hand pop"
          style={
            {
              left: "1580px",
              top: "440px",
              "--d": "202.2s",
              "--l": ".5s",
              fontSize: "64px",
              fontWeight: "700",
              color: "#D6EACB",
              rotate: "-4deg",
            } as FilmStyle
          }
        >
          explore
        </span>
        <span
          className="a hand pop"
          style={
            {
              left: "170px",
              top: "740px",
              "--d": "202.8s",
              "--l": ".5s",
              fontSize: "64px",
              fontWeight: "700",
              color: "#C8B6F0",
              rotate: "-3deg",
            } as FilmStyle
          }
        >
          experiment
        </span>
        <span
          className="a hand pop"
          style={
            {
              left: "1560px",
              top: "740px",
              "--d": "203.4s",
              "--l": ".5s",
              fontSize: "64px",
              fontWeight: "700",
              color: "#F2A48C",
              rotate: "6deg",
            } as FilmStyle
          }
        >
          repeat ↺
        </span>
        <div
          className="a say bub"
          style={
            {
              left: "960px",
              top: "140px",
              "--d": "203.8s",
              "--l": "3s",
              transformOrigin: "50% 100%",
            } as FilmStyle
          }
        >
          That's pretty much me.<i className="tail"></i>
        </div>
        {/* always learning: certificates pinned */}
        <div
          className="a fi"
          style={
            {
              inset: "0",
              background: "rgba(23,17,14,.62)",
              "--d": "207s",
              "--l": ".6s",
            } as FilmStyle
          }
        ></div>
        <div
          className="a hand pop"
          style={
            {
              left: "0",
              width: "1920px",
              top: "90px",
              textAlign: "center",
              "--d": "207.2s",
              "--l": ".5s",
              fontSize: "64px",
              fontWeight: "700",
              color: "#F7E5A6",
            } as FilmStyle
          }
        >
          always learning ✦
        </div>
        <div
          className="a settle"
          style={
            {
              left: "160px",
              top: "260px",
              width: "470px",
              "--d": "207.4s",
              "--l": ".8s",
              "--r": "-4deg",
            } as FilmStyle
          }
        >
          <div className="polaroid" style={{ padding: "10px" } as FilmStyle}>
            <div className="tape"></div>
            <FilmImage
              src="/media/4368d42213c668bed3b768368c40113a.webp"
              alt="Google: Foundations of User Experience (UX) Design certificate"
              style={{ width: "100%" } as FilmStyle}
            />
          </div>
        </div>
        <div
          className="a settle"
          style={
            {
              left: "680px",
              top: "300px",
              width: "330px",
              "--d": "207.8s",
              "--l": ".8s",
              "--r": "3deg",
            } as FilmStyle
          }
        >
          <div className="polaroid" style={{ padding: "10px" } as FilmStyle}>
            <div className="tape"></div>
            <FilmImage
              src="/media/56a0711604661815f1c532ee79232fbd.webp"
              alt="Lottie Certified Creator"
              style={{ width: "100%" } as FilmStyle}
            />
          </div>
        </div>
        <div
          className="a settle"
          style={
            {
              left: "1060px",
              top: "250px",
              width: "330px",
              "--d": "208.2s",
              "--l": ".8s",
              "--r": "-2deg",
            } as FilmStyle
          }
        >
          <div className="polaroid" style={{ padding: "10px" } as FilmStyle}>
            <div className="tape"></div>
            <FilmImage
              src="/media/883916a0fa363666c533c2af30712689.webp"
              alt="LottieFiles for Figma course certificate"
              style={{ width: "100%" } as FilmStyle}
            />
          </div>
        </div>
        <div
          className="a settle"
          style={
            {
              left: "1440px",
              top: "300px",
              width: "330px",
              "--d": "208.6s",
              "--l": ".8s",
              "--r": "4deg",
            } as FilmStyle
          }
        >
          <div className="polaroid" style={{ padding: "10px" } as FilmStyle}>
            <div className="tape"></div>
            <FilmImage
              src="/media/0ada1c3bb5780d9b80a9cbc325bb9876.webp"
              alt="LottieFiles for Framer course certificate"
              style={{ width: "100%" } as FilmStyle}
            />
          </div>
        </div>
        <div
          className="a"
          style={
            {
              left: "0",
              width: "1920px",
              top: "720px",
              display: "flex",
              justifyContent: "center",
              gap: "14px",
            } as FilmStyle
          }
        >
          <span
            className="chip pop"
            style={{ "--d": "209.2s", "--l": ".4s" } as FilmStyle}
          >
            Google UX Design
          </span>
          <span
            className="chip pop"
            style={{ "--d": "209.4s", "--l": ".4s" } as FilmStyle}
          >
            Lottie Certified Creator
          </span>
          <span
            className="chip pop"
            style={{ "--d": "209.6s", "--l": ".4s" } as FilmStyle}
          >
            LottieFiles × Figma
          </span>
          <span
            className="chip pop"
            style={{ "--d": "209.8s", "--l": ".4s" } as FilmStyle}
          >
            LottieFiles × Framer
          </span>
        </div>
        <div
          className="a say bub"
          style={
            {
              left: "760px",
              top: "830px",
              "--d": "210.5s",
              "--l": "3.5s",
              transformOrigin: "50% 100%",
            } as FilmStyle
          }
        >
          Always making something.<i className="tail"></i>
        </div>
      </section>
    </>
  );
}
