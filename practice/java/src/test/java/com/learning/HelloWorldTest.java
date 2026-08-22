package com.learning;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

class HelloWorldTest {
  @Test
  void greetReturnsHello() {
    assertEquals("Hello, Shawn!", HelloWorld.greet("Shawn"));
  }
}
