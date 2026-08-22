package com.learning;

import org.junit.jupiter.api.Test;
import java.util.Map;
import static org.junit.jupiter.api.Assertions.assertEquals;

class WordCountTest {
  @Test
  void countsWords() {
    Map<String, Integer> m = WordCount.count(new String[] {"a", "b", "a"});
    assertEquals(2, m.get("a"));
    assertEquals(1, m.get("b"));
  }
}
