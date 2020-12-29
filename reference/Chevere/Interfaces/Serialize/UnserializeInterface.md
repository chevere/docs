---
editLink: false
---

# UnserializeInterface

`Chevere\Interfaces\Serialize\UnserializeInterface`

[view source](https://github.com/chevere/chevere/blob/master/Serialize/UnserializeInterface.php)

## Description

Describes the component in charge of handling `unserialize()`.

## Methods

### __construct()

#### Parameters

1. string `$serialized`

::: danger THROWS
- [UnserializeException](../../Exceptions/Serialize/UnserializeException.md) 
:::

---

### var()

Provides access to the unserialize variable.

::: tip RETURN
void
:::

---

### type()

Provides access to the TypeInterface instance for the unserialize variable.

::: tip RETURN
[TypeInterface](../Type/TypeInterface.md)
:::

---
