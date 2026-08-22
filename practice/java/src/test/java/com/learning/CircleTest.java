package com.learning;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

class CircleTest {
  @Test
  void area() {
    Shape s = new Circle(1);
    assertEquals(Math.PI, s.area(), 1e-9);
  }
}
