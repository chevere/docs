---
editLink: false
---

# VarDumpHighlightInterface

`Chevere\Interfaces\VarDump\VarDumpHighlightInterface`

[view source](https://github.com/chevere/chevere/blob/master/VarDump/VarDumpHighlightInterface.php)

## Description

Describes the component in charge of highlight the var dump strings.

## Constants

### KEYS

Type `array`

```php
array (
  0 => 'string',
  1 => 'float',
  2 => 'integer',
  3 => 'boolean',
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

#### Parameters

1. string `$key`

::: danger THROWS
- [OutOfRangeException](../../Exceptions/Core/OutOfRangeException.md) 
:::

---

### highlight()

Highlights `$string`.

#### Parameters

1. string `$string`

::: tip RETURN
string
:::

---

### pallet()

Provide access to the color pallet.

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
