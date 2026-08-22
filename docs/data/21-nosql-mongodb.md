# 21 — NoSQL / MongoDB

## 1. Why it matters

Document databases appear in many Node stacks. Seniors know when *not* to use them and how embedding vs referencing works.

## 2. Core concepts

### Documents vs rows
MongoDB stores **BSON documents** in collections — flexible schemas, nested objects/arrays.

### Modeling
- **Embed** when data is read together and bounded in size.
- **Reference** (`ObjectId`) when shared, large, or independently queried.

### Indexes & queries
Create indexes on frequent filters. Use projection to limit fields. Aggregation **pipeline** for multi-stage transforms.

### Consistency
Single-document atomicity is strong; multi-document needs transactions (supported) or careful design. Replication and sharding for HA/scale.


## 3. Code examples

```js
// Conceptual
db.users.createIndex({ email: 1 }, { unique: true });
db.users.find({ age: { $gte: 21 } }, { email: 1, _id: 0 });
```


## 4. Gotchas / interview traps

- Unbounded array growth in embedded docs.
- Treating Mongo as a dump for relational data without access-pattern design.
- Missing indexes → collection scans.
- Assuming multi-doc updates are always atomic without transactions.


## 5. Resources

- [MongoDB Manual](https://www.mongodb.com/docs/manual/)


## 6. Self-check

1. **Q:** Document vs row?  
   **A:** Document is a flexible nested JSON-like record; row is fixed-schema tabular.

2. **Q:** Embed vs reference?  
   **A:** Embed for co-read bounded data; reference for shared/large/independent entities.

3. **Q:** Default primary key field?  
   **A:** `_id`.

4. **Q:** What is an aggregation pipeline?  
   **A:** Sequence of stages transforming documents.

5. **Q:** Unique email how?  
   **A:** Unique index on email.

6. **Q:** Single-document write atomic?  
   **A:** Yes.

7. **Q:** BSON?  
   **A:** Binary JSON storage format used by MongoDB.

8. **Q:** When prefer SQL instead?  
   **A:** Heavy relational constraints, complex joins, mature reporting.

9. **Q:** Sharding purpose?  
   **A:** Horizontal scale by partitioning data.

10. **Q:** Projection purpose?  
    **A:** Return only needed fields.


## 7. Practice

Model a blog (posts + comments) both embedded and referenced; list tradeoffs.
