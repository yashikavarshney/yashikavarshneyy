import { CHAPTERS } from "../data/film";
import type { FilmStyle } from "../types/film";

function SeekButton({ direction }: { direction: "backward" | "forward" }) {
  const label = `Seek ${direction} 10 seconds`;

  return (
    <button
      type="button"
      className="hb hs"
      id={`seek-${direction}`}
      aria-label={label}
      title={label}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 8a8 8 0 1 1-1 7M4 3v5h5"
          transform={
            direction === "forward" ? "translate(24 0) scale(-1 1)" : undefined
          }
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="seek-seconds" aria-hidden="true">
        10
      </span>
    </button>
  );
}

export default function FilmControls() {
  return (
    <>
      <svg className="spark" viewBox="0 0 12 12" aria-hidden="true">
        <path
          d="M6 0l1.4 4.6L12 6l-4.6 1.4L6 12 4.6 7.4 0 6l4.6-1.4z"
          fill="currentColor"
        ></path>
      </svg>
      <svg className="spark" viewBox="0 0 12 12" aria-hidden="true">
        <path
          d="M6 0l1.4 4.6L12 6l-4.6 1.4L6 12 4.6 7.4 0 6l4.6-1.4z"
          fill="currentColor"
        ></path>
      </svg>
      <svg className="spark" viewBox="0 0 12 12" aria-hidden="true">
        <path
          d="M6 0l1.4 4.6L12 6l-4.6 1.4L6 12 4.6 7.4 0 6l4.6-1.4z"
          fill="currentColor"
        ></path>
      </svg>
      <svg className="spark" viewBox="0 0 12 12" aria-hidden="true">
        <path
          d="M6 0l1.4 4.6L12 6l-4.6 1.4L6 12 4.6 7.4 0 6l4.6-1.4z"
          fill="currentColor"
        ></path>
      </svg>
      <svg className="spark" viewBox="0 0 12 12" aria-hidden="true">
        <path
          d="M6 0l1.4 4.6L12 6l-4.6 1.4L6 12 4.6 7.4 0 6l4.6-1.4z"
          fill="currentColor"
        ></path>
      </svg>
      <svg className="spark" viewBox="0 0 12 12" aria-hidden="true">
        <path
          d="M6 0l1.4 4.6L12 6l-4.6 1.4L6 12 4.6 7.4 0 6l4.6-1.4z"
          fill="currentColor"
        ></path>
      </svg>
      <svg className="spark" viewBox="0 0 12 12" aria-hidden="true">
        <path
          d="M6 0l1.4 4.6L12 6l-4.6 1.4L6 12 4.6 7.4 0 6l4.6-1.4z"
          fill="currentColor"
        ></path>
      </svg>
      <svg className="spark" viewBox="0 0 12 12" aria-hidden="true">
        <path
          d="M6 0l1.4 4.6L12 6l-4.6 1.4L6 12 4.6 7.4 0 6l4.6-1.4z"
          fill="currentColor"
        ></path>
      </svg>
      <svg className="spark" viewBox="0 0 12 12" aria-hidden="true">
        <path
          d="M6 0l1.4 4.6L12 6l-4.6 1.4L6 12 4.6 7.4 0 6l4.6-1.4z"
          fill="currentColor"
        ></path>
      </svg>
      <svg className="spark" viewBox="0 0 12 12" aria-hidden="true">
        <path
          d="M6 0l1.4 4.6L12 6l-4.6 1.4L6 12 4.6 7.4 0 6l4.6-1.4z"
          fill="currentColor"
        ></path>
      </svg>

      <div className="start" id="start">
        <img
          src="/media/95e59891064ceebcd86c1ea79a7e27b6.webp"
          alt="yashie"
          style={
            {
              height: "70px",
              width: "auto",
              filter: "brightness(0) invert(1)",
            } as FilmStyle
          }
        />
        <button className="startbtn" id="startbtn">
          <svg width="20" height="20" viewBox="0 0 18 18" aria-hidden="true">
            <path d="M4 2l12 7-12 7z" fill="currentColor"></path>
          </svg>
          Play the film
        </button>
        <p
          style={
            {
              margin: "0",
              fontSize: "16px",
              fontWeight: "600",
              opacity: ".9",
            } as FilmStyle
          }
        >
          or scroll to step through it, shot by shot · about 3½ minutes
        </p>
      </div>

      <div className="hud">
        <div className="transport" role="group" aria-label="Playback controls">
          <SeekButton direction="backward" />
          <button className="hb" id="toggle" aria-label="Play the film">
            <span className="ic-pause">
              <svg
                width="16"
                height="16"
                viewBox="0 0 18 18"
                aria-hidden="true"
              >
                <path
                  d="M4 2h3.5v14H4zM10.5 2H14v14h-3.5z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            <span className="ic-play">
              <svg
                width="16"
                height="16"
                viewBox="0 0 18 18"
                aria-hidden="true"
              >
                <path d="M4 2l12 7-12 7z" fill="currentColor"></path>
              </svg>
            </span>
          </button>
          <SeekButton direction="forward" />
        </div>
        <span className="hch" id="chlabel">
          01 / INTRO
        </span>
        <div className="htrack">
          <input
            type="range"
            tabIndex={-1}
            aria-hidden="true"
            min="0"
            max="2300"
            step="1"
            id="range"
            aria-label="Film timeline"
          />
          {CHAPTERS.map((chapter, index) => (
            <button
              key={chapter.title}
              className="hc"
              data-i={index}
              aria-label={`Chapter ${index + 1}: ${chapter.title}`}
            >
              <span className="bar">
                <span className="fill" />
              </span>
              <span className="lbl">
                <b>{String(index + 1).padStart(2, "0")}</b>
                <span>{chapter.title}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
