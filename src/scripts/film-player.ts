import { CHAPTERS, DURATION, SHOTS } from "../data/film";

declare global {
  interface Window {
    /** Seek the film for previews and browser verification. */
    __seek: (seconds: number) => void;
  }
}

const root = document.querySelector<HTMLElement>("#mv")!;
const stage = document.querySelector<HTMLElement>("#stage")!;
const range = document.querySelector<HTMLInputElement>("#range")!;
const label = document.querySelector<HTMLElement>("#chlabel")!;
const toggleButton = document.querySelector<HTMLButtonElement>("#toggle")!;
const start = document.querySelector<HTMLElement>("#start")!;
const chapterButtons = [...document.querySelectorAll<HTMLButtonElement>(".hc")];
const sparks = [...document.querySelectorAll<SVGElement>(".spark")];
const videos = [...stage.querySelectorAll<HTMLVideoElement>("video.clip")];
const animations = new Set<Animation>();
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

// Preserve the original poster fallback for Safari's transparent WebM handling.
const userAgent = navigator.userAgent;
const posterOnly =
  /Safari/.test(userAgent) &&
  !/Chrome|Chromium|Edg|OPR|Firefox/.test(userAgent);

let time = 0;
let target = 0;
let playing = false;
let ended = false;
let drawn = -1;
let lastFull = 0;
let lastNow = 0;
let currentChapter = -1;
let wheelDistance = 0;
let wheelCooldown = 0;
let touchOrigin: { x: number; y: number } | null = null;
let sparkIndex = 0;
let lastSpark = 0;
let lastSync = 0;
let previousTime = -1;
let loopsPlaying: boolean | null = null;

function fit() {
  stage.style.scale = String(
    Math.min(root.clientWidth / 1920, root.clientHeight / 1080),
  );
}

function setPlaying(value: boolean) {
  playing = value;
  root.classList.toggle("playing", value);
  toggleButton.setAttribute(
    "aria-label",
    value ? "Pause the film" : ended ? "Replay the film" : "Play the film",
  );
}

function animationName(animation: Animation) {
  return "animationName" in animation ? String(animation.animationName) : "";
}

function render() {
  const milliseconds = Math.min(time, DURATION - 0.001) * 1000;
  for (const animation of stage.getAnimations({ subtree: true }))
    animations.add(animation);
  for (const animation of animations) {
    if (animationName(animation).startsWith("loop")) continue;
    if (animation.playState !== "paused") animation.pause();
    animation.currentTime = milliseconds;
  }

  range.value = String(Math.round(time * 10));
  chapterButtons.forEach((button, index) => {
    const chapter = CHAPTERS[index]!;
    const end = CHAPTERS[index + 1]?.start ?? DURATION;
    const fraction = Math.max(
      0,
      Math.min(1, (time - chapter.start) / (end - chapter.start)),
    );
    button.querySelector<HTMLElement>(".fill")!.style.scale =
      `${fraction.toFixed(4)} 1`;
    button.classList.toggle(
      "on",
      time >= chapter.start - 0.01 &&
        (time < end || index === CHAPTERS.length - 1),
    );
  });

  let chapterIndex = 0;
  CHAPTERS.forEach((chapter, index) => {
    if (time >= chapter.start - 0.01) chapterIndex = index;
  });
  if (chapterIndex !== currentChapter) {
    currentChapter = chapterIndex;
    label.textContent = `${String(chapterIndex + 1).padStart(2, "0")} / ${CHAPTERS[chapterIndex]!.title.toUpperCase()}`;
  }
}

for (const video of videos) {
  video.muted = true;
  video.playsInline = true;
  video.loop = Boolean(video.dataset.loop);
}

function syncVideos() {
  const moving = time !== previousTime;
  previousTime = time;
  const live = playing || moving;

  if (live !== loopsPlaying) {
    loopsPlaying = live;
    for (const animation of animations) {
      if (!animationName(animation).startsWith("loop")) continue;
      if (live && animation.playState === "paused") animation.play();
      else if (!live && animation.playState !== "paused") animation.pause();
    }
  }

  for (const video of videos) {
    if (getComputedStyle(video).visibility !== "visible") {
      if (!video.paused) video.pause();
      continue;
    }
    if (posterOnly) continue;

    // Fetch clips only when their scene is visible. Posters are static assets,
    // so jumping directly to a chapter still has an immediate visual fallback.
    if (!video.hasAttribute("src")) {
      video.preload = "auto";
      video.src = video.dataset.src!;
    }

    if (video.dataset.loop) {
      if (live && video.paused) void video.play().catch(() => {});
      else if (!live && !video.paused) video.pause();
      continue;
    }

    // Metadata must exist before seeking a clip opened partway through a scene.
    if (video.readyState < HTMLMediaElement.HAVE_METADATA) continue;
    const duration = video.duration || 8;
    const local = time - Number(video.dataset.start ?? 0);
    const wanted = Math.max(0, Math.min(duration - 0.05, local));
    if (moving && local >= 0 && local < duration - 0.05) {
      if (Math.abs(video.currentTime - wanted) > 0.3)
        video.currentTime = wanted;
      if (video.paused) void video.play().catch(() => {});
    } else {
      if (!video.paused) video.pause();
      if (Math.abs(video.currentTime - wanted) > 0.06)
        video.currentTime = wanted;
    }
  }
}

function tick(now: number) {
  requestAnimationFrame(tick);
  const delta = Math.min(0.1, (now - (lastNow || now)) / 1000);
  lastNow = now;
  if (playing) {
    target = Math.min(DURATION, target + delta);
    time = target;
    if (time >= DURATION) {
      ended = true;
      setPlaying(false);
    }
  } else if (Math.abs(target - time) > 0.0005) {
    const distance = target - time;
    const speed = Math.max(1.7, Math.abs(distance) / 1.8);
    time += Math.sign(distance) * Math.min(Math.abs(distance), speed * delta);
  }
  if (time !== drawn || now - lastFull > 400) {
    render();
    drawn = time;
    lastFull = now;
  }
  if (now - lastSync > 90) {
    lastSync = now;
    syncVideos();
  }
}

function begin() {
  start.classList.add("hide");
}

function play() {
  if (ended || time >= DURATION - 0.05) time = target = 0;
  target = time;
  ended = false;
  begin();
  setPlaying(true);
  lastSync = 0;
  root.focus({ preventScroll: true });
}

function pause() {
  target = time;
  previousTime = time;
  setPlaying(false);
  lastSync = 0;
}

function toggle() {
  if (playing) pause();
  else play();
}

function step(direction: number) {
  begin();
  if (playing) pause();
  ended = false;
  if (direction > 0) {
    const boundary = Math.max(time, target);
    target = SHOTS.find((shot) => shot > boundary + 0.05) ?? DURATION;
  } else {
    const boundary = Math.min(time, target);
    target = SHOTS.findLast((shot) => shot < boundary - 0.05) ?? 0;
  }
}

function jump(seconds: number) {
  begin();
  if (playing) pause();
  ended = false;
  time = target = Math.max(0, Math.min(DURATION, seconds));
}

document
  .querySelector<HTMLButtonElement>("#startbtn")!
  .addEventListener("click", play);
toggleButton.addEventListener("click", toggle);
chapterButtons.forEach((button, index) => {
  button.addEventListener("click", () => jump(CHAPTERS[index]!.target));
});
range.addEventListener("input", () => jump(Number(range.value) / 10));

root.addEventListener(
  "wheel",
  (event) => {
    if (event.ctrlKey) return;
    event.preventDefault();
    const now = Date.now();
    wheelDistance += event.deltaY + event.deltaX;
    if (now < wheelCooldown) return;
    if (Math.abs(wheelDistance) > 28) {
      const direction = wheelDistance > 0 ? 1 : -1;
      wheelDistance = 0;
      wheelCooldown = now + 420;
      step(direction);
    }
  },
  { passive: false },
);

window.addEventListener("keydown", (event) => {
  if (event.target === range) return;
  const tag = event.target instanceof Element ? event.target.tagName : "";
  if (
    (event.key === " " || event.key === "Enter") &&
    (tag === "BUTTON" || tag === "A")
  )
    return;
  if (["ArrowDown", "ArrowRight", "PageDown"].includes(event.key)) {
    event.preventDefault();
    step(1);
  } else if (["ArrowUp", "ArrowLeft", "PageUp"].includes(event.key)) {
    event.preventDefault();
    step(-1);
  } else if (event.key === " " || event.key === "k") {
    event.preventDefault();
    toggle();
  } else if (event.key === "Home") {
    event.preventDefault();
    jump(0);
  }
});

root.addEventListener(
  "touchstart",
  (event) => {
    const touch = event.touches[0];
    if (touch) touchOrigin = { x: touch.clientX, y: touch.clientY };
  },
  { passive: true },
);
root.addEventListener("touchend", (event) => {
  const touch = event.changedTouches[0];
  if (!touch || !touchOrigin) return;
  const vertical = touchOrigin.y - touch.clientY;
  const horizontal = touchOrigin.x - touch.clientX;
  const distance =
    Math.abs(vertical) > Math.abs(horizontal) ? vertical : horizontal;
  if (Math.abs(distance) > 40) step(distance > 0 ? 1 : -1);
  touchOrigin = null;
});

root.addEventListener("mousemove", (event) => {
  if (reduceMotion) return;
  const now = Date.now();
  if (now - lastSpark < 60) return;
  lastSpark = now;
  const bounds = root.getBoundingClientRect();
  const x = event.clientX - bounds.left;
  const y = event.clientY - bounds.top;
  const spark = sparks[sparkIndex++ % sparks.length]!;
  const drift = Math.random() * 18 - 9;
  spark.animate(
    [
      {
        opacity: 0.9,
        transform: `translate(${x}px,${y}px) scale(1) rotate(0deg)`,
      },
      {
        opacity: 0,
        transform: `translate(${x + drift}px,${y + 20}px) scale(.2) rotate(140deg)`,
      },
    ],
    { duration: 760, easing: "cubic-bezier(.2,.7,.3,1)" },
  );
});

window.addEventListener("resize", fit);
fit();
void document.fonts.ready.then(render);
render();
requestAnimationFrame(tick);
window.__seek = jump;
