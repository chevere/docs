---
editLink: false
---

# FilenameInterface

`Chevere\Interfaces\Filesystem\FilenameInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/Filesystem/FilenameInterface.php)

## Description

Describes the component in charge of providing filename handling.

## Constants

### MAX_LENGTH_BYTES

Type `integer`

```php
255
```

## Methods

### __construct

::: warning Parameters
- *basename*: string
:::

::: danger Throws
- [InvalidArgumentException](../../Exceptions/Core/InvalidArgumentException.md) if $basename is invalid string
- [LengthException](../../Exceptions/Core/LengthException.md) if $basename exceed MAX_LENGTH_BYTES
:::

---

### toString

::: tip Return
string
:::

---

### extension

::: tip Return
string
:::

---

### name

::: tip Return
string
:::

---
