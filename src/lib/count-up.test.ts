import { test } from "node:test";
import { strict as assert } from "node:assert";
import { COUNT_UP_DURATION_MS, countUpProgress, formatCounter, splitCounter } from "./count-up";

test("all targets start at zero and finish at the shared two-second deadline", () => {
  assert.equal(COUNT_UP_DURATION_MS, 2000);
  for (const value of ["120+", "$10M+", "8x", "50+"]) {
    assert.equal(formatCounter(value, countUpProgress(0)), "0");
    assert.notEqual(formatCounter(value, countUpProgress(500)), splitCounter(value).number);
    assert.equal(formatCounter(value, countUpProgress(2000)), splitCounter(value).number);
  }
  assert.ok(countUpProgress(1999) < 1);
});

test("ease-out progress is faster initially and slower near the finish", () => {
  assert.equal(countUpProgress(1000), 0.875);
  assert.ok(countUpProgress(500) > 0.25);
  assert.ok(countUpProgress(500) - countUpProgress(0) > countUpProgress(2000) - countUpProgress(1500));
});

test("preserves prefixes, suffixes, commas and decimal precision", () => {
  assert.deepEqual(splitCounter("$10M+"), { prefix: "$", number: "10", suffix: "M+", target: 10, decimals: 0 });
  assert.equal(formatCounter("1,234.50%", 0), "0.00");
  assert.equal(formatCounter("1,234.50%", 0.9), "1,111.05");
  assert.equal(formatCounter("1,234.50%", 1), "1,234.50");
  assert.equal(splitCounter("1,234.50%").suffix, "%");
});