---
editLink: false
---

# VarDumpProcessorInterface

`Chevere\Interfaces\VarDump\VarDumpProcessorInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/VarDump/VarDumpProcessorInterface.php)

## Description

Describes the component in charge of processing a variable of a known type.

## Constants

### MAX_DEPTH

Type `integer`

```php
10
```

## Methods

### __construct

::: warning Parameters
- *varDumper*: [VarDumperInterface](./VarDumperInterface.md)
:::

::: danger Throws
- [InvalidArgumentException](../../Exceptions/Core/InvalidArgumentException.md) 
:::

---

### type

Provides the variable type (primitive).

::: tip Return
string
:::

---

### info

Provides info about the variable like `size=1`, `length=6`, 'Object #id'

::: tip Return
string
:::

---

### typeHighlighted

Provides a highlighted type.

::: tip Return
string
:::

---

### highlightOperator

Highlights the given operator `$string`.

::: warning Parameters
- *string*: string
:::

::: tip Return
string
:::

---

### highlightParentheses

Highlights and wraps in parentheses the given `$string`.

::: warning Parameters
- *string*: string
:::

::: tip Return
string
:::

---

### circularReference

Provides the `*circular reference*` flag.

::: tip Return
string
:::

---

### maxDepthReached

Provides the `*max depth reached*` flag.

::: tip Return
string
:::

---

### write

Write the dump to the stream.

::: tip Return
void
:::

---
