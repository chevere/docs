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

#### Parameters

1. [BenchmarkInterface](../../Interfaces/Benchmark/BenchmarkInterface.md) `$benchmark`

::: danger THROWS
- [ArgumentCountException](../../Exceptions/Core/ArgumentCountException.md) if the argument count doesn't match the callable parameters
- [TypeException](../../Exceptions/Core/TypeException.md) if the argument types doesn't match
:::

---

### withRequestTime()

#### Parameters

1. float `$time`

::: tip RETURN
self
:::

---

### withTimes()

#### Parameters

1. int `$times`

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

#### Parameters

1. int `$timeLimit`

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

### handleCallables()

::: tip RETURN
void
:::

---

### runCallableAt()

#### Parameters

1. int `$pos`

::: tip RETURN
void
:::

---

### getErrorMessage()

#### Parameters

1. string `$name`
2. string `$message`

::: tip RETURN
[MessageInterface](../../Interfaces/Message/MessageInterface.md)
:::

---

### processCallableStats()

::: tip RETURN
void
:::

---

### processResults()

::: tip RETURN
void
:::

---

### handleAborted()

::: tip RETURN
void
:::

---

### getResultTitle()

#### Parameters

1. string `$name`

::: tip RETURN
string
:::

---

### canSelfKeepGoing()

::: tip RETURN
bool
:::

---

### canPHPKeepGoing()

::: tip RETURN
bool
:::

---
