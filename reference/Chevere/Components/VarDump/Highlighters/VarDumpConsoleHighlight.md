---
editLink: false
---

# VarDumpConsoleHighlight

`Chevere\Components\VarDump\Highlighters\VarDumpConsoleHighlight`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Components/VarDump/Highlighters/VarDumpConsoleHighlight.php)

## Implements

- [VarDumpHighlightInterface](../../../Interfaces/VarDump/VarDumpHighlightInterface.md)

## Constants

### KEYS

Type `array`

```php
array (
  0 => 'string',
  1 => 'float',
  2 => 'int',
  3 => 'bool',
  4 => 'null',
  5 => 'object',
  6 => 'array',
  7 => 'resource',
  8 => '_file',
  9 => '_class',
  10 => '_operator',
  11 => '_function',
  12 => '_modifiers',
  13 => '_variable',
  14 => '_emphasis',
)
```

## Methods

### __construct()

#### Parameters

1. string `$key`

---

### highlight()

#### Parameters

1. string `$dump`

::: tip RETURN
string
:::

---

### palette()

::: tip RETURN
array
:::

---

### assertKey()

#### Parameters

1. string `$key`

::: tip RETURN
void
:::

---
