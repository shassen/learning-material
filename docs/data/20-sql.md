# 20 — SQL

## 1. Why it matters

SQL is required for almost every backend role. Joins, indexes, and transactions are interview staples.

## 2. Core concepts

### CRUD & SELECT
`SELECT`, `WHERE`, `ORDER BY`, `LIMIT`, aggregates (`COUNT`, `SUM`, `GROUP BY`, `HAVING`).

### JOINs
- **INNER JOIN**: matching rows only.
- **LEFT JOIN**: all left rows + matches (NULL if none).
- RIGHT/FULL less common in some engines.

### Indexes
B-tree indexes speed lookups/filters/joins; cost writes and storage. Know **covering indexes** and when indexes are unused (e.g. leading-wildcard `LIKE '%x'`).

### Transactions & ACID
**Atomicity, Consistency, Isolation, Durability**. `BEGIN`/`COMMIT`/`ROLLBACK`. Isolation levels trade anomalies vs throughput.

### Normalization
Reduce redundancy (1NF/2NF/3NF awareness). Sometimes denormalize for read performance.


## 3. Code examples

```sql
SELECT u.email, COUNT(o.id) AS order_count
FROM users u
LEFT JOIN orders o ON o.user_id = u.id
WHERE u.created_at >= DATE '2024-01-01'
GROUP BY u.email
HAVING COUNT(o.id) > 0
ORDER BY order_count DESC;
```


## 4. Gotchas / interview traps

- Selecting `*` in production APIs.
- N+1 queries from ORMs (see Prisma).
- Missing index on foreign keys used in joins.
- Assuming READ COMMITTED prevents all anomalies.


## 5. Resources

- [Use The Index, Luke](https://use-the-index-luke.com/)
- [PostgreSQL docs](https://www.postgresql.org/docs/)


## 6. Self-check

1. **Q:** INNER vs LEFT JOIN?  
   **A:** INNER keeps matches only; LEFT keeps all left rows.

2. **Q:** What does GROUP BY do?  
   **A:** Aggregates rows sharing the same group key.

3. **Q:** ACID stands for?  
   **A:** Atomicity, Consistency, Isolation, Durability.

4. **Q:** Why index a column?  
   **A:** Speed filters/joins/lookups at write/storage cost.

5. **Q:** HAVING vs WHERE?  
   **A:** WHERE filters rows before grouping; HAVING filters groups.

6. **Q:** Primary vs foreign key?  
   **A:** PK uniquely identifies row; FK references another table's key.

7. **Q:** What is a covering index?  
   **A:** Index that can satisfy a query without hitting the table heap.

8. **Q:** Transaction rollback meaning?  
   **A:** Undo uncommitted changes in the transaction.

9. **Q:** EXPLAIN purpose?  
   **A:** Show the query plan (index use, scans, joins).

10. **Q:** Normalization goal?  
    **A:** Reduce redundant data and update anomalies.


## 7. Practice

Design a users/orders schema; write the join above; sketch indexes.
