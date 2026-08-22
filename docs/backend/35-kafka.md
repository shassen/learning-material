# 35 — Apache Kafka

## 1. Why it matters

Kafka is the industry standard for event streaming: decoupling services, buffering load, and replayable logs.

## 2. Core concepts

### Topics & partitions
A **topic** is a named stream. It is split into **partitions** (ordered logs) for parallelism and scale.

### Producers & consumers
Producers append records. Consumers read records and track **offsets**.

### Consumer groups
A **consumer group** shares partitions — each partition consumed by one member of the group (scale consumers horizontally).

### Delivery semantics
At-most-once, at-least-once (common), exactly-once (more complex). Design consumers to be **idempotent** for at-least-once.

### Why Kafka
High throughput, durability, replay from offset, fan-out to multiple consumer groups.

## 3. Code examples

Conceptual pipeline:

`OrderService` → topic `orders.created` → `EmailService` + `AnalyticsService` (two consumer groups).

## 4. Gotchas / interview traps

- Treating Kafka like a ephemeral queue only (it's a log).
- Too few partitions → limited parallelism.
- Hot keys skewing one partition.
- Non-idempotent consumers + retries → duplicates.

## 5. Resources

- [Kafka Documentation](https://kafka.apache.org/documentation/)

## 6. Self-check

1. **Q:** What is a topic?  
   **A:** Named category/stream of records.

2. **Q:** What is a partition?  
   **A:** Ordered append-only log slice of a topic.

3. **Q:** What is an offset?  
   **A:** Position of a consumer in a partition.

4. **Q:** Consumer group purpose?  
   **A:** Parallel consumption with each partition assigned to one member.

5. **Q:** At-least-once meaning?  
   **A:** Records may be delivered more than once; no silent loss.

6. **Q:** Why idempotent consumers?  
   **A:** Safely handle duplicate deliveries.

7. **Q:** Can multiple groups read same topic?  
   **A:** Yes — independent offsets/fan-out.

8. **Q:** Ordering guarantee scope?  
   **A:** Within a partition, not across the whole topic.

9. **Q:** Producer key use?  
   **A:** Route related records to the same partition (ordering).

10. **Q:** Kafka vs simple queue?  
    **A:** Durable distributed log with replay and multi-subscriber groups.

## 7. Practice

Diagram order→email→analytics with topics and consumer groups. Anki: `anki/35-kafka.tsv`.
