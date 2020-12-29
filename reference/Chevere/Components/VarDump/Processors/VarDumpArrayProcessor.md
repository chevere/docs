---
editLink: false
---

# VarDumpArrayProcessor

`Chevere\Components\VarDump\Processors\VarDumpArrayProcessor`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Components/VarDump/Processors/VarDumpArrayProcessor.php)

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

### isCircularRef()

#### Parameters

1. array `$array`

::: tip RETURN
bool
:::

---

### processMembers()

::: tip RETURN
void
:::

---

### handleDepth()

#### Parameters

1.  `$var`

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
