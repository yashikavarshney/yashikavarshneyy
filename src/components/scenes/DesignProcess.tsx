import FilmImage from "../FilmImage";
import type { FilmStyle } from "../../types/film";

export default function DesignProcess() {
  return (
    <>
      {/* ================= SCENE 03 · WHAT I ACTUALLY DO (36–58s) ================= */}
      <section
        className="scene win"
        style={{ "--d": "36s", "--l": "22s" } as FilmStyle}
        aria-label="Scene 3: what I actually do"
      >
        <div
          className="scene win"
          style={{ "--d": "36s", "--l": "14s" } as FilmStyle}
        >
          <div
            className="cam"
            style={{ animation: "cam3 14s ease-in-out 36s both" } as FilmStyle}
          >
            <div
              className="a"
              style={{ inset: "0", background: "#F6ECDD" } as FilmStyle}
            ></div>
            <div
              className="a"
              style={
                {
                  left: "0",
                  top: "920px",
                  width: "1920px",
                  height: "160px",
                  background: "#E9DBC6",
                } as FilmStyle
              }
            ></div>
            <div
              className="a"
              style={
                {
                  left: "760px",
                  top: "90px",
                  width: "1090px",
                  height: "810px",
                  background: "#E3CDAA",
                  border: "10px solid #C9AE86",
                  borderRadius: "14px",
                } as FilmStyle
              }
            ></div>
            <div
              className="a fi"
              style={
                {
                  left: "780px",
                  top: "110px",
                  width: "1050px",
                  height: "770px",
                  background: "#FFFDF8",
                  borderRadius: "16px",
                  "--d": "47s",
                  "--l": ".8s",
                } as FilmStyle
              }
            ></div>
            <div
              className="a tidy"
              style={
                {
                  left: "800px",
                  top: "130px",
                  width: "1010px",
                  height: "70px",
                  "--d": "45.4s",
                  "--l": "1.5s",
                  "--mx": "60px",
                  "--my": "690px",
                  "--mr": "8deg",
                } as FilmStyle
              }
            >
              <div
                className="ui"
                style={
                  {
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: "18px",
                    padding: "0 24px",
                  } as FilmStyle
                }
              >
                <span
                  style={
                    {
                      width: "120px",
                      height: "18px",
                      borderRadius: "9px",
                      background: "#C83E66",
                    } as FilmStyle
                  }
                ></span>
                <span
                  className="bar"
                  style={{ width: "90px" } as FilmStyle}
                ></span>
                <span
                  className="bar"
                  style={{ width: "90px" } as FilmStyle}
                ></span>
                <span
                  className="bar"
                  style={{ width: "90px" } as FilmStyle}
                ></span>
                <span
                  style={
                    {
                      marginLeft: "auto",
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: "#F2A48C",
                    } as FilmStyle
                  }
                ></span>
              </div>
            </div>
            <div
              className="a tidy"
              style={
                {
                  left: "800px",
                  top: "220px",
                  width: "320px",
                  height: "200px",
                  "--d": "45.5s",
                  "--l": "1.5s",
                  "--mx": "40px",
                  "--my": "60px",
                  "--mr": "-14deg",
                } as FilmStyle
              }
            >
              <div
                className="hand"
                style={
                  {
                    height: "100%",
                    background: "#F7E5A6",
                    padding: "18px 20px",
                    fontSize: "32px",
                    lineHeight: "1.05",
                    boxShadow: "0 10px 20px -12px rgba(42,32,27,.5)",
                  } as FilmStyle
                }
              >
                research:
                <br />
                users want
                <br />
                fewer clicks?!
              </div>
            </div>
            <div
              className="a tidy"
              style={
                {
                  left: "1140px",
                  top: "220px",
                  width: "320px",
                  height: "200px",
                  "--d": "45.6s",
                  "--l": "1.5s",
                  "--mx": "260px",
                  "--my": "420px",
                  "--mr": "18deg",
                } as FilmStyle
              }
            >
              <div
                className="ui"
                style={
                  {
                    height: "100%",
                    padding: "16px",
                    display: "flex",
                    gap: "12px",
                    border: "2px dashed #B9A999",
                  } as FilmStyle
                }
              >
                <span
                  style={
                    {
                      width: "90px",
                      background: "#EDE5DA",
                      borderRadius: "8px",
                    } as FilmStyle
                  }
                ></span>
                <span
                  style={
                    {
                      flex: "1",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    } as FilmStyle
                  }
                >
                  <span className="bar"></span>
                  <span
                    className="bar"
                    style={{ width: "70%" } as FilmStyle}
                  ></span>
                  <span
                    className="bar"
                    style={{ width: "85%" } as FilmStyle}
                  ></span>
                  <span
                    className="bar"
                    style={{ width: "50%" } as FilmStyle}
                  ></span>
                </span>
              </div>
            </div>
            <div
              className="a tidy"
              style={
                {
                  left: "1480px",
                  top: "220px",
                  width: "320px",
                  height: "200px",
                  "--d": "45.7s",
                  "--l": "1.5s",
                  "--mx": "-620px",
                  "--my": "300px",
                  "--mr": "-10deg",
                } as FilmStyle
              }
            >
              <div
                className="ui"
                style={
                  {
                    height: "100%",
                    padding: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  } as FilmStyle
                }
              >
                <span
                  style={
                    {
                      padding: "10px 12px",
                      borderRadius: "10px",
                      background: "#D3E5F5",
                      fontWeight: "700",
                      fontSize: "15px",
                    } as FilmStyle
                  }
                >
                  Search
                </span>
                <svg
                  width="30"
                  height="16"
                  viewBox="0 0 30 16"
                  aria-hidden="true"
                >
                  <path
                    d="M2 8h22M18 3l6 5-6 5"
                    stroke="#2A201B"
                    strokeWidth="2"
                    fill="none"
                  ></path>
                </svg>
                <span
                  style={
                    {
                      padding: "10px 12px",
                      borderRadius: "10px",
                      background: "#DED5F6",
                      fontWeight: "700",
                      fontSize: "15px",
                    } as FilmStyle
                  }
                >
                  Select
                </span>
                <svg
                  width="30"
                  height="16"
                  viewBox="0 0 30 16"
                  aria-hidden="true"
                >
                  <path
                    d="M2 8h22M18 3l6 5-6 5"
                    stroke="#2A201B"
                    strokeWidth="2"
                    fill="none"
                  ></path>
                </svg>
                <span
                  style={
                    {
                      padding: "10px 12px",
                      borderRadius: "10px",
                      background: "#D6EACB",
                      fontWeight: "700",
                      fontSize: "15px",
                    } as FilmStyle
                  }
                >
                  Book
                </span>
              </div>
            </div>
            <div
              className="a tidy"
              style={
                {
                  left: "800px",
                  top: "440px",
                  width: "490px",
                  height: "290px",
                  "--d": "45.8s",
                  "--l": "1.5s",
                  "--mx": "520px",
                  "--my": "-230px",
                  "--mr": "12deg",
                } as FilmStyle
              }
            >
              <div
                className="ui"
                style={{ height: "100%", overflow: "hidden" } as FilmStyle}
              >
                <FilmImage
                  src="/media/fe1926be652f37cc96b21d87fcfa076f.webp"
                  alt=""
                  style={
                    {
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top left",
                    } as FilmStyle
                  }
                />
              </div>
            </div>
            <div
              className="a tidy"
              style={
                {
                  left: "1310px",
                  top: "440px",
                  width: "490px",
                  height: "130px",
                  "--d": "45.9s",
                  "--l": "1.5s",
                  "--mx": "-380px",
                  "--my": "-300px",
                  "--mr": "-20deg",
                } as FilmStyle
              }
            >
              <div
                className="ui"
                style={
                  {
                    height: "100%",
                    padding: "18px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  } as FilmStyle
                }
              >
                <span
                  style={
                    {
                      fontSize: "13px",
                      fontWeight: "700",
                      letterSpacing: ".14em",
                      color: "#5E5049",
                    } as FilmStyle
                  }
                >
                  DESIGN SYSTEM
                </span>
                <span style={{ display: "flex", gap: "10px" } as FilmStyle}>
                  <span
                    style={
                      {
                        width: "44px",
                        height: "44px",
                        borderRadius: "10px",
                        background: "#1882FF",
                      } as FilmStyle
                    }
                  ></span>
                  <span
                    style={
                      {
                        width: "44px",
                        height: "44px",
                        borderRadius: "10px",
                        background: "#F2A48C",
                      } as FilmStyle
                    }
                  ></span>
                  <span
                    style={
                      {
                        width: "44px",
                        height: "44px",
                        borderRadius: "10px",
                        background: "#DED5F6",
                      } as FilmStyle
                    }
                  ></span>
                  <span
                    style={
                      {
                        width: "44px",
                        height: "44px",
                        borderRadius: "10px",
                        background: "#D3E5F5",
                      } as FilmStyle
                    }
                  ></span>
                  <span
                    style={
                      {
                        width: "44px",
                        height: "44px",
                        borderRadius: "10px",
                        background: "#2A201B",
                      } as FilmStyle
                    }
                  ></span>
                  <span
                    style={
                      {
                        padding: "12px 16px",
                        borderRadius: "10px",
                        border: "2px solid #2A201B",
                        fontWeight: "700",
                        fontSize: "14px",
                      } as FilmStyle
                    }
                  >
                    Button
                  </span>
                </span>
              </div>
            </div>
            <div
              className="a tidy"
              style={
                {
                  left: "1310px",
                  top: "590px",
                  width: "490px",
                  height: "140px",
                  "--d": "46s",
                  "--l": "1.5s",
                  "--mx": "120px",
                  "--my": "220px",
                  "--mr": "9deg",
                } as FilmStyle
              }
            >
              <div
                className="ui"
                style={{ height: "100%", overflow: "hidden" } as FilmStyle}
              >
                <FilmImage
                  src="/media/468740d09baa3c30d280293bf24e5123.webp"
                  alt=""
                  style={
                    {
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top",
                    } as FilmStyle
                  }
                />
              </div>
            </div>
            <div
              className="a tidy"
              style={
                {
                  left: "800px",
                  top: "750px",
                  width: "240px",
                  height: "110px",
                  "--d": "46.1s",
                  "--l": "1.5s",
                  "--mx": "700px",
                  "--my": "-560px",
                  "--mr": "-24deg",
                } as FilmStyle
              }
            >
              <div
                className="hand"
                style={
                  {
                    height: "100%",
                    background: "#F8D6DF",
                    padding: "14px 18px",
                    fontSize: "34px",
                    lineHeight: "1",
                    boxShadow: "0 10px 20px -12px rgba(42,32,27,.5)",
                  } as FilmStyle
                }
              >
                what if…?
              </div>
            </div>
            <div
              className="a tidy"
              style={
                {
                  left: "1060px",
                  top: "750px",
                  width: "240px",
                  height: "110px",
                  "--d": "46.2s",
                  "--l": "1.5s",
                  "--mx": "380px",
                  "--my": "-380px",
                  "--mr": "16deg",
                } as FilmStyle
              }
            >
              <div
                className="hand"
                style={
                  {
                    height: "100%",
                    background: "#D6EACB",
                    padding: "14px 18px",
                    fontSize: "34px",
                    lineHeight: "1",
                    boxShadow: "0 10px 20px -12px rgba(42,32,27,.5)",
                  } as FilmStyle
                }
              >
                v2 → v7
              </div>
            </div>
            <div
              className="a tidy"
              style={
                {
                  left: "1320px",
                  top: "750px",
                  width: "480px",
                  height: "110px",
                  "--d": "46.3s",
                  "--l": "1.5s",
                  "--mx": "-300px",
                  "--my": "-520px",
                  "--mr": "-7deg",
                } as FilmStyle
              }
            >
              <div
                className="ui"
                style={{ height: "100%", overflow: "hidden" } as FilmStyle}
              >
                <FilmImage
                  src="/media/9cfee8e8dc0d253935f51d2bf722a1c2.webp"
                  alt=""
                  style={
                    {
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top",
                    } as FilmStyle
                  }
                />
              </div>
            </div>
            <div
              className="a hand bub"
              style={
                {
                  left: "1300px",
                  top: "150px",
                  "--d": "41.4s",
                  "--l": "4s",
                  fontSize: "40px",
                  color: "#B23459",
                  fontWeight: "700",
                } as FilmStyle
              }
            >
              where do I even start?!
            </div>
            <div
              className="a"
              style={
                {
                  left: "250px",
                  top: "900px",
                  width: "320px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "rgba(42,32,27,.12)",
                } as FilmStyle
              }
            ></div>
            <div
              className="a win"
              style={{ "--d": "36s", "--l": "9s" } as FilmStyle}
            >
              <div
                className="a sl"
                style={
                  {
                    left: "280px",
                    top: "150px",
                    "--d": "36s",
                    "--l": "1.8s",
                    "--fx": "-560px",
                    "--fy": "0px",
                  } as FilmStyle
                }
              >
                <div>
                  <video
                    className="chr clip"
                    data-src="/media/f9fd5915c778c440bb0b8caad12ee604.webm"
                    data-poster="/media/3412b245d77460ba302cc7e243be618b.webp"
                    width={388}
                    height={900}
                    muted
                    playsInline
                    preload="none"
                    data-loop="1"
                    aria-label="Yashika looking at the messy wall"
                    style={
                      {
                        height: "792px",
                        width: "auto",
                        maxWidth: "none",
                        marginLeft: "-48px",
                        marginTop: "-15px",
                      } as FilmStyle
                    }
                  ></video>
                </div>
              </div>
            </div>
            <div
              className="a win"
              style={{ "--d": "45s", "--l": "2.4s" } as FilmStyle}
            >
              <video
                className="a chr clip"
                data-src="/media/16a88bd996b1287d2e872ab84b338e11.webm"
                data-poster="/media/365b88c6d2abc248663f79cad11a365f.webp"
                width={432}
                height={900}
                muted
                playsInline
                preload="none"
                data-start="45"
                aria-label="Yashika snapping her fingers with a wink"
                style={
                  {
                    left: "280px",
                    top: "150px",
                    height: "795px",
                    width: "auto",
                    maxWidth: "none",
                    marginLeft: "-93px",
                    marginTop: "-18px",
                  } as FilmStyle
                }
              ></video>
            </div>
            <div
              className="a win"
              style={{ "--d": "47.4s", "--l": "2.6s" } as FilmStyle}
            >
              <video
                className="a chr clip"
                data-src="/media/f9fd5915c778c440bb0b8caad12ee604.webm"
                data-poster="/media/3412b245d77460ba302cc7e243be618b.webp"
                width={388}
                height={900}
                muted
                playsInline
                preload="none"
                data-loop="1"
                aria-label=""
                style={
                  {
                    left: "280px",
                    top: "150px",
                    height: "792px",
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
            className="a say bub"
            style={
              {
                left: "90px",
                top: "70px",
                "--d": "40s",
                "--l": "4.6s",
                transformOrigin: "50% 100%",
              } as FilmStyle
            }
          >
            Most projects start like this.<i className="tail"></i>
          </div>
          <div
            className="a pop"
            style={
              {
                left: "110px",
                top: "140px",
                "--d": "45s",
                "--l": ".5s",
              } as FilmStyle
            }
          >
            <div
              className="bub"
              style={
                {
                  "--d": "45s",
                  "--l": "1.6s",
                  position: "relative",
                } as FilmStyle
              }
            >
              <svg
                width="160"
                height="160"
                viewBox="0 0 100 100"
                fill="#F7E5A6"
                stroke="#2A201B"
                strokeWidth="2.5"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M50 4l9 28 30-8-20 22 22 20-30 0-6 30-13-26-27 14 12-28-24-18 30-4z"></path>
              </svg>
              <span
                className="a hand"
                style={
                  {
                    left: "30px",
                    top: "46px",
                    fontSize: "44px",
                    fontWeight: "700",
                  } as FilmStyle
                }
              >
                snap!
              </span>
            </div>
          </div>
          <div
            className="a flash"
            style={
              {
                inset: "0",
                background: "#FFFDF8",
                "--d": "45.3s",
                "--l": ".7s",
              } as FilmStyle
            }
          ></div>
          <div
            className="a say bub"
            style={
              {
                left: "200px",
                top: "60px",
                "--d": "47.4s",
                "--l": "2.6s",
                transformOrigin: "50% 100%",
              } as FilmStyle
            }
          >
            Then I make sense of it.<i className="tail"></i>
          </div>
        </div>

        <div
          className="scene win"
          style={{ "--d": "50s", "--l": "8s" } as FilmStyle}
        >
          <div
            className="a"
            style={{ inset: "0", background: "#FBF5EC" } as FilmStyle}
          ></div>
          <div
            className="a"
            style={
              {
                left: "0",
                top: "960px",
                width: "1920px",
                height: "120px",
                background: "#EFE3D3",
              } as FilmStyle
            }
          ></div>
          <div
            className="a"
            style={
              {
                left: "0",
                top: "70px",
                width: "1920px",
                display: "flex",
                justifyContent: "center",
                gap: "22px",
                alignItems: "center",
              } as FilmStyle
            }
          >
            <span
              className="disp pop"
              style={
                {
                  "--d": "51s",
                  "--l": ".5s",
                  fontWeight: "800",
                  fontSize: "50px",
                } as FilmStyle
              }
            >
              Understand
            </span>
            <span
              className="pop"
              style={
                { "--d": "52.4s", "--l": ".4s", fontSize: "40px" } as FilmStyle
              }
            >
              →
            </span>
            <span
              className="disp pop"
              style={
                {
                  "--d": "52.6s",
                  "--l": ".5s",
                  fontWeight: "800",
                  fontSize: "50px",
                } as FilmStyle
              }
            >
              Explore
            </span>
            <span
              className="pop"
              style={
                { "--d": "54s", "--l": ".4s", fontSize: "40px" } as FilmStyle
              }
            >
              →
            </span>
            <span
              className="disp pop"
              style={
                {
                  "--d": "54.3s",
                  "--l": ".5s",
                  fontWeight: "800",
                  fontSize: "50px",
                } as FilmStyle
              }
            >
              Design
            </span>
            <span
              className="pop"
              style={
                { "--d": "55.6s", "--l": ".4s", fontSize: "40px" } as FilmStyle
              }
            >
              →
            </span>
            <span
              className="disp pop"
              style={
                {
                  "--d": "55.9s",
                  "--l": ".5s",
                  fontWeight: "800",
                  fontSize: "50px",
                } as FilmStyle
              }
            >
              Iterate
            </span>
            <span
              className="pop"
              style={
                { "--d": "57.2s", "--l": ".4s", fontSize: "40px" } as FilmStyle
              }
            >
              →
            </span>
            <span
              className="disp pop"
              style={
                {
                  "--d": "57.5s",
                  "--l": ".5s",
                  fontWeight: "800",
                  fontSize: "50px",
                  color: "#C83E66",
                } as FilmStyle
              }
            >
              Ship
            </span>
          </div>
          <div
            className="a settle"
            style={
              {
                left: "150px",
                top: "190px",
                width: "270px",
                height: "360px",
                "--d": "50.2s",
                "--l": "1s",
                "--r": "-3deg",
              } as FilmStyle
            }
          >
            <div
              style={
                {
                  position: "relative",
                  height: "100%",
                  borderRadius: "135px 135px 24px 24px",
                  background: "#D3E5F5",
                  overflow: "hidden",
                } as FilmStyle
              }
            >
              <FilmImage
                src="/media/78d153e4d3192ba2357169147f51fd13.webp"
                alt="Yashika researching on her tablet"
                style={
                  {
                    position: "absolute",
                    left: "-10px",
                    bottom: "-20px",
                    width: "290px",
                  } as FilmStyle
                }
              />
            </div>
          </div>
          <div
            className="a settle"
            style={
              {
                left: "490px",
                top: "190px",
                width: "270px",
                height: "360px",
                "--d": "51.6s",
                "--l": "1s",
                "--r": "2deg",
              } as FilmStyle
            }
          >
            <div
              style={
                {
                  position: "relative",
                  height: "100%",
                  borderRadius: "135px 135px 24px 24px",
                  background: "#F7E5A6",
                  overflow: "hidden",
                } as FilmStyle
              }
            >
              <FilmImage
                src="/media/afebfbbe945f54e4d723ced52582d48a.webp"
                alt="Yashika surprised by an idea"
                style={
                  {
                    position: "absolute",
                    left: "-10px",
                    bottom: "-20px",
                    width: "290px",
                  } as FilmStyle
                }
              />
            </div>
          </div>
          <div
            className="a settle"
            style={
              {
                left: "830px",
                top: "190px",
                width: "270px",
                height: "360px",
                "--d": "53.2s",
                "--l": "1s",
                "--r": "-1deg",
              } as FilmStyle
            }
          >
            <div
              style={
                {
                  position: "relative",
                  height: "100%",
                  borderRadius: "135px 135px 24px 24px",
                  background: "#DED5F6",
                  overflow: "hidden",
                } as FilmStyle
              }
            >
              <FilmImage
                src="/media/fb59257d046b1bf1e8974aef9ef67abe.webp"
                alt="Yashika designing on her laptop"
                style={
                  {
                    position: "absolute",
                    left: "-16px",
                    bottom: "-14px",
                    width: "300px",
                  } as FilmStyle
                }
              />
            </div>
          </div>
          <div
            className="a settle"
            style={
              {
                left: "1170px",
                top: "190px",
                width: "270px",
                height: "360px",
                "--d": "54.8s",
                "--l": "1s",
                "--r": "3deg",
              } as FilmStyle
            }
          >
            <div
              style={
                {
                  position: "relative",
                  height: "100%",
                  borderRadius: "135px 135px 24px 24px",
                  background: "#D6EACB",
                  overflow: "hidden",
                } as FilmStyle
              }
            >
              <FilmImage
                src="/media/cf4be100176ee32c07f334207d393deb.webp"
                alt="Yashika with a snap and a wink"
                style={
                  {
                    position: "absolute",
                    left: "50%",
                    marginLeft: "-100px",
                    top: "20px",
                    width: "200px",
                  } as FilmStyle
                }
              />
            </div>
          </div>
          <div
            className="a settle"
            style={
              {
                left: "1510px",
                top: "190px",
                width: "270px",
                height: "360px",
                "--d": "56.4s",
                "--l": "1s",
                "--r": "-2deg",
              } as FilmStyle
            }
          >
            <div
              style={
                {
                  position: "relative",
                  height: "100%",
                  borderRadius: "135px 135px 24px 24px",
                  background: "#F8D6DF",
                  overflow: "hidden",
                } as FilmStyle
              }
            >
              <FilmImage
                src="/media/1eb3162419584d1de30121a45429db1b.webp"
                alt="Yashika dancing — it shipped"
                style={
                  {
                    position: "absolute",
                    left: "50%",
                    marginLeft: "-110px",
                    top: "20px",
                    width: "220px",
                  } as FilmStyle
                }
              />
            </div>
          </div>
          <div
            className="a hand pop"
            style={
              {
                left: "150px",
                top: "570px",
                width: "270px",
                textAlign: "center",
                fontSize: "30px",
                "--d": "51s",
                "--l": ".5s",
              } as FilmStyle
            }
          >
            research &amp; the real problem
          </div>
          <div
            className="a hand pop"
            style={
              {
                left: "490px",
                top: "570px",
                width: "270px",
                textAlign: "center",
                fontSize: "30px",
                "--d": "52.6s",
                "--l": ".5s",
              } as FilmStyle
            }
          >
            sketches, flows, IA
          </div>
          <div
            className="a hand pop"
            style={
              {
                left: "830px",
                top: "570px",
                width: "270px",
                textAlign: "center",
                fontSize: "30px",
                "--d": "54.3s",
                "--l": ".5s",
              } as FilmStyle
            }
          >
            wireframes → UI → system
          </div>
          <div
            className="a hand pop"
            style={
              {
                left: "1170px",
                top: "570px",
                width: "270px",
                textAlign: "center",
                fontSize: "30px",
                "--d": "55.9s",
                "--l": ".5s",
              } as FilmStyle
            }
          >
            prototype, test, refine
          </div>
          <div
            className="a hand pop"
            style={
              {
                left: "1510px",
                top: "570px",
                width: "270px",
                textAlign: "center",
                fontSize: "30px",
                "--d": "57.5s",
                "--l": ".5s",
              } as FilmStyle
            }
          >
            handoff, QA, live
          </div>
          <svg
            className="a"
            style={{ left: "100px", top: "640px" } as FilmStyle}
            width="1720"
            height="80"
            viewBox="0 0 1720 80"
            fill="none"
            aria-hidden="true"
          >
            <path
              className="draw"
              pathLength="1"
              style={{ "--d": "50.4s", "--l": "7.2s" } as FilmStyle}
              d="M10 50 C 200 0, 360 80, 560 40 S 900 10, 1100 50 S 1500 70, 1710 30"
              stroke="#F2A48C"
              strokeWidth="4"
              strokeLinecap="round"
            ></path>
          </svg>
          <div
            className="a mvl"
            style={
              {
                left: "80px",
                top: "660px",
                "--d": "50.4s",
                "--l": "7.2s",
                "--tx": "1500px",
                "--ty": "0px",
              } as FilmStyle
            }
          >
            <div>
              <video
                className="chr clip"
                data-src="/media/57e75d6de34a48486b87936fe2974aca.webm"
                data-poster="/media/1feb3fb8cd8b8b7f0cfe3a9c5ed5401d.webp"
                width={588}
                height={900}
                muted
                playsInline
                preload="none"
                data-loop="1"
                aria-label="Yashika walking through each stage"
                style={
                  {
                    height: "313px",
                    width: "auto",
                    maxWidth: "none",
                    marginLeft: "-7px",
                    marginTop: "-8px",
                  } as FilmStyle
                }
              ></video>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
