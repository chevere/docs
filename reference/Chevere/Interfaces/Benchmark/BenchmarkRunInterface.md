---
editLink: false
---

# BenchmarkRunInterface

`Chevere\Interfaces\Benchmark\BenchmarkRunInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Benchmark/BenchmarkRunInterface.php)

## Extends

- [ToStringInterface](../Common/ToStringInterface.md)

## Description

Describes the component in charge of running a Benchmark.

## Constants

### COLUMNS

Type `integer`

```php
50
```

## Methods

### __construct()

#### Parameters

1. [BenchmarkInterface](./BenchmarkInterface.md) `$benchmark`

---

### withTimes()

#### Parameters

1. int `$times`

::: tip RETURN
self
:::

---

### times()

::: tip RETURN
int
:::

---

### withTimeLimit()

#### Parameters

1. int `$timeLimit`

::: tip RETURN
self
:::

---

### timeLimit()

::: tip RETURN
int
:::

---

### exec()

::: tip RETURN
void
:::

---

### toString()

::: tip RETURN
string
:::

---
