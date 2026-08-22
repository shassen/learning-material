import { describe, expect, it } from "vitest";
import { mapInParallel, sleep } from "./order";

describe("sleep", () => {
  it("waits approximately the given time", async () => {
    const start = Date.now();
    await sleep(30);
    expect(Date.now() - start).toBeGreaterThanOrEqual(25);
  });
});

describe("mapInParallel", () => {
  it("maps concurrently and preserves order", async () => {
    const result = await mapInParallel([1, 2, 3], async (n) => {
      await sleep(30 - n * 5);
      return n * 2;
    });
    expect(result).toEqual([2, 4, 6]);
  });
});
