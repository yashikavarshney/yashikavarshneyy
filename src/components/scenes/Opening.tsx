import type { FilmStyle } from "../../types/film";

export default function Opening() {
  return (
    <>
      {/* ================= SCENE 01 · OPENING (0–20s) ================= */}
      <section
        className="scene win"
        style={{ "--d": "0s", "--l": "20s" } as FilmStyle}
        aria-label="Scene 1: opening"
      >
        <div
          className="scene win"
          style={{ "--d": "0s", "--l": "14s" } as FilmStyle}
        >
          <div
            className="cam"
            style={
              {
                animation: "cam1 14s cubic-bezier(.45,0,.25,1) 0s both",
              } as FilmStyle
            }
          >
            <div
              className="a"
              style={
                {
                  left: "0",
                  top: "0",
                  width: "1920px",
                  height: "1080px",
                  background: "#F6ECDD",
                } as FilmStyle
              }
            ></div>
            <div
              className="a"
              style={
                {
                  left: "0",
                  top: "0",
                  width: "1920px",
                  height: "1080px",
                  backgroundImage:
                    "radial-gradient(rgba(120,80,40,.07) 1.5px, transparent 1.5px)",
                  backgroundSize: "26px 26px",
                } as FilmStyle
              }
            ></div>
            <div
              className="a"
              style={
                {
                  left: "0",
                  top: "930px",
                  width: "1920px",
                  height: "150px",
                  background: "#E9DBC6",
                } as FilmStyle
              }
            ></div>
            {/* window */}
            <div
              className="a"
              style={
                {
                  left: "1260px",
                  top: "90px",
                  width: "420px",
                  height: "330px",
                  border: "12px solid #E3D3BE",
                  borderRadius: "18px",
                  background: "#DCEBF5",
                  overflow: "hidden",
                } as FilmStyle
              }
            >
              <div
                className="a float"
                style={
                  {
                    left: "40px",
                    top: "80px",
                    width: "130px",
                    height: "42px",
                    borderRadius: "21px",
                    background: "#FFFDF8",
                  } as FilmStyle
                }
              ></div>
              <div
                className="a float"
                style={
                  {
                    left: "210px",
                    top: "170px",
                    width: "160px",
                    height: "48px",
                    borderRadius: "24px",
                    background: "#FFFDF8",
                    animationDelay: "1.4s",
                  } as FilmStyle
                }
              ></div>
              <div
                className="a"
                style={
                  {
                    left: "0",
                    right: "0",
                    bottom: "0",
                    height: "60px",
                    background: "#CFE3C2",
                  } as FilmStyle
                }
              ></div>
            </div>
            {/* pinboard */}
            <div
              className="a"
              style={
                {
                  left: "110px",
                  top: "110px",
                  width: "420px",
                  height: "470px",
                  background: "#E3CDAA",
                  borderRadius: "10px",
                  border: "10px solid #C9AE86",
                } as FilmStyle
              }
            >
              <div
                className="a polaroid wiggle"
                style={
                  {
                    left: "18px",
                    top: "30px",
                    width: "200px",
                    padding: "7px 7px 28px",
                    rotate: "-6deg",
                  } as FilmStyle
                }
              >
                <img
                  src="/media/38a2b6621b784b40f42f187fb5cfd7be.webp"
                  alt=""
                  style={{ width: "100%" } as FilmStyle}
                />
                <span className="cap" style={{ fontSize: "22px" } as FilmStyle}>
                  Hanoi
                </span>
              </div>
              <div
                className="a polaroid"
                style={
                  {
                    left: "190px",
                    top: "150px",
                    width: "200px",
                    padding: "7px 7px 28px",
                    rotate: "5deg",
                  } as FilmStyle
                }
              >
                <img
                  src="/media/b94cb4a8c218405a416314618a278048.webp"
                  alt=""
                  style={{ width: "100%" } as FilmStyle}
                />
                <span className="cap" style={{ fontSize: "22px" } as FilmStyle}>
                  Almaty
                </span>
              </div>
              <div
                className="a hand wiggle"
                style={
                  {
                    left: "30px",
                    top: "290px",
                    width: "150px",
                    padding: "12px 14px",
                    background: "#F7E5A6",
                    fontSize: "28px",
                    lineHeight: "1",
                    rotate: "-3deg",
                  } as FilmStyle
                }
              >
                design
                <br />
                explore
                <br />
                create ✓
              </div>
              <div
                className="a hand"
                style={
                  {
                    left: "230px",
                    top: "340px",
                    width: "140px",
                    padding: "12px 14px",
                    background: "#F8D6DF",
                    fontSize: "26px",
                    lineHeight: "1",
                    rotate: "4deg",
                  } as FilmStyle
                }
              >
                fewer clicks!
              </div>
            </div>
            {/* shelf */}
            <div
              className="a"
              style={
                {
                  left: "1240px",
                  top: "470px",
                  width: "470px",
                  height: "14px",
                  background: "#C9AE86",
                  borderRadius: "4px",
                } as FilmStyle
              }
            ></div>
            <div
              className="a"
              style={
                {
                  left: "1260px",
                  top: "360px",
                  display: "flex",
                  gap: "6px",
                  alignItems: "flex-end",
                } as FilmStyle
              }
            >
              <span
                style={
                  {
                    width: "40px",
                    height: "110px",
                    background: "#F2A48C",
                    borderRadius: "4px",
                  } as FilmStyle
                }
              ></span>
              <span
                style={
                  {
                    width: "34px",
                    height: "96px",
                    background: "#D3E5F5",
                    borderRadius: "4px",
                  } as FilmStyle
                }
              ></span>
              <span
                style={
                  {
                    width: "44px",
                    height: "110px",
                    background: "#2A201B",
                    borderRadius: "4px",
                  } as FilmStyle
                }
              ></span>
              <span
                style={
                  {
                    width: "30px",
                    height: "88px",
                    background: "#DED5F6",
                    borderRadius: "4px",
                    rotate: "10deg",
                    transformOrigin: "bottom left",
                  } as FilmStyle
                }
              ></span>
            </div>
            <svg
              className="a"
              style={{ left: "1500px", top: "380px" } as FilmStyle}
              width="120"
              height="92"
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
                strokeWidth="5"
              ></rect>
              <rect
                x="22"
                y="10"
                width="40"
                height="22"
                rx="6"
                fill="#FFFDF8"
                stroke="#2A201B"
                strokeWidth="5"
              ></rect>
              <circle
                cx="88"
                cy="76"
                r="30"
                fill="#D3E5F5"
                stroke="#2A201B"
                strokeWidth="5"
              ></circle>
              <circle cx="88" cy="76" r="13" fill="#2A201B"></circle>
            </svg>
            <svg
              className="a wiggle"
              style={
                {
                  left: "1660px",
                  top: "640px",
                  transformOrigin: "50% 100%",
                } as FilmStyle
              }
              width="170"
              height="320"
              viewBox="0 0 140 260"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M70 250V90"
                stroke="#5E8A57"
                strokeWidth="5"
                strokeLinecap="round"
              ></path>
              <path
                d="M70 140c-40-6-60-36-56-70 34 2 56 28 56 70zM70 110c36-8 54-40 50-74-32 4-52 32-50 74zM70 190c-34 0-56-22-60-52 30-2 54 20 60 52z"
                fill="#BFDDB0"
                stroke="#5E8A57"
                strokeWidth="4"
              ></path>
              <path
                d="M30 210h80l-10 46H40z"
                fill="#F2A48C"
                stroke="#2A201B"
                strokeWidth="4"
              ></path>
            </svg>
            {/* Yashika at her desk + Coco asleep */}
            <div
              className="a"
              style={
                {
                  left: "620px",
                  top: "920px",
                  width: "640px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "rgba(42,32,27,.12)",
                } as FilmStyle
              }
            ></div>
            <div
              className="a win"
              style={{ "--d": "0s", "--l": "12.2s" } as FilmStyle}
            >
              <video
                className="a chr clip"
                data-src="/media/b0a1f9aa8422854494c7d826a18e2b58.webm"
                poster="/media/2f384c20c92f9ef944f51c81c3f9d7f9.webp"
                muted
                playsInline
                preload="none"
                data-start="0.6"
                aria-label="Yashika at her desk, waving from behind her laptop"
                style={
                  {
                    left: "660px",
                    top: "240px",
                    height: "735px",
                    width: "auto",
                    maxWidth: "none",
                    marginLeft: "-22px",
                    marginTop: "-22px",
                  } as FilmStyle
                }
              ></video>
            </div>
            <div
              className="a win"
              style={{ "--d": "12.2s", "--l": "1.8s" } as FilmStyle}
            >
              <video
                className="a chr clip"
                data-src="/media/821200d7146a33ddd324d79a9d7a5c9c.webm"
                poster="/media/a6f2c44596a60fb95470a05d82e4801e.webp"
                muted
                playsInline
                preload="none"
                data-start="12.2"
                aria-label="Yashika laughing with her eyes closed"
                style={
                  {
                    left: "660px",
                    top: "240px",
                    height: "730px",
                    width: "auto",
                    maxWidth: "none",
                    marginLeft: "-14px",
                    marginTop: "-18px",
                  } as FilmStyle
                }
              ></video>
            </div>
            <video
              className="a chr clip"
              data-src="/media/6c6aed35f42cdf7dff61b6043078d79f.webm"
              poster="/media/44411792726a475f15e880342b6f791e.webp"
              muted
              playsInline
              preload="none"
              data-loop="1"
              aria-label="Coco asleep on the floor"
              style={
                {
                  left: "1240px",
                  top: "790px",
                  height: "192px",
                  width: "auto",
                  maxWidth: "none",
                  marginLeft: "-25px",
                  marginTop: "-28px",
                } as FilmStyle
              }
            ></video>
            <div
              className="a hand"
              style={
                {
                  left: "1360px",
                  top: "760px",
                  fontSize: "40px",
                  color: "#5E5049",
                  fontWeight: "700",
                } as FilmStyle
              }
            >
              <span
                className="a zz"
                style={{ left: "0", top: "0" } as FilmStyle}
              >
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
              <span
                className="a zz"
                style={
                  {
                    left: "44px",
                    top: "-36px",
                    animationDelay: "2s",
                  } as FilmStyle
                }
              >
                z
              </span>
            </div>
            <svg
              className="a steam"
              style={{ left: "1171px", top: "440px" } as FilmStyle}
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
              className="a"
              style={{ left: "1135px", top: "500px" } as FilmStyle}
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
          </div>
          <div
            className="a say bub"
            style={
              {
                left: "965px",
                top: "150px",
                "--d": "5.6s",
                "--l": "4.2s",
                transformOrigin: "50% 100%",
              } as FilmStyle
            }
          >
            Hi, I'm Yashika.<i className="tail"></i>
          </div>
          <div
            className="a say bub"
            style={
              {
                left: "855px",
                top: "100px",
                "--d": "9.9s",
                "--l": "3.9s",
                transformOrigin: "50% 100%",
              } as FilmStyle
            }
          >
            Product Designer.
            <br />
            Creative Thinker.
            <br />
            <span
              className="sl"
              style={
                {
                  display: "inline-block",
                  color: "#C83E66",
                  "--d": "11.4s",
                  "--l": ".6s",
                  "--fy": "16px",
                } as FilmStyle
              }
            >
              Professional overthinker.
            </span>
            <i className="tail"></i>
          </div>
          <div
            className="a hand pop"
            style={
              {
                left: "1240px",
                top: "640px",
                "--d": "12.3s",
                "--l": ".5s",
                fontSize: "60px",
                fontWeight: "700",
                color: "#B23459",
                rotate: "10deg",
              } as FilmStyle
            }
          >
            hehe
          </div>
          <div
            className="a hand pop"
            style={
              {
                left: "560px",
                top: "660px",
                "--d": "12.8s",
                "--l": ".4s",
                fontSize: "64px",
                fontWeight: "700",
                rotate: "-6deg",
              } as FilmStyle
            }
          >
            *clack*
          </div>
        </div>

        <div
          className="scene win"
          style={{ "--d": "14s", "--l": "6s" } as FilmStyle}
        >
          <div
            className="cam"
            style={{ animation: "cam1b 6s ease-out 14s both" } as FilmStyle}
          >
            <div
              className="a"
              style={
                {
                  left: "0",
                  top: "0",
                  width: "1920px",
                  height: "1080px",
                  background: "#FBF5EC",
                } as FilmStyle
              }
            ></div>
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
              className="a fo"
              style={
                {
                  left: "300px",
                  top: "905px",
                  width: "340px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "rgba(42,32,27,.12)",
                  "--d": "18.6s",
                  "--l": ".5s",
                } as FilmStyle
              }
            ></div>
            <div
              className="a win"
              style={{ "--d": "14s", "--l": "4.6s" } as FilmStyle}
            >
              <div
                className="a sl"
                style={
                  {
                    left: "360px",
                    top: "170px",
                    "--d": "14s",
                    "--l": "1s",
                    "--fx": "0px",
                    "--fy": "180px",
                  } as FilmStyle
                }
              >
                <video
                  className="chr clip"
                  data-src="/media/f9fd5915c778c440bb0b8caad12ee604.webm"
                  poster="/media/3412b245d77460ba302cc7e243be618b.webp"
                  muted
                  playsInline
                  preload="none"
                  data-loop="1"
                  aria-label="Yashika standing with her polka-dot tote"
                  style={
                    {
                      height: "782px",
                      width: "auto",
                      maxWidth: "none",
                      marginLeft: "-48px",
                      marginTop: "-15px",
                    } as FilmStyle
                  }
                ></video>
              </div>
            </div>
            <div
              className="a win"
              style={
                { "--d": "18.6s", "--l": "1.4s", zIndex: "6" } as FilmStyle
              }
            >
              <div
                className="a mve"
                style={
                  {
                    left: "300px",
                    top: "170px",
                    "--d": "18.6s",
                    "--l": "1.7s",
                    "--tx": "1300px",
                    "--ty": "0px",
                    animationTimingFunction: "cubic-bezier(.35,0,.75,.75)",
                  } as FilmStyle
                }
              >
                <div>
                  <video
                    className="chr clip"
                    data-src="/media/514e2809c04247eaab6060838e8f64e8.webm"
                    poster="/media/4ed256ec3581a0166848b5400bcfcafd.webp"
                    muted
                    playsInline
                    preload="none"
                    data-loop="1"
                    aria-label="Yashika walking off to the right"
                    style={
                      {
                        height: "801px",
                        width: "auto",
                        maxWidth: "none",
                        marginLeft: "-36px",
                        marginTop: "-23px",
                      } as FilmStyle
                    }
                  ></video>
                </div>
              </div>
            </div>
            <div
              className="a"
              style={{ left: "820px", top: "300px" } as FilmStyle}
            >
              <div
                className="disp wipeR"
                style={
                  {
                    "--d": "14.6s",
                    "--l": "1.3s",
                    fontWeight: "800",
                    fontSize: "250px",
                    lineHeight: ".86",
                    letterSpacing: "-.04em",
                    color: "#C83E66",
                  } as FilmStyle
                }
              >
                YASHIKA
              </div>
              <div
                className="sl"
                style={
                  {
                    "--d": "15.6s",
                    "--l": ".9s",
                    marginTop: "26px",
                    fontWeight: "600",
                    fontSize: "46px",
                    letterSpacing: "-.01em",
                  } as FilmStyle
                }
              >
                Product Designer × Creative Thinker
              </div>
              <svg
                className="a"
                style={{ left: "0", top: "330px" } as FilmStyle}
                width="760"
                height="24"
                viewBox="0 0 300 14"
                preserveAspectRatio="none"
                fill="none"
                aria-hidden="true"
              >
                <path
                  className="draw"
                  pathLength="1"
                  style={{ "--d": "16.2s", "--l": "1s" } as FilmStyle}
                  d="M2 9c40-6 80-7 120-4s90 6 120 1 40-5 56-3"
                  stroke="#C83E66"
                  strokeWidth="3"
                  strokeLinecap="round"
                ></path>
              </svg>
            </div>
          </div>
          <div
            className="a say bub"
            style={
              {
                left: "275px",
                top: "40px",
                "--d": "16.4s",
                "--l": "2.4s",
                transformOrigin: "50% 100%",
              } as FilmStyle
            }
          >
            Let me show you what I do.<i className="tail"></i>
          </div>
        </div>
      </section>
    </>
  );
}
