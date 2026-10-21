import { test } from "node:test";
import { strict as assert } from "node:assert";
import { isRevealVisible, revealDelay, REVEAL_DISTANCE_PX, REVEAL_DURATION_MS, REVEAL_THRESHOLD } from "./scroll-reveal";

test("reveal starts at 15 percent visibility, not before", () => {
  assert.equal(REVEAL_THRESHOLD, 0.15);
  assert.equal(isRevealVisible(986, 1086, 1000), false);
  assert.equal(isRevealVisible(985, 1085, 1000), true);
  assert.equal(isRevealVisible(-100, 0, 1000), false);
});
test("related items stagger by 90ms with a 300ms cap", () => {
  assert.deepEqual([0, 1, 2, 3, 4, 10].map(revealDelay), [0, 90, 180, 270, 300, 300]);
});
test("motion uses the requested 24px distance and 650ms duration", () => {
  assert.equal(REVEAL_DISTANCE_PX, 24);
  assert.equal(REVEAL_DURATION_MS, 650);
});