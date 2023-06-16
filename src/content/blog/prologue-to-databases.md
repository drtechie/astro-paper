---
title: 01. Prologue to Databases
author: Mithun James
pubDatetime: 2023-06-15T10:00:00Z
postSlug: prologue-to-databases
featured: true
draft: false
tags:
  - databases
  - scalingup
description: A prologue to understanding how data is structured and organized in the databases before we delve into advanced topics. We will be focussing on PostgreSQL.
---

If you are planning a career in software development as a backend or a full-stack engineer, understanding how databases work and how to write efficient SQL queries will give you a good headstart in developing systems that will scale. In this database engineering series written by [Sawali](https://www.linkedin.com/in/sawali-kale/) & me, we will delve into some concepts and general guidelines that can be followed to architect efficient data querying.

Here are links to all the articles in this series:

- [02. Database Indexes](#)
- [03. Understanding query planning](#)
- [04. Partitioning](#)
- [05. Sharding](#)
- [06. ACID](#)
- [07. Database types](#)
- [08. Transactions and concurrency](#)
- [09. Learnings from Sawali](#)
- [10. Learnings from me](#)

We will cover the above topics with example code.
Setting up PostgreSQL is beyond the scope of these articles.
However, if you have docker, the following command can quickly spin up a Postgres instance.

```bash
docker run -e POSTGRES_PASSWORD=password -d -p 5432:5432 --name postgres postgres
docker exec -it postgres psql -U postgres
```

## Terminology

Once you have understood how data is stored, indexed and organized by PostgreSQL, it becomes easier to figure out why certain SQL queries return results faster than others.
Here are some building blocks of Postgres - some terms to have knowledge of to understand the upcoming articles.

### Items

In a relational database system, we always prepare entities with certain attributes.
An item is a single attribute of the row. For example, an employee John Doe can have a `salary` of 10_000.
The salary is an attribute or item. A set of attributes or items are combined together to make a `row` or `tuple`.
The sequence in which items are saved within a row is dependent on the schema of the table.

![An item that has an attribute value](/assets/db/item.png "An item that has an attribute value")

### Tuples

A relational database system contains tables. A table has attributes and rows. A tuple also known as a row is a group of attribute values of the table.
For example, a table that has `(name, age, salary)` as attributes can have `(John Doe, 30, 10_000)` as a tuple or row.
`(Mithun, 30, INT_MAX)` is another tuple.
Each row or tuple is assigned a `row_id` by the DBMS.

![A tuple is a group of items](/assets/db/tuple.png "A tuple is a group of items")

### Pages

PostgreSQL stores data in multiple `blocks`. Each block has a size of 8KB.
These blocks are otherwise called `pages`. The pages contain multiple tuples/rows.
The amount of tuples that a page can hold depends on the size of the tuple.
A page consists of a header and data region.
The tuples are written from bottom to left in a page's data region.
The header holds the information of identifiers that point to each tuple.

![Page layout](/assets/db/page.png "Page layout")

### Heap

PostgreSQL organizes data in files called heaps.
A heap or `heap file` contains pages as their building blocks.
There is no hierarchy or ordering of pages within the heap. A tuple is written to the next free space or freshly allocated page.

![Heap layout](/assets/db/heap.png "Heap layout")

Finally, a table will have data stored in heaps. Optionally the table can have indexes that point to rows in the heap.
Postgres will look at the index if present and the heap where rows are present in pages to fetch results when a SQL query runs.

The relationship between tuples, heaps, and pages is important for understanding how PostgreSQL stores data.
By understanding this relationship, you can better understand how PostgreSQL queries work and how to optimize your queries for performance.

Next, we will learn about database indexes and how they improve query performance.
Click here to read.
