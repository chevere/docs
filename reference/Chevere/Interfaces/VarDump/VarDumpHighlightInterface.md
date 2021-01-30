---
editLink: false
---

# VarDumpHighlightInterface

`Chevere\Interfaces\VarDump\VarDumpHighlightInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/VarDump/VarDumpHighlightInterface.php)

## Description

Describes the component in charge of highlight the var dump strings.

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

Constructs a highlight instance specified by `$key`.

**Parameters:**

- *key*: string

::: danger THROWS
- [OutOfRangeException](../../Exceptions/Core/OutOfRangeException.md) 
:::

---

### highlight()

Highlights `$string`.

**Parameters:**

- *string*: string

::: tip RETURN
string
:::

---

### palette()

Provide access to the color palette.

::: tip RETURN
array
:::

```php
return [
    'string' => '<color_for_string>',
    'float' => '<color_for_float>',
];
```

---
