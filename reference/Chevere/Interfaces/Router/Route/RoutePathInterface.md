---
editLink: false
---

# RoutePathInterface

`Chevere\Interfaces\Router\Route\RoutePathInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Router/Route/RoutePathInterface.php)

## Extends

- [ToStringInterface](../../To/ToStringInterface.md)

## Description

Describes the component in charge of handling route paths.

## Methods

### __construct()

#### Parameters

1. string `$route`

::: danger THROWS
- [InvalidArgumentException](../../../Exceptions/Core/InvalidArgumentException.md) 
- [LogicException](../../../Exceptions/Core/LogicException.md) 
:::

---

### wildcards()

Provides access to the wildcards instance.

::: tip RETURN
[WildcardsInterface](./WildcardsInterface.md)
:::

---

### regex()

Provides access to the regex instance.

::: tip RETURN
[RegexInterface](../../Regex/RegexInterface.md)
:::

---

### name()

::: tip RETURN
string
:::

---

### toString()

Returns a string, representing the object itself or some of its data/properties.

::: tip RETURN
string
:::

---
