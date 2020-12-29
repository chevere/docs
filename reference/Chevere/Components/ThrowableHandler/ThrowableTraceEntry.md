---
editLink: false
---

# ThrowableTraceEntry

`Chevere\Components\ThrowableHandler\ThrowableTraceEntry`

[view source](https://github.com/chevere/chevere/blob/master/ThrowableHandler/ThrowableTraceEntry.php)

## Implements

- [ThrowableTraceEntryInterface](../../Interfaces/ThrowableHandler/ThrowableTraceEntryInterface.md)

## Constants

### KEYS

Type `array`

```php
array (
  0 => 'file',
  1 => 'line',
  2 => 'function',
  3 => 'class',
  4 => 'type',
)
```

### MUST_HAVE_KEYS

Type `array`

```php
array (
  0 => 'function',
)
```

## Methods

### __construct()

#### Parameters

1. array `$entry`

---

### file()

::: tip RETURN
string
:::

---

### line()

::: tip RETURN
int
:::

---

### fileLine()

::: tip RETURN
string
:::

---

### function()

::: tip RETURN
string
:::

---

### class()

::: tip RETURN
string
:::

---

### type()

::: tip RETURN
string
:::

---

### args()

::: tip RETURN
array
:::

---

### assertEntry()

::: tip RETURN
void
:::

---

### processEntry()

::: tip RETURN
void
:::

---

### handleMissingClassFile()

::: tip RETURN
void
:::

---

### handleAnonClass()

::: tip RETURN
void
:::

---
