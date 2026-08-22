/**
 * Implement a simple prototypal dog factory and a Person class with greet().
 */
export type Animal = { eat: () => string };

export function createDog(name: string): Animal & { name: string; bark: () => string } {
  throw new Error("not implemented");
}

export class Person {
  constructor(public name: string) {}
  greet(): string {
    throw new Error("not implemented");
  }
}
