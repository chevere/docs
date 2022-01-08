---
editLink: false
---

# RoutePathInterface

`Chevere\Interfaces\Router\Route\RoutePathInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/Router/Route/RoutePathInterface.php)

## Extends

- [ToStringInterface](../../Common/ToStringInterface.md)

## Description

Describes the component in charge of handling route paths.

## Methods

### __construct

::: warning Parameters
- *route*: string
:::

::: danger Throws
- [InvalidArgumentException](../../../Exceptions/Core/InvalidArgumentException.md) 
- [LogicException](../../../Exceptions/Core/LogicException.md) 
:::

---

### wildcards

Provides access to the wildcards instance.

::: tip Return
[WildcardsInterface](./WildcardsInterface.md)
:::

---

### regex

Provides access to the regex instance.

::: tip Return
[RegexInterface](../../Regex/RegexInterface.md)
:::

---

### toString

Returns a string, representing the object itself or some of its data/properties.

::: tip Return
string
:::

---
