---
editLink: false
---

# RouteIdentifierInterface

`Chevere\Interfaces\Router\RouteIdentifierInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Router/RouteIdentifierInterface.php)

## Extends

- [ToArrayInterface](../To/ToArrayInterface.md)

## Description

Describes the component in charge of describing the route identifier.

## Methods

### __construct()

#### Parameters

1. string `$group`
2. string `$name`

::: danger THROWS
- [InvalidArgumentException](../../Exceptions/Core/InvalidArgumentException.md) 
:::

---

### group()

Provides access to the `$group` instance.

::: tip RETURN
string
:::

---

### name()

Provides access to the `$name` instance.

::: tip RETURN
string
:::

---

### toArray()

Returns an array, representing the object itself or some of its data/properties.

::: tip RETURN
array
:::

---
