import { describe, expect, it, vi } from "vitest";
import { createAdder, once } from "./closures";

describe("createAdder", () => {
  it("adds the captured value", () => {
    const add5 = createAdder(5);
    expect(add5(10)).toBe(15);
    expect(add5(0)).toBe(5);
  });
});

describe("once", () => {
  it("invokes the function only once", () => {
    const fn = vi.fn((x: number) => x * 2);
    const wrapped = once(fn as (...args: never[]) => unknown) as (x: number) => number;
    expect(wrapped(2)).toBe(4);
    expect(wrapped(3)).toBe(4);
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
