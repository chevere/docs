---
editLink: false
---

# RoutePathInterface

`Chevere\Interfaces\Route\RoutePathInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Route/RoutePathInterface.php)

## Implements

- [ToStringInterface](../To/ToStringInterface.md)

## Description

Describes the component in charge of handling route paths.

## Methods

### __construct()

#### Parameters

1. string `$path`

::: danger THROWS
- [InvalidArgumentException](../../Exceptions/Core/InvalidArgumentException.md)
:::

---

### wildcards()

Provides access to the wildcards instance.

::: tip RETURN
[RouteWildcardsInterface](./RouteWildcardsInterface.md)
:::

---

### regex()

Provides access to the regex instance.

::: tip RETURN
[RegexInterface](../Regex/RegexInterface.md)
:::

---

### toString()

Returns a string, representing the object itself or some of its data/properties.

::: tip RETURN
string
:::

---
