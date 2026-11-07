import type { FilmStyle } from "../../types/film";

export default function Connect() {
  return (
    <>
      {/* ================= SCENE 12 · FINAL SHOT (214–230s) ================= */}
      <section
        className="scene win last"
        style={{ "--d": "214s", "--l": "16s" } as FilmStyle}
        aria-label="Scene 12: final shot"
      >
        <div
          className="a"
          style={{ inset: "0", background: "#FBF5EC" } as FilmStyle}
        ></div>
        <div
          className="cam"
          style={
            {
              animation: "cam12 16s cubic-bezier(.45,0,.25,1) 214s both",
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
                background: "#FBF5EC",
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
                  "radial-gradient(rgba(120,80,40,.06) 1.5px, transparent 1.5px)",
                backgroundSize: "26px 26px",
              } as FilmStyle
            }
          ></div>
          <div
            className="a"
            style={
              {
                left: "0",
                top: "920px",
                width: "1920px",
                height: "160px",
                background: "#EFE3D3",
              } as FilmStyle
            }
          ></div>
          {/* fairy-light string */}
          <svg
            className="a"
            style={{ left: "0", top: "0" } as FilmStyle}
            width="1920"
            height="120"
            viewBox="0 0 1920 120"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M0 26 Q 960 44 1920 26"
              stroke="#8A7B70"
              strokeWidth="2"
            ></path>
          </svg>
          {/* rug + plant */}
          <div
            className="a"
            style={
              {
                left: "150px",
                top: "890px",
                width: "680px",
                height: "80px",
                borderRadius: "50%",
                background: "#F2D3C2",
              } as FilmStyle
            }
          ></div>
          <div
            className="a"
            style={
              {
                left: "190px",
                top: "900px",
                width: "600px",
                height: "58px",
                borderRadius: "50%",
                border: "3px dashed rgba(200,62,102,.35)",
              } as FilmStyle
            }
          ></div>
          <svg
            className="a wiggle"
            style={
              {
                left: "40px",
                top: "640px",
                transformOrigin: "50% 100%",
              } as FilmStyle
            }
            width="150"
            height="290"
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
          <div
            className="a"
            style={
              {
                left: "260px",
                top: "905px",
                width: "460px",
                height: "40px",
                borderRadius: "50%",
                background: "rgba(42,32,27,.14)",
              } as FilmStyle
            }
          ></div>
          <video
            className="a chr clip"
            data-src="/media/be33c473041f7708ddb6501b53d35d56.webm"
            poster="/media/9309bc99d1a4669bfc98e61b6217684c.webp"
            muted
            playsInline
            preload="none"
            data-loop="1"
            aria-label="Yashika sitting cross-legged, hugging Coco and smiling at the viewer"
            style={
              {
                left: "250px",
                top: "340px",
                height: "620px",
                width: "auto",
                maxWidth: "none",
                marginLeft: "-11px",
                marginTop: "-14px",
              } as FilmStyle
            }
          ></video>
          {/* paper-plane trail to the postcard */}
          <svg
            className="a"
            style={{ left: "640px", top: "200px" } as FilmStyle}
            width="300"
            height="260"
            viewBox="0 0 300 260"
            fill="none"
            aria-hidden="true"
          >
            <path
              className="draw"
              pathLength="1"
              style={{ "--d": "223s", "--l": "1.1s" } as FilmStyle}
              d="M10 250 C 60 120, 150 220, 190 120 S 260 30, 290 20"
              stroke="#C83E66"
              strokeWidth="3"
              strokeDasharray="2 0"
              strokeLinecap="round"
              opacity=".55"
            ></path>
          </svg>
          <div
            className="a win"
            style={{ "--d": "223s", "--l": "1.4s" } as FilmStyle}
          >
            <div
              className="a mve"
              style={
                {
                  left: "640px",
                  top: "430px",
                  "--d": "223s",
                  "--l": "1.1s",
                  "--tx": "270px",
                  "--ty": "-230px",
                } as FilmStyle
              }
            >
              <div
                className="fo"
                style={{ "--d": "224s", "--l": ".3s" } as FilmStyle}
              >
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="#FFFDF8"
                  stroke="#2A201B"
                  strokeWidth="1.3"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  style={{ rotate: "-10deg" } as FilmStyle}
                >
                  <path d="M22 2L11 13"></path>
                  <path d="M22 2l-7 20-4-9-9-4z"></path>
                </svg>
              </div>
            </div>
          </div>
          {/* the postcard */}
          <div
            className="a settle"
            style={
              {
                left: "900px",
                top: "140px",
                width: "930px",
                height: "680px",
                "--d": "223.6s",
                "--l": "1.1s",
                "--r": "2deg",
              } as FilmStyle
            }
          >
            <div
              style={
                {
                  position: "relative",
                  height: "100%",
                  background: "#FFFDF8",
                  borderRadius: "12px",
                  boxShadow:
                    "0 2px 0 rgba(42,32,27,.06), 0 40px 70px -30px rgba(42,32,27,.5)",
                  padding: "44px 46px 40px",
                  display: "grid",
                  gridTemplateColumns: "1fr 2px 1fr",
                  gap: "36px",
                } as FilmStyle
              }
            >
              <div
                style={
                  {
                    position: "absolute",
                    inset: "12px",
                    border: "2px solid #F2D3C2",
                    borderRadius: "6px",
                    pointerEvents: "none",
                  } as FilmStyle
                }
              ></div>
              <div
                style={
                  {
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  } as FilmStyle
                }
              >
                <div
                  className="hand sl"
                  style={
                    {
                      "--d": "224.4s",
                      "--l": ".6s",
                      "--fx": "0px",
                      "--fy": "12px",
                      fontSize: "44px",
                      fontWeight: "700",
                      color: "#5E5049",
                    } as FilmStyle
                  }
                >
                  Hi you,
                </div>
                <div
                  className="hand sl"
                  style={
                    {
                      "--d": "224.8s",
                      "--l": ".6s",
                      "--fx": "0px",
                      "--fy": "12px",
                      fontSize: "34px",
                      lineHeight: "1.15",
                      color: "#5E5049",
                    } as FilmStyle
                  }
                >
                  thanks for watching ♡<br />
                  if you've got a problem worth solving…
                </div>
                <div
                  className="hand wipeR"
                  style={
                    {
                      "--d": "225.6s",
                      "--l": "1.4s",
                      marginTop: "18px",
                      fontSize: "76px",
                      fontWeight: "700",
                      lineHeight: ".95",
                      color: "#C83E66",
                    } as FilmStyle
                  }
                >
                  Let's make
                  <br />
                  something
                  <br />
                  amazing.
                </div>
                <div
                  className="hand sl"
                  style={
                    {
                      "--d": "227s",
                      "--l": ".6s",
                      "--fx": "0px",
                      "--fy": "10px",
                      marginTop: "auto",
                      fontSize: "38px",
                      fontWeight: "700",
                    } as FilmStyle
                  }
                >
                  — Yashika{" "}
                  <span style={{ color: "#9C8E82" } as FilmStyle}>
                    &amp; Coco
                  </span>
                </div>
              </div>
              <div
                style={
                  { background: "#E6DACB", borderRadius: "2px" } as FilmStyle
                }
              ></div>
              <div
                style={
                  {
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                  } as FilmStyle
                }
              >
                <div
                  className="pop"
                  style={
                    {
                      "--d": "224.6s",
                      "--l": ".5s",
                      alignSelf: "flex-end",
                      width: "132px",
                      height: "160px",
                      padding: "8px",
                      background: "#FFFDF8",
                      border: "3px dashed #C83E66",
                      rotate: "4deg",
                    } as FilmStyle
                  }
                >
                  <div
                    style={
                      {
                        height: "100%",
                        borderRadius: "4px",
                        background: "#F8D6DF",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "4px",
                      } as FilmStyle
                    }
                  >
                    <svg
                      width="64"
                      height="64"
                      viewBox="0 0 24 24"
                      fill="#FFFDF8"
                      stroke="#2A201B"
                      strokeWidth="1.2"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M22 2L11 13"></path>
                      <path d="M22 2l-7 20-4-9-9-4z"></path>
                    </svg>
                    <span
                      style={
                        {
                          fontSize: "12px",
                          fontWeight: "800",
                          letterSpacing: ".14em",
                          color: "#B23459",
                        } as FilmStyle
                      }
                    >
                      YV · ₹∞
                    </span>
                  </div>
                </div>
                <div
                  className="a pop"
                  style={
                    {
                      "--d": "225s",
                      "--l": ".45s",
                      left: "70px",
                      top: "18px",
                      width: "170px",
                      height: "170px",
                      borderRadius: "50%",
                      border: "3px solid rgba(107,79,196,.55)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      color: "rgba(107,79,196,.8)",
                      fontWeight: "800",
                      fontSize: "14px",
                      letterSpacing: ".14em",
                      rotate: "-14deg",
                      lineHeight: "1.4",
                    } as FilmStyle
                  }
                >
                  MADE WITH ♡<br />
                  <span
                    style={
                      { fontSize: "26px", letterSpacing: ".04em" } as FilmStyle
                    }
                  >
                    DESIGN
                  </span>
                  2026
                </div>
                <div
                  className="sl"
                  style={
                    {
                      "--d": "226.2s",
                      "--l": ".5s",
                      "--fx": "0px",
                      "--fy": "10px",
                      marginTop: "30px",
                      fontSize: "14px",
                      fontWeight: "800",
                      letterSpacing: ".2em",
                      color: "#B23459",
                    } as FilmStyle
                  }
                >
                  TO: YOUR NEXT PROJECT
                </div>
                <div
                  style={
                    {
                      marginTop: "8px",
                      display: "flex",
                      flexDirection: "column",
                    } as FilmStyle
                  }
                >
                  <a
                    className="sl"
                    href="mailto:yashikavarshney.yv@gmail.com"
                    style={
                      {
                        "--d": "226.4s",
                        "--l": ".5s",
                        "--fx": "24px",
                        "--fy": "0px",
                        display: "flex",
                        alignItems: "center",
                        gap: "14px",
                        padding: "10px 0",
                        borderBottom: "2px solid #E6DACB",
                        color: "#2A201B",
                        textDecoration: "none",
                        fontSize: "22px",
                        fontWeight: "600",
                      } as FilmStyle
                    }
                  >
                    <span
                      style={
                        {
                          flex: "none",
                          width: "104px",
                          fontSize: "13px",
                          fontWeight: "800",
                          letterSpacing: ".16em",
                          color: "#77685E",
                        } as FilmStyle
                      }
                    >
                      EMAIL
                    </span>
                    yashikavarshney.yv@gmail.com
                  </a>
                  <a
                    className="sl"
                    href="https://www.linkedin.com/in/yashika-varshney/"
                    style={
                      {
                        "--d": "226.6s",
                        "--l": ".5s",
                        "--fx": "24px",
                        "--fy": "0px",
                        display: "flex",
                        alignItems: "center",
                        gap: "14px",
                        padding: "10px 0",
                        borderBottom: "2px solid #E6DACB",
                        color: "#2A201B",
                        textDecoration: "none",
                        fontSize: "22px",
                        fontWeight: "600",
                      } as FilmStyle
                    }
                  >
                    <span
                      style={
                        {
                          flex: "none",
                          width: "104px",
                          fontSize: "13px",
                          fontWeight: "800",
                          letterSpacing: ".16em",
                          color: "#77685E",
                        } as FilmStyle
                      }
                    >
                      LINKEDIN
                    </span>
                    yashika-varshney
                  </a>
                  <a
                    className="sl"
                    href="https://www.behance.net/yashikavarshney2"
                    style={
                      {
                        "--d": "226.8s",
                        "--l": ".5s",
                        "--fx": "24px",
                        "--fy": "0px",
                        display: "flex",
                        alignItems: "center",
                        gap: "14px",
                        padding: "10px 0",
                        borderBottom: "2px solid #E6DACB",
                        color: "#2A201B",
                        textDecoration: "none",
                        fontSize: "22px",
                        fontWeight: "600",
                      } as FilmStyle
                    }
                  >
                    <span
                      style={
                        {
                          flex: "none",
                          width: "104px",
                          fontSize: "13px",
                          fontWeight: "800",
                          letterSpacing: ".16em",
                          color: "#77685E",
                        } as FilmStyle
                      }
                    >
                      BEHANCE
                    </span>
                    yashikavarshney2
                  </a>
                  <a
                    className="sl"
                    href="https://dribbble.com/yashie_uiux"
                    style={
                      {
                        "--d": "227s",
                        "--l": ".5s",
                        "--fx": "24px",
                        "--fy": "0px",
                        display: "flex",
                        alignItems: "center",
                        gap: "14px",
                        padding: "10px 0",
                        borderBottom: "2px solid #E6DACB",
                        color: "#2A201B",
                        textDecoration: "none",
                        fontSize: "22px",
                        fontWeight: "600",
                      } as FilmStyle
                    }
                  >
                    <span
                      style={
                        {
                          flex: "none",
                          width: "104px",
                          fontSize: "13px",
                          fontWeight: "800",
                          letterSpacing: ".16em",
                          color: "#77685E",
                        } as FilmStyle
                      }
                    >
                      DRIBBBLE
                    </span>
                    yashie_uiux
                  </a>
                  <a
                    className="sl"
                    href="https://www.instagram.com/uiux.yashie/"
                    style={
                      {
                        "--d": "227.2s",
                        "--l": ".5s",
                        "--fx": "24px",
                        "--fy": "0px",
                        display: "flex",
                        alignItems: "center",
                        gap: "14px",
                        padding: "10px 0",
                        borderBottom: "2px solid #E6DACB",
                        color: "#2A201B",
                        textDecoration: "none",
                        fontSize: "22px",
                        fontWeight: "600",
                      } as FilmStyle
                    }
                  >
                    <span
                      style={
                        {
                          flex: "none",
                          width: "104px",
                          fontSize: "13px",
                          fontWeight: "800",
                          letterSpacing: ".16em",
                          color: "#77685E",
                        } as FilmStyle
                      }
                    >
                      INSTAGRAM
                    </span>
                    uiux.yashie
                  </a>
                </div>
                <a
                  className="pop"
                  href="mailto:yashikavarshney.yv@gmail.com"
                  style={
                    {
                      "--d": "227.8s",
                      "--l": ".6s",
                      marginTop: "auto",
                      alignSelf: "flex-start",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "12px",
                      height: "64px",
                      padding: "0 30px",
                      borderRadius: "999px",
                      background: "#2A201B",
                      color: "#FFFDF8",
                      fontWeight: "700",
                      fontSize: "22px",
                      textDecoration: "none",
                    } as FilmStyle
                  }
                >
                  Let's work together{" "}
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="a dark"
          style={
            {
              inset: "0",
              background: "#17110E",
              "--d": "214.6s",
              "--l": "3s",
            } as FilmStyle
          }
        ></div>
        <div
          className="a"
          style={
            {
              left: "0",
              top: "18px",
              width: "1920px",
              display: "flex",
              justifyContent: "space-around",
              padding: "0 60px",
            } as FilmStyle
          }
        >
          <span
            className="bulb"
            style={
              {
                "--d": "215.2s",
                "--l": ".5s",
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                background: "#F7D578",
              } as FilmStyle
            }
          ></span>
          <span
            className="bulb"
            style={
              {
                "--d": "215.4s",
                "--l": ".5s",
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                background: "#F7D578",
              } as FilmStyle
            }
          ></span>
          <span
            className="bulb"
            style={
              {
                "--d": "215.6s",
                "--l": ".5s",
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                background: "#F7D578",
              } as FilmStyle
            }
          ></span>
          <span
            className="bulb"
            style={
              {
                "--d": "215.8s",
                "--l": ".5s",
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                background: "#F7D578",
              } as FilmStyle
            }
          ></span>
          <span
            className="bulb"
            style={
              {
                "--d": "216s",
                "--l": ".5s",
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                background: "#F7D578",
              } as FilmStyle
            }
          ></span>
          <span
            className="bulb"
            style={
              {
                "--d": "216.2s",
                "--l": ".5s",
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                background: "#F7D578",
              } as FilmStyle
            }
          ></span>
          <span
            className="bulb"
            style={
              {
                "--d": "216.4s",
                "--l": ".5s",
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                background: "#F7D578",
              } as FilmStyle
            }
          ></span>
          <span
            className="bulb"
            style={
              {
                "--d": "216.6s",
                "--l": ".5s",
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                background: "#F7D578",
              } as FilmStyle
            }
          ></span>
          <span
            className="bulb"
            style={
              {
                "--d": "216.8s",
                "--l": ".5s",
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                background: "#F7D578",
              } as FilmStyle
            }
          ></span>
          <span
            className="bulb"
            style={
              {
                "--d": "217s",
                "--l": ".5s",
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                background: "#F7D578",
              } as FilmStyle
            }
          ></span>
          <span
            className="bulb"
            style={
              {
                "--d": "217.2s",
                "--l": ".5s",
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                background: "#F7D578",
              } as FilmStyle
            }
          ></span>
          <span
            className="bulb"
            style={
              {
                "--d": "217.4s",
                "--l": ".5s",
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                background: "#F7D578",
              } as FilmStyle
            }
          ></span>
        </div>
        <div
          className="a say bub"
          style={
            {
              left: "400px",
              top: "210px",
              "--d": "219s",
              "--l": "2.6s",
              transformOrigin: "50% 100%",
            } as FilmStyle
          }
        >
          So…<i className="tail"></i>
        </div>
        <div
          className="a say bub"
          style={
            {
              left: "250px",
              top: "200px",
              fontSize: "42px",
              "--d": "222s",
              "--l": "3.4s",
              transformOrigin: "50% 100%",
            } as FilmStyle
          }
        >
          What are we making next?<i className="tail"></i>
        </div>
      </section>
    </>
  );
}
