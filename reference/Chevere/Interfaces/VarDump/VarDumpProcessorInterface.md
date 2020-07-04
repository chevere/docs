---
editLink: false
---

# VarDumpProcessorInterface

`Chevere\Interfaces\VarDump\VarDumpProcessorInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/VarDump/VarDumpProcessorInterface.php)

## Constants

### MAX_DEPTH

Type `integer`

```php
10
```

## Methods

### info()

Provides access to the instance info.

::: tip RETURN
string
:::

The information about the variable like `size=1` or `length=6`

---

### typeHighlighted()

::: tip RETURN
string
:::

---

### highlightOperator()

**Parameters**

1. string `$string`

::: tip RETURN
string
:::

---

### highlightParentheses()

**Parameters**

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

### type()

Provides access to the instance type.

::: tip RETURN
string
:::

The information about the variable type like `array` or `object`

---

### write()

::: tip RETURN
void
:::

---
