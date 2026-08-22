# 13 — System Design Basics

## 1. Why it matters

Senior interviews include designing services: APIs, storage, **caching**, **load balancing**, and async processing with queues like **Kafka**.

## 2. Core concepts

### Clarify & estimate

Requirements (functional + non-functional), QPS, storage, latency targets. Draw clients → API → services → data stores.

### Scaling

- **Vertical**: bigger machine.
- **Horizontal**: more machines behind a **load balancer**.

Stateless app servers scale horizontally more easily than sticky stateful ones.

### Caching

CDN for static; Redis/Memcached for hot data. Patterns: cache-aside, write-through. Invalidate carefully (TTL, explicit purge).

### Databases

SQL for relational integrity; NoSQL for flexible documents/high write throughput (know tradeoffs). **Indexes**, sharding, replicas (read scale) vs multi-primary complexity.

### CAP / consistency

**CAP theorem**: under partition, choose consistency vs availability. Many systems are eventually consistent for availability.

### Queues & streams

Decouple producers/consumers; absorb spikes; enable retries. Kafka: topics, partitions, consumer groups, offsets (see Kafka doc).

### API design

REST or RPC/GraphQL; versioning; idempotency keys for payments; rate limiting; authn/authz.

## 3. Code examples

Not code-heavy — practice on a whiteboard:

**URL shortener sketch**

1. Client → API `POST /urls` → generate short id → store mapping in DB.
2. `GET /:id` → lookup → 302 redirect.
3. Scale reads with cache; analytics via async events to Kafka.

## 4. Gotchas / interview traps

- Jumping to tech without requirements.
- Single DB as SPOF with no backup/replica story.
- Ignoring idempotency for at-least-once queues.
- Over-designing for Google scale when the prompt is MVP.

## 5. Resources

- [roadmap.sh System Design](https://roadmap.sh/system-design)
- [Kafka Documentation](https://kafka.apache.org/documentation/)

## 6. Self-check

1. **Q:** Horizontal vs vertical scaling?  
   **A:** More machines vs bigger machine.

2. **Q:** Role of a load balancer?  
   **A:** Distribute traffic across instances.

3. **Q:** Cache-aside pattern?  
   **A:** App reads cache; on miss load DB and populate cache.

4. **Q:** CAP in one line?  
   **A:** Under network partition, trade consistency vs availability.

5. **Q:** Why use a message queue?  
   **A:** Decoupling, buffering, async workflows, retries.

6. **Q:** Stateless services benefit?  
   **A:** Easy horizontal scale; any instance can handle any request.

7. **Q:** Idempotency key use case?  
   **A:** Safe retries of create/payment without double charge.

8. **Q:** Read replica purpose?  
   **A:** Scale reads; failover options (with lag caveats).

9. **Q:** CDN purpose?  
   **A:** Cache static assets closer to users.

10. **Q:** What to ask first in system design?  
    **A:** Requirements, constraints, traffic, consistency needs.

## 7. Practice

- Design URL shortener, news feed, and chat at a high level; list bottlenecks.
- Anki: `anki/13-system-design-basics.tsv`
