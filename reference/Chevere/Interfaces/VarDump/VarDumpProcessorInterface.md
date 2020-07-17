---
editLink: false
---

# VarDumpProcessorInterface

`Chevere\Interfaces\VarDump\VarDumpProcessorInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/VarDump/VarDumpProcessorInterface.php)

## Description

Describes the component in charge of processing a variable of a known type.

## Constants

### MAX_DEPTH

Type `integer`

```php
10
```

## Methods

### __construct()

#### Parameters

1. [VarDumperInterface](./VarDumperInterface.md) `$varDumper`

::: danger THROWS
- ⚠ Unknown type `InvalidArgumentException` declared in `@throws` tag`
:::

---

### type()

Provides the variable type (primitive).

::: tip RETURN
string
:::

---

### info()

Provides info about the variable like `size=1`, `length=6`, 'Object #id'

::: tip RETURN
string
:::

---

### typeHighlighted()

Provides a highlighted type.

::: tip RETURN
string
:::

---

### highlightOperator()

Highlights the given operator `$string`.

#### Parameters

1. string `$string`

::: tip RETURN
string
:::

---

### highlightParentheses()

Highlights and wraps in parentheses the given `$string`.

#### Parameters

1. string `$string`

::: tip RETURN
string
:::

---

### circularReference()

Provides the `*circular reference*` flag.

::: tip RETURN
string
:::

---

### maxDepthReached()

Provides the `*max depth reached*` flag.

::: tip RETURN
string
:::

---

### write()

Write the dump to the stream.

::: tip RETURN
void
:::

---
