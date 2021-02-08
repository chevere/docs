---
editLink: false
---

# BenchmarkRun

`Chevere\Components\Benchmark\BenchmarkRun`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Components/Benchmark/BenchmarkRun.php)

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

### __construct

::: warning Parameters
- *benchmark*: [BenchmarkInterface](../../Interfaces/Benchmark/BenchmarkInterface.md)
:::

::: danger Throws
- [ArgumentCountException](../../Exceptions/Core/ArgumentCountException.md) if the argument count doesn't match the callable parameters
- [TypeException](../../Exceptions/Core/TypeException.md) if the argument types doesn't match
:::

---

### withRequestTime

::: warning Parameters
- *time*: float
:::

::: tip Return
self
:::

---

### withTimes

::: warning Parameters
- *times*: int
:::

::: tip Return
[BenchmarkRunInterface](../../Interfaces/Benchmark/BenchmarkRunInterface.md)
:::

---

### times

::: tip Return
int
:::

---

### withTimeLimit

::: warning Parameters
- *timeLimit*: int
:::

::: tip Return
[BenchmarkRunInterface](../../Interfaces/Benchmark/BenchmarkRunInterface.md)
:::

---

### timeLimit

::: tip Return
int
:::

---

### exec

::: tip Return
void
:::

---

### toString

::: tip Return
string
:::

---
