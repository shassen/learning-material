package com.learning;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

class FizzBuzzTest {
  @Test
  void examples() {
    assertEquals("1", FizzBuzz.fizzBuzz(1));
    assertEquals("Fizz", FizzBuzz.fizzBuzz(3));
    assertEquals("Buzz", FizzBuzz.fizzBuzz(5));
    assertEquals("FizzBuzz", FizzBuzz.fizzBuzz(15));
  }
}
