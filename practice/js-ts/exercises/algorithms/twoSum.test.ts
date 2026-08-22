import { describe, expect, it } from "vitest";
import { twoSum } from "./twoSum";

describe("twoSum", () => {
  it("finds a pair", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
  it("returns null when missing", () => {
    expect(twoSum([1, 2, 3], 100)).toBeNull();
  });
});
