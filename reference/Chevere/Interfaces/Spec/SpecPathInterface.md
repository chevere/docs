---
editLink: false
---

# SpecPathInterface

`Chevere\Interfaces\Spec\SpecPathInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Spec/SpecPathInterface.php)

## Implements

- [ToStringInterface](../To/ToStringInterface.md)

## Description

Describes the component in charge of handling a spec path.

## Methods

### __construct()

#### Parameters

1. string `$path`

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
SpecPathInterface
:::

---

### toString()

Returns a string, representing the object itself or some of its data/properties.

::: tip RETURN
string
:::

---
