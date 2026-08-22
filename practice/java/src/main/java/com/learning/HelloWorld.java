package com.learning;

public class HelloWorld {
  public static String greet(String name) {
    return "Hello, " + name + "!";
  }

  public static void main(String[] args) {
    System.out.println(greet("Java"));
  }
}
