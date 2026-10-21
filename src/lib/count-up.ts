export const COUNT_UP_DURATION_MS = 2000;

export function countUpProgress(elapsed: number) {
  const linear = Math.min(1, Math.max(0, elapsed / COUNT_UP_DURATION_MS));
  return 1 - (1 - linear) ** 3;
}

export function splitCounter(value: string) {
  const match = value.match(/^(\D*?)(\d[\d,]*(?:\.\d+)?)(.*)$/);
  if (!match) return { prefix: value, number: "", suffix: "", target: 0, decimals: 0 };
  const [, prefix, number, suffix] = match;
  return { prefix, number, suffix, target: Number(number.replaceAll(",", "")), decimals: number.split(".")[1]?.length ?? 0 };
}

export function formatCounter(value: string, progress: number) {
  const parts = splitCounter(value);
  if (progress >= 1) return parts.number;
  const factor = 10 ** parts.decimals;
  const number = (Math.floor(parts.target * Math.max(0, progress) * factor) / factor).toFixed(parts.decimals);
  if (!parts.number.includes(",")) return number;
  const [integer, fraction] = number.split(".");
  return integer.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (fraction === undefined ? "" : `.${fraction}`);
}