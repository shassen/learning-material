import { describe, expect, it } from "vitest";
import { Person, createDog } from "./proto";

describe("createDog", () => {
  it("delegates eat via prototype and barks", () => {
    const dog = createDog("Rex");
    expect(dog.name).toBe("Rex");
    expect(dog.bark()).toBe("woof");
    expect(dog.eat()).toBe("nom");
  });
});

describe("Person", () => {
  it("greets by name", () => {
    expect(new Person("Ada").greet()).toBe("Hi Ada");
  });
});
