---
editLink: false
---

# BenchmarkRun

`Chevere\Components\Benchmark\BenchmarkRun`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Components/Benchmark/BenchmarkRun.php)

## Implements

- [BenchmarkRunInterface](../../Interfaces/Benchmark/BenchmarkRunInterface.md)
- [ToStringInterface](../../Interfaces/Common/ToStringInterface.md)

## Description



## Constants

### COLUMNS

Type `integer`

```php
50
```

## Methods

### __construct()

**Parameters:**

- *benchmark*: [BenchmarkInterface](../../Interfaces/Benchmark/BenchmarkInterface.md)

::: danger THROWS
- [ArgumentCountException](../../Exceptions/Core/ArgumentCountException.md) if the argument count doesn't match the callable parameters
- [TypeException](../../Exceptions/Core/TypeException.md) if the argument types doesn't match
:::

---

### withRequestTime()

**Parameters:**

- *time*: float

::: tip RETURN
self
:::

---

### withTimes()

**Parameters:**

- *times*: int

::: tip RETURN
[BenchmarkRunInterface](../../Interfaces/Benchmark/BenchmarkRunInterface.md)
:::

---

### times()

::: tip RETURN
int
:::

---

### withTimeLimit()

**Parameters:**

- *timeLimit*: int

::: tip RETURN
[BenchmarkRunInterface](../../Interfaces/Benchmark/BenchmarkRunInterface.md)
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
