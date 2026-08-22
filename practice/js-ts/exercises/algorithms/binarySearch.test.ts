import { describe, expect, it } from "vitest";
import { binarySearch } from "./binarySearch";

describe("binarySearch", () => {
  it("finds existing values", () => {
    expect(binarySearch([1, 3, 5, 7, 9], 7)).toBe(3);
    expect(binarySearch([1, 3, 5, 7, 9], 1)).toBe(0);
  });
  it("returns -1 when missing", () => {
    expect(binarySearch([1, 3, 5], 2)).toBe(-1);
  });
});
