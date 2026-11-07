export const DURATION = 230;

// Keep playback boundaries separate from navigation targets: transitions cover
// the boundary frames, and Connect should open with its links already visible.
export const CHAPTERS = [
  { title: "Intro", start: 0, target: 0 },
  { title: "My world", start: 20, target: 21 },
  { title: "My work", start: 36, target: 37 },
  { title: "Playground", start: 122, target: 123 },
  { title: "AI", start: 138, target: 139 },
  { title: "Social", start: 152, target: 153 },
  { title: "Travel", start: 166, target: 167 },
  { title: "About", start: 198, target: 199 },
  { title: "Connect", start: 214, target: 228.5 },
] as const;

export const SHOTS = [
  0, 5, 9.6, 12.2, 14, 17, 20, 24, 27.8, 31, 36, 40, 45, 47.4, 50, 52.6, 55.9,
  58, 59.6, 64, 68, 72, 76, 80, 83.6, 86, 90, 94, 98, 101, 104, 108.6, 114, 118,
  122, 124.6, 130.6, 134, 138, 142, 145, 147.6, 152, 153.6, 158.2, 160.4, 166,
  168.6, 173.4, 175, 178.2, 181.6, 186, 188.4, 190.4, 192.4, 194.4, 196, 198,
  201, 203.8, 207, 210.5, 214, 219, 222, 225.6, 230,
] as const;
