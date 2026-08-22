package com.learning;

import java.util.HashMap;
import java.util.Map;

public class WordCount {
  public static Map<String, Integer> count(String[] words) {
    Map<String, Integer> counts = new HashMap<>();
    for (String w : words) {
      counts.merge(w, 1, Integer::sum);
    }
    return counts;
  }
}
