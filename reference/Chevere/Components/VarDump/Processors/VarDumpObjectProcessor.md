---
editLink: false
---

# VarDumpObjectProcessor

`Chevere\Components\VarDump\Processors\VarDumpObjectProcessor`

[view source](https://github.com/chevere/chevere/blob/master/VarDump/Processors/VarDumpObjectProcessor.php)

## Implements

- [VarDumpProcessorInterface](../../../Interfaces/VarDump/VarDumpProcessorInterface.md)

## Constants

### MAX_DEPTH

Type `integer`

```php
10
```

## Methods

### __construct()

#### Parameters

1. [VarDumperInterface](../../../Interfaces/VarDump/VarDumperInterface.md) `$varDumper`

---

### type()

::: tip RETURN
string
:::

---

### write()

::: tip RETURN
void
:::

---

### setProperties()

::: tip RETURN
void
:::

---

### processProperty()

#### Parameters

1. string `$name`
2. string `$modifiers`
3.  `$var`

::: tip RETURN
void
:::

---

### handleNormalizeClassName()

::: tip RETURN
void
:::

---

### info()

::: tip RETURN
string
:::

---

### typeHighlighted()

::: tip RETURN
string
:::

---

### highlightOperator()

#### Parameters

1. string `$string`

::: tip RETURN
string
:::

---

### highlightParentheses()

#### Parameters

1. string `$string`

::: tip RETURN
string
:::

---

### circularReference()

::: tip RETURN
string
:::

---

### maxDepthReached()

::: tip RETURN
string
:::

---

### assertType()

::: tip RETURN
void
:::

---
