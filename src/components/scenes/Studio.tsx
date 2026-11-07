import FilmImage from "../FilmImage";
import type { FilmStyle } from "../../types/film";

export default function Studio() {
  return (
    <>
      {/* ================= SCENE 10 · BACK TO THE STUDIO (186–198s) ================= */}
      <section
        className="scene win"
        style={
          { "--d": "186s", "--l": "12s", perspective: "2200px" } as FilmStyle
        }
        aria-label="Scene 10: everything feeds back into the work"
      >
        <div
          className="a fold"
          style={{ inset: "0", "--d": "186s", "--l": "1.2s" } as FilmStyle}
        >
          <div
            className="a"
            style={{ inset: "0", background: "#E3CDAA" } as FilmStyle}
          ></div>
          <div
            className="a"
            style={
              {
                inset: "0",
                backgroundImage:
                  "radial-gradient(rgba(120,80,40,.18) 1.5px, transparent 1.5px)",
                backgroundSize: "22px 22px",
              } as FilmStyle
            }
          ></div>
          <div
            className="a"
            style={
              {
                left: "0",
                top: "40px",
                width: "1920px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
              } as FilmStyle
            }
          >
            <span
              className="disp pop"
              style={
                {
                  "--d": "186.8s",
                  "--l": ".4s",
                  fontWeight: "800",
                  fontSize: "54px",
                  background: "#FFFDF8",
                  padding: "6px 20px",
                  borderRadius: "12px",
                } as FilmStyle
              }
            >
              TRAVEL
            </span>
            <span
              className="pop"
              style={
                {
                  "--d": "187.1s",
                  "--l": ".3s",
                  fontSize: "44px",
                  fontWeight: "800",
                } as FilmStyle
              }
            >
              →
            </span>
            <span
              className="disp pop"
              style={
                {
                  "--d": "187.3s",
                  "--l": ".4s",
                  fontWeight: "800",
                  fontSize: "54px",
                  background: "#FFFDF8",
                  padding: "6px 20px",
                  borderRadius: "12px",
                } as FilmStyle
              }
            >
              OBSERVATION
            </span>
            <span
              className="pop"
              style={
                {
                  "--d": "187.6s",
                  "--l": ".3s",
                  fontSize: "44px",
                  fontWeight: "800",
                } as FilmStyle
              }
            >
              →
            </span>
            <span
              className="disp pop"
              style={
                {
                  "--d": "187.8s",
                  "--l": ".4s",
                  fontWeight: "800",
                  fontSize: "54px",
                  background: "#FFFDF8",
                  padding: "6px 20px",
                  borderRadius: "12px",
                } as FilmStyle
              }
            >
              IDEAS
            </span>
            <span
              className="pop"
              style={
                {
                  "--d": "188.1s",
                  "--l": ".3s",
                  fontSize: "44px",
                  fontWeight: "800",
                } as FilmStyle
              }
            >
              →
            </span>
            <span
              className="disp pop"
              style={
                {
                  "--d": "188.3s",
                  "--l": ".4s",
                  fontWeight: "800",
                  fontSize: "54px",
                  background: "#C83E66",
                  color: "#fff",
                  padding: "6px 20px",
                  borderRadius: "12px",
                } as FilmStyle
              }
            >
              DESIGN
            </span>
          </div>
          <div
            className="a settle polaroid"
            style={
              {
                left: "130px",
                top: "170px",
                width: "250px",
                padding: "8px",
                "--d": "186.8s",
                "--l": ".9s",
                "--r": "-4deg",
              } as FilmStyle
            }
          >
            <FilmImage
              src="/media/38a2b6621b784b40f42f187fb5cfd7be.webp"
              alt="Hanoi postcard"
              style={{ width: "100%" } as FilmStyle}
            />
          </div>
          <svg
            className="a"
            style={{ left: "410px", top: "220px" } as FilmStyle}
            width="210"
            height="60"
            viewBox="0 0 210 60"
            fill="none"
            aria-hidden="true"
          >
            <path
              className="draw"
              pathLength="1"
              style={{ "--d": "188.4s", "--l": ".6s" } as FilmStyle}
              d="M6 30 C 70 6, 130 54, 196 30"
              stroke="#2A201B"
              strokeWidth="4"
              strokeLinecap="round"
            ></path>
          </svg>
          <div
            className="a"
            style={
              {
                left: "640px",
                top: "175px",
                display: "flex",
                gap: "10px",
              } as FilmStyle
            }
          >
            <span
              className="pop"
              style={
                {
                  "--d": "188.8s",
                  "--l": ".4s",
                  width: "100px",
                  height: "150px",
                  borderRadius: "12px",
                  background: "#FDC36A",
                  border: "3px solid #2A201B",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "8px",
                  fontSize: "13px",
                  fontWeight: "700",
                } as FilmStyle
              }
            >
              #FDC36A
            </span>
            <span
              className="pop"
              style={
                {
                  "--d": "188.95s",
                  "--l": ".4s",
                  width: "100px",
                  height: "150px",
                  borderRadius: "12px",
                  background: "#E85C14",
                  color: "#fff",
                  border: "3px solid #2A201B",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "8px",
                  fontSize: "13px",
                  fontWeight: "700",
                } as FilmStyle
              }
            >
              #E85C14
            </span>
            <span
              className="pop"
              style={
                {
                  "--d": "189.1s",
                  "--l": ".4s",
                  width: "100px",
                  height: "150px",
                  borderRadius: "12px",
                  background: "#B8263A",
                  color: "#fff",
                  border: "3px solid #2A201B",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "8px",
                  fontSize: "13px",
                  fontWeight: "700",
                } as FilmStyle
              }
            >
              #B8263A
            </span>
            <span
              className="pop"
              style={
                {
                  "--d": "189.25s",
                  "--l": ".4s",
                  width: "100px",
                  height: "150px",
                  borderRadius: "12px",
                  background: "#787957",
                  color: "#fff",
                  border: "3px solid #2A201B",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "8px",
                  fontSize: "13px",
                  fontWeight: "700",
                } as FilmStyle
              }
            >
              #787957
            </span>
            <span
              className="pop"
              style={
                {
                  "--d": "189.4s",
                  "--l": ".4s",
                  width: "100px",
                  height: "150px",
                  borderRadius: "12px",
                  background: "#C7C4CD",
                  border: "3px solid #2A201B",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "8px",
                  fontSize: "13px",
                  fontWeight: "700",
                } as FilmStyle
              }
            >
              #C7C4CD
            </span>
          </div>
          <span
            className="a hand pop"
            style={
              {
                left: "1210px",
                top: "210px",
                "--d": "189.6s",
                "--l": ".4s",
                fontSize: "40px",
                fontWeight: "700",
              } as FilmStyle
            }
          >
            a photo → a palette
          </span>
          <div
            className="a settle card"
            style={
              {
                left: "130px",
                top: "370px",
                width: "250px",
                height: "160px",
                padding: "14px",
                "--d": "187.1s",
                "--l": ".9s",
                "--r": "3deg",
              } as FilmStyle
            }
          >
            <svg
              width="222"
              height="132"
              viewBox="0 0 222 132"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M6 120h210M20 120V60h40v60M70 120V40h50v80M130 120V70h36v50M176 120V50h36v70M30 80h20M84 60h22M84 84h22"
                stroke="#5E5049"
                strokeWidth="3"
                strokeLinecap="round"
              ></path>
            </svg>
          </div>
          <svg
            className="a"
            style={{ left: "410px", top: "420px" } as FilmStyle}
            width="210"
            height="60"
            viewBox="0 0 210 60"
            fill="none"
            aria-hidden="true"
          >
            <path
              className="draw"
              pathLength="1"
              style={{ "--d": "190.4s", "--l": ".6s" } as FilmStyle}
              d="M6 30 C 70 6, 130 54, 196 30"
              stroke="#2A201B"
              strokeWidth="4"
              strokeLinecap="round"
            ></path>
          </svg>
          <div
            className="a pop ui"
            style={
              {
                left: "640px",
                top: "360px",
                width: "540px",
                height: "170px",
                display: "flex",
                overflow: "hidden",
                border: "3px solid #2A201B",
                "--d": "190.8s",
                "--l": ".5s",
              } as FilmStyle
            }
          >
            <div
              style={{ width: "190px", background: "#F2A48C" } as FilmStyle}
            ></div>
            <div
              style={
                {
                  flex: "1",
                  padding: "18px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                } as FilmStyle
              }
            >
              <span
                style={{ fontWeight: "800", fontSize: "24px" } as FilmStyle}
              >
                Old Quarter walk
              </span>
              <span
                className="bar"
                style={{ width: "70%" } as FilmStyle}
              ></span>
              <span
                style={
                  {
                    alignSelf: "flex-start",
                    background: "#C83E66",
                    color: "#fff",
                    fontWeight: "700",
                    fontSize: "15px",
                    padding: "7px 16px",
                    borderRadius: "9px",
                  } as FilmStyle
                }
              >
                Add to trip
              </span>
            </div>
          </div>
          <span
            className="a hand pop"
            style={
              {
                left: "1210px",
                top: "410px",
                "--d": "191.6s",
                "--l": ".4s",
                fontSize: "40px",
                fontWeight: "700",
              } as FilmStyle
            }
          >
            a sketch → a UI idea
          </span>
          <div
            className="a settle"
            style={
              {
                left: "150px",
                top: "570px",
                width: "230px",
                height: "160px",
                "--d": "187.4s",
                "--l": ".9s",
                "--r": "-3deg",
              } as FilmStyle
            }
          >
            <div style={{ position: "relative", height: "100%" } as FilmStyle}>
              <span
                className="a"
                style={
                  {
                    left: "100px",
                    top: "30px",
                    width: "14px",
                    height: "130px",
                    background: "#8A6A4A",
                  } as FilmStyle
                }
              ></span>
              <span
                className="a disp"
                style={
                  {
                    left: "0",
                    top: "20px",
                    width: "220px",
                    height: "64px",
                    background: "#E8C590",
                    border: "3px solid #2A201B",
                    borderRadius: "6px",
                    fontWeight: "800",
                    fontSize: "32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    letterSpacing: ".06em",
                    clipPath: "polygon(0 0, 88% 0, 100% 50%, 88% 100%, 0 100%)",
                  } as FilmStyle
                }
              >
                HANOI
              </span>
            </div>
          </div>
          <svg
            className="a"
            style={{ left: "410px", top: "620px" } as FilmStyle}
            width="210"
            height="60"
            viewBox="0 0 210 60"
            fill="none"
            aria-hidden="true"
          >
            <path
              className="draw"
              pathLength="1"
              style={{ "--d": "192.4s", "--l": ".6s" } as FilmStyle}
              d="M6 30 C 70 6, 130 54, 196 30"
              stroke="#2A201B"
              strokeWidth="4"
              strokeLinecap="round"
            ></path>
          </svg>
          <div
            className="a pop card"
            style={
              {
                left: "640px",
                top: "560px",
                width: "540px",
                height: "170px",
                padding: "16px 24px",
                display: "flex",
                alignItems: "center",
                gap: "24px",
                "--d": "192.8s",
                "--l": ".5s",
              } as FilmStyle
            }
          >
            <span
              className="disp"
              style={
                {
                  fontWeight: "800",
                  fontSize: "110px",
                  lineHeight: "1",
                } as FilmStyle
              }
            >
              Aa
            </span>
            <span
              style={
                {
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                } as FilmStyle
              }
            >
              <span
                className="disp"
                style={{ fontWeight: "800", fontSize: "26px" } as FilmStyle}
              >
                Bricolage Grotesque
              </span>
              <span className="hand" style={{ fontSize: "32px" } as FilmStyle}>
                + a handwritten Caveat
              </span>
            </span>
          </div>
          <span
            className="a hand pop"
            style={
              {
                left: "1210px",
                top: "610px",
                "--d": "193.6s",
                "--l": ".4s",
                fontSize: "40px",
                fontWeight: "700",
              } as FilmStyle
            }
          >
            a street sign → type
          </span>
          <div
            className="a settle card"
            style={
              {
                left: "130px",
                top: "770px",
                width: "250px",
                height: "160px",
                padding: "10px",
                "--d": "187.7s",
                "--l": ".9s",
                "--r": "4deg",
              } as FilmStyle
            }
          >
            <div
              style={
                {
                  position: "relative",
                  height: "140px",
                  borderRadius: "12px",
                  background: "#0F2E2B",
                  overflow: "hidden",
                } as FilmStyle
              }
            >
              <span
                className="lot-shadow"
                style={
                  {
                    position: "absolute",
                    left: "50%",
                    bottom: "16px",
                    width: "54px",
                    height: "10px",
                    marginLeft: "-27px",
                    borderRadius: "50%",
                    background: "#000",
                  } as FilmStyle
                }
              ></span>
              <span
                className="lot-ball"
                style={
                  {
                    position: "absolute",
                    left: "50%",
                    bottom: "24px",
                    width: "40px",
                    height: "40px",
                    marginLeft: "-20px",
                    borderRadius: "50%",
                    background: "#00C8A8",
                  } as FilmStyle
                }
              ></span>
              <span
                className="lot-morph"
                style={
                  {
                    position: "absolute",
                    right: "18px",
                    top: "16px",
                    width: "22px",
                    height: "22px",
                  } as FilmStyle
                }
              ></span>
              <span
                style={
                  {
                    position: "absolute",
                    left: "14px",
                    top: "12px",
                    fontSize: "12px",
                    fontWeight: "700",
                    letterSpacing: ".16em",
                    color: "#7FE6D3",
                  } as FilmStyle
                }
              >
                LOTTIE
              </span>
            </div>
          </div>
          <svg
            className="a"
            style={{ left: "410px", top: "820px" } as FilmStyle}
            width="210"
            height="60"
            viewBox="0 0 210 60"
            fill="none"
            aria-hidden="true"
          >
            <path
              className="draw"
              pathLength="1"
              style={{ "--d": "194.4s", "--l": ".6s" } as FilmStyle}
              d="M6 30 C 70 6, 130 54, 196 30"
              stroke="#2A201B"
              strokeWidth="4"
              strokeLinecap="round"
            ></path>
          </svg>
          <div
            className="a pop card"
            style={
              {
                left: "640px",
                top: "760px",
                width: "540px",
                height: "170px",
                padding: "16px 24px",
                "--d": "194.8s",
                "--l": ".5s",
              } as FilmStyle
            }
          >
            <svg
              width="490"
              height="138"
              viewBox="0 0 490 138"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M10 128H480M10 128V10"
                stroke="#D9CFC3"
                strokeWidth="3"
              ></path>
              <path
                className="draw"
                pathLength="1"
                style={{ "--d": "195s", "--l": "1s" } as FilmStyle}
                d="M10 128 C 200 128, 260 10, 480 10"
                stroke="#C83E66"
                strokeWidth="5"
                strokeLinecap="round"
              ></path>
            </svg>
          </div>
          <span
            className="a hand pop"
            style={
              {
                left: "1210px",
                top: "810px",
                "--d": "195.6s",
                "--l": ".4s",
                fontSize: "40px",
                fontWeight: "700",
              } as FilmStyle
            }
          >
            a bounce → a motion curve
          </span>
          <video
            className="a sl chr clip"
            data-src="/media/f8b8f8b379e9e09090414667b32f0908.webm"
            data-poster="/media/cc2039fd92256bff50664a3cc58c8ee9.webp"
            width={502}
            height={900}
            muted
            playsInline
            preload="none"
            data-loop="1"
            aria-label="Yashika pointing at her inspiration wall"
            style={
              {
                left: "1560px",
                top: "330px",
                height: "717px",
                width: "auto",
                maxWidth: "none",
                marginLeft: "-21px",
                marginTop: "-10px",
                "--d": "188s",
                "--l": "1s",
                "--fx": "300px",
                "--fy": "0px",
              } as FilmStyle
            }
          ></video>
        </div>
      </section>
    </>
  );
}
