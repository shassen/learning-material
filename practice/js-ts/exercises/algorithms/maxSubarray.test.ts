import { describe, expect, it } from "vitest";
import { maxSubArray } from "./maxSubarray";

describe("maxSubArray", () => {
  it("handles mixed signs", () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });
  it("handles all negative", () => {
    expect(maxSubArray([-3, -1, -2])).toBe(-1);
  });
});
