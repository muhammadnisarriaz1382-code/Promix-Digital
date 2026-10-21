export const REVEAL_THRESHOLD = 0.15;
export const REVEAL_DURATION_MS = 650;
export const REVEAL_DISTANCE_PX = 24;
export const REVEAL_STAGGER_MS = 90;
export const REVEAL_MAX_DELAY_MS = 300;

export function revealDelay(index: number) {
  return Math.min(REVEAL_MAX_DELAY_MS, Math.max(0, index) * REVEAL_STAGGER_MS);
}

export function isRevealVisible(top: number, bottom: number, viewportHeight: number) {
  const height = bottom - top;
  const visible = Math.max(0, Math.min(bottom, viewportHeight) - Math.max(top, 0));
  return height > 0 && visible / height >= REVEAL_THRESHOLD;
}