---
editLink: false
---

# SpecDirInterface

`Chevere\Interfaces\Spec\SpecDirInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Spec/SpecDirInterface.php)

## Extends

- [ToStringInterface](../To/ToStringInterface.md)

## Description

Describes the component in charge of handling a spec path.

## Methods

### __construct()

#### Parameters

1. [DirInterface](../Filesystem/DirInterface.md) `$dir`

::: danger THROWS
- [InvalidArgumentException](../../Exceptions/Core/InvalidArgumentException.md) 
:::

---

### getChild()

Returns a child instance for the given `$childPath`.

#### Parameters

1. string `$childPath`

::: danger THROWS
- [InvalidArgumentException](../../Exceptions/Core/InvalidArgumentException.md) 
:::

::: tip RETURN
SpecDirInterface
:::

---

### toString()

Returns a string, representing the object itself or some of its data/properties.

::: tip RETURN
string
:::

---
