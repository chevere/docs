---
editLink: false
---

# BasenameInterface

`Chevere\Interfaces\Filesystem\BasenameInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/Filesystem/BasenameInterface.php)

## Description

Describes the component in charge of providing basename handling.

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
