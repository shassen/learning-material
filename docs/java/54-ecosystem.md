# 54 — Java Ecosystem (Maven / JUnit / Spring)

## 1. Why it matters

Work Java is rarely “javac by hand.” You’ll use **Maven** (or Gradle), **JUnit 5**, and often **Spring Boot**.

## 2. Core concepts

### Maven

`pom.xml` declares coordinates (`groupId`, `artifactId`, `version`), dependencies, and plugins.

Lifecycle phases: `validate` → `compile` → `test` → `package` → `verify` → `install` → `deploy`.

```bash
mvn test
mvn -q package
```

### JUnit 5

```java
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class MathTest {
  @Test
  void adds() {
    assertEquals(2, 1 + 1);
  }
}
```

Annotations: `@Test`, `@BeforeEach`, `@ParameterizedTest`, etc.

### Spring Boot (intro)

Opinionated framework for production apps: **dependency injection**, auto-config, embedded server, starters.

```java
@RestController
class HelloController {
  @GetMapping("/hello")
  String hello() { return "hi"; }
}
```

`@SpringBootApplication`, `@Service`, `@Repository`, `@Autowired` / constructor injection (prefer constructor).

You do not need full Spring mastery on day one — understand DI and a REST controller.

## 3. Code examples

See `practice/java/pom.xml` and tests under `src/test/java`.

## 4. Gotchas / interview traps

- Field injection vs constructor injection (testing/immutability).
- Fat `Application` classes doing too much — keep controllers thin.
- Not writing tests for domain logic.
- Confusing Maven `install` (local repo) with deploying to a remote.

## 5. Resources

- [Spring Guides](https://spring.io/guides)
- [JUnit 5 User Guide](https://junit.org/junit5/docs/current/user-guide/)
- Maven docs via `mvn --help` and https://maven.apache.org/guides/

## 6. Self-check

1. **Q:** What is pom.xml?  
   **A:** Maven project descriptor: deps, plugins, coordinates.

2. **Q:** Command to run tests?  
   **A:** `mvn test`.

3. **Q:** JUnit 5 basic annotation?  
   **A:** `@Test`.

4. **Q:** What is dependency injection?  
   **A:** Framework provides collaborators instead of `new` inside the class.

5. **Q:** Prefer constructor or field injection?  
   **A:** Constructor injection.

6. **Q:** Spring Boot starter purpose?  
   **A:** Bundled dependencies/auto-config for a concern (web, data, etc.).

7. **Q:** @RestController combines?  
   **A:** `@Controller` + `@ResponseBody` (JSON by default).

8. **Q:** package vs install phase?  
   **A:** package builds artifact; install puts it in local `.m2` repo.

9. **Q:** Why automated tests?  
   **A:** Fast regression safety and living documentation.

10. **Q:** What is a bean in Spring?  
    **A:** An object managed by the Spring IoC container.

## 7. Practice

- `cd practice/java && mvn test` after installing JDK/Maven.
- Optional: follow Spring’s “Building a RESTful Web Service” guide.
- Anki: `anki/54-ecosystem.tsv`
