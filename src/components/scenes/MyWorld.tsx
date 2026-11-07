import FilmImage from "../FilmImage";
import type { FilmStyle } from "../../types/film";

export default function MyWorld() {
  return (
    <>
      {/* ================= SCENE 02 · MY WORLD (20–36s) ================= */}
      <section
        className="scene win"
        style={{ "--d": "20s", "--l": "16s" } as FilmStyle}
        aria-label="Scene 2: my world"
      >
        <div
          className="a"
          style={{ inset: "0", background: "#FBF0EE" } as FilmStyle}
        ></div>
        <div
          className="a mvl"
          style={
            {
              left: "0",
              top: "0",
              width: "2600px",
              height: "1080px",
              "--d": "20s",
              "--l": "16s",
              "--tx": "-500px",
              "--ty": "0px",
            } as FilmStyle
          }
        >
          <svg
            className="a"
            style={{ left: "0", top: "520px" } as FilmStyle}
            width="2600"
            height="400"
            viewBox="0 0 2600 400"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M0 300C200 160 400 160 600 260S1000 120 1300 230 1800 140 2100 240 2500 160 2600 210V400H0z"
              fill="#E7E0F5"
            ></path>
            <path
              d="M0 340C260 260 520 280 760 330S1300 250 1600 320 2200 260 2600 300V400H0z"
              fill="#DCEBF5"
            ></path>
          </svg>
          <div
            className="a float"
            style={
              {
                left: "260px",
                top: "120px",
                width: "180px",
                height: "56px",
                borderRadius: "28px",
                background: "#FFFDF8",
              } as FilmStyle
            }
          ></div>
          <div
            className="a float"
            style={
              {
                left: "1100px",
                top: "90px",
                width: "220px",
                height: "64px",
                borderRadius: "32px",
                background: "#FFFDF8",
                animationDelay: "2s",
              } as FilmStyle
            }
          ></div>
          <div
            className="a float"
            style={
              {
                left: "1900px",
                top: "150px",
                width: "170px",
                height: "52px",
                borderRadius: "26px",
                background: "#FFFDF8",
                animationDelay: "1s",
              } as FilmStyle
            }
          ></div>
        </div>
        <div
          className="a"
          style={
            {
              left: "0",
              top: "930px",
              width: "1920px",
              height: "150px",
              background: "#EFE3D3",
            } as FilmStyle
          }
        ></div>
        <div
          className="a mvl"
          style={
            {
              left: "0",
              top: "0",
              width: "4800px",
              height: "1080px",
              "--d": "20s",
              "--l": "16s",
              "--tx": "-2600px",
              "--ty": "0px",
            } as FilmStyle
          }
        >
          <div
            className="a word"
            style={
              {
                left: "1050px",
                top: "270px",
                background: "#F8D6DF",
                rotate: "-4deg",
              } as FilmStyle
            }
          >
            DESIGN
          </div>
          <svg
            className="a"
            style={{ left: "1450px", top: "600px" } as FilmStyle}
            width="200"
            height="150"
            viewBox="0 0 170 130"
            fill="none"
            aria-hidden="true"
          >
            <rect
              x="6"
              y="26"
              width="158"
              height="98"
              rx="16"
              fill="#FFFDF8"
              stroke="#2A201B"
              strokeWidth="4"
            ></rect>
            <rect
              x="22"
              y="10"
              width="40"
              height="22"
              rx="6"
              fill="#FFFDF8"
              stroke="#2A201B"
              strokeWidth="4"
            ></rect>
            <circle
              cx="88"
              cy="76"
              r="30"
              fill="#D3E5F5"
              stroke="#2A201B"
              strokeWidth="4"
            ></circle>
            <circle cx="88" cy="76" r="13" fill="#2A201B"></circle>
          </svg>
          <div
            className="a pop"
            style={
              {
                left: "1430px",
                top: "520px",
                "--d": "24.2s",
                "--l": ".5s",
              } as FilmStyle
            }
          >
            <div
              className="flash"
              style={
                {
                  "--d": "24.2s",
                  "--l": ".9s",
                  width: "240px",
                  height: "240px",
                  borderRadius: "50%",
                  background: "#FFF7C9",
                } as FilmStyle
              }
            ></div>
          </div>
          <div
            className="a polaroid"
            style={
              {
                left: "1690px",
                top: "190px",
                width: "300px",
                padding: "9px 9px 40px",
                rotate: "6deg",
              } as FilmStyle
            }
          >
            <FilmImage
              src="/media/ed315e5d7a8d2b1a77dc908add386df6.webp"
              alt=""
              style={{ width: "100%" } as FilmStyle}
            />
            <span className="cap" style={{ fontSize: "26px" } as FilmStyle}>
              Bali
            </span>
          </div>
          <div
            className="a word"
            style={
              {
                left: "1960px",
                top: "300px",
                background: "#D3E5F5",
                rotate: "3deg",
              } as FilmStyle
            }
          >
            TRAVEL
          </div>
          <div
            className="a win"
            style={{ "--d": "20s", "--l": "7.6s" } as FilmStyle}
          >
            <div
              className="a card"
              style={
                {
                  left: "2150px",
                  top: "420px",
                  width: "200px",
                  height: "150px",
                  rotate: "-8deg",
                  padding: "14px",
                } as FilmStyle
              }
            >
              <svg
                width="170"
                height="120"
                viewBox="0 0 170 120"
                fill="none"
                aria-hidden="true"
              >
                <rect
                  x="8"
                  y="10"
                  width="70"
                  height="44"
                  rx="6"
                  stroke="#9C8E82"
                  strokeWidth="3"
                ></rect>
                <path
                  d="M92 18h60M92 34h44M8 72h150M8 92h110"
                  stroke="#9C8E82"
                  strokeWidth="3"
                  strokeLinecap="round"
                ></path>
              </svg>
            </div>
          </div>
          <div
            className="a card"
            style={
              {
                left: "2400px",
                top: "500px",
                width: "360px",
                padding: "10px",
                rotate: "-4deg",
              } as FilmStyle
            }
          >
            <FilmImage
              src="/media/dafe504db65cbda184ad05204efe7026.webp"
              alt=""
              style={{ width: "100%", borderRadius: "10px" } as FilmStyle}
            />
          </div>
          <div
            className="a"
            style={
              { left: "2620px", top: "600px", width: "300px" } as FilmStyle
            }
          >
            <div
              style={
                {
                  height: "190px",
                  background: "#2A201B",
                  borderRadius: "16px 16px 4px 4px",
                  padding: "12px",
                } as FilmStyle
              }
            >
              <div
                className="glow"
                style={
                  {
                    height: "100%",
                    borderRadius: "8px",
                    background: "#DED5F6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "800",
                    fontSize: "54px",
                    color: "#2A2140",
                  } as FilmStyle
                }
              >
                AI ✦
              </div>
            </div>
            <div
              style={
                {
                  height: "18px",
                  margin: "0 -24px",
                  background: "#CFC2B3",
                  borderRadius: "0 0 14px 14px",
                } as FilmStyle
              }
            ></div>
          </div>
          <div
            className="a word"
            style={
              {
                left: "2760px",
                top: "250px",
                background: "#DED5F6",
                rotate: "-3deg",
              } as FilmStyle
            }
          >
            AI
          </div>
          <div
            className="a word"
            style={
              {
                left: "3060px",
                top: "350px",
                background: "#F7E5A6",
                rotate: "4deg",
              } as FilmStyle
            }
          >
            MOTION
          </div>
          <div
            className="a card"
            style={
              {
                left: "3460px",
                top: "160px",
                width: "290px",
                padding: "14px",
                rotate: "-4deg",
              } as FilmStyle
            }
          >
            <div
              style={
                {
                  position: "relative",
                  height: "150px",
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
            <div
              className="disp"
              style={
                {
                  fontWeight: "800",
                  fontSize: "24px",
                  marginTop: "12px",
                } as FilmStyle
              }
            >
              Lottie Certified Creator
            </div>
          </div>
          <div
            className="a word"
            style={
              {
                left: "3820px",
                top: "320px",
                background: "#D6EACB",
                rotate: "-2deg",
              } as FilmStyle
            }
          >
            LOTTIE
          </div>
          <div
            className="a"
            style={{ left: "3700px", top: "836px" } as FilmStyle}
          >
            <svg
              className="a steam"
              style={{ left: "26px", top: "-60px" } as FilmStyle}
              width="26"
              height="60"
              viewBox="0 0 30 70"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M15 66c-10-12 10-18 0-30s10-18 0-30"
                stroke="#B9A999"
                strokeWidth="3"
                strokeLinecap="round"
              ></path>
            </svg>
            <svg
              width="110"
              height="100"
              viewBox="0 0 130 120"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M10 10h90v70a30 30 0 0 1-30 30H40a30 30 0 0 1-30-30z"
                fill="#F7E5A6"
                stroke="#2A201B"
                strokeWidth="4"
              ></path>
              <path
                d="M100 30h10a16 16 0 0 1 0 32h-10"
                stroke="#2A201B"
                strokeWidth="4"
              ></path>
            </svg>
          </div>
          <div
            className="a word"
            style={
              {
                left: "4180px",
                top: "260px",
                background: "#FFFDF8",
                rotate: "3deg",
              } as FilmStyle
            }
          >
            STORYTELLING
          </div>
        </div>
        <div
          className="a mve"
          style={
            {
              left: "1900px",
              top: "120px",
              "--d": "20.4s",
              "--l": "6s",
              "--tx": "-2300px",
              "--ty": "60px",
            } as FilmStyle
          }
        >
          <svg
            width="150"
            height="150"
            viewBox="0 0 24 24"
            fill="#FFFDF8"
            stroke="#2A201B"
            strokeWidth="1.2"
            strokeLinejoin="round"
            aria-hidden="true"
            style={{ rotate: "-100deg" } as FilmStyle}
          >
            <path d="M22 2L11 13"></path>
            <path d="M22 2l-7 20-4-9-9-4z"></path>
          </svg>
        </div>
        {/* Coco trots behind Yashika */}
        <div
          className="a"
          style={
            {
              left: "380px",
              top: "945px",
              width: "210px",
              height: "24px",
              borderRadius: "50%",
              background: "rgba(42,32,27,.12)",
            } as FilmStyle
          }
        ></div>
        <div
          className="a sl"
          style={
            {
              left: "360px",
              top: "777px",
              "--d": "21s",
              "--l": "1.6s",
              "--fx": "-500px",
              "--fy": "0px",
            } as FilmStyle
          }
        >
          <div>
            <video
              className="chr clip"
              data-src="/media/4b4e2fe792eadd2061aa73d73b42aeb0.webm"
              data-poster="/media/b3b6f11fe3f2a60f89c3705ca53b25b7.webp"
              width={824}
              height={654}
              muted
              playsInline
              preload="none"
              data-loop="1"
              aria-label="Coco trotting along"
              style={
                {
                  height: "197px",
                  width: "auto",
                  maxWidth: "none",
                  marginLeft: "-15px",
                  marginTop: "-10px",
                } as FilmStyle
              }
            ></video>
          </div>
        </div>
        <div
          className="a"
          style={
            {
              left: "700px",
              top: "935px",
              width: "360px",
              height: "36px",
              borderRadius: "50%",
              background: "rgba(42,32,27,.12)",
            } as FilmStyle
          }
        ></div>
        <div className="a" style={{ left: "660px", top: "260px" } as FilmStyle}>
          <div>
            <video
              className="chr clip"
              data-src="/media/514e2809c04247eaab6060838e8f64e8.webm"
              data-poster="/media/4ed256ec3581a0166848b5400bcfcafd.webp"
              width={566}
              height={900}
              muted
              playsInline
              preload="none"
              data-loop="1"
              aria-label="Yashika walking with her tote bag"
              style={
                {
                  height: "728px",
                  width: "auto",
                  maxWidth: "none",
                  marginLeft: "-33px",
                  marginTop: "-21px",
                } as FilmStyle
              }
            ></video>
          </div>
        </div>
        <div
          className="a say bub"
          style={
            {
              left: "577px",
              top: "80px",
              "--d": "21.4s",
              "--l": "5.4s",
              transformOrigin: "50% 100%",
            } as FilmStyle
          }
        >
          I design digital experiences…<i className="tail"></i>
        </div>
        <div
          className="a say bub"
          style={
            {
              left: "620px",
              top: "40px",
              "--d": "27.8s",
              "--l": "6s",
              transformOrigin: "50% 100%",
            } as FilmStyle
          }
        >
          …but I'm curious about
          <br />a lot more than pixels.<i className="tail"></i>
        </div>
      </section>
    </>
  );
}
