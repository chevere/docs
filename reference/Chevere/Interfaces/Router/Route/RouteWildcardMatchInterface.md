---
editLink: false
---

# RouteWildcardMatchInterface

`Chevere\Interfaces\Router\Route\RouteWildcardMatchInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Router/Route/RouteWildcardMatchInterface.php)

## Extends

- [ToStringInterface](../../Common/ToStringInterface.md)

## Description

Describes the component in charge of defining a route wildcard match.

## Methods

### __construct()

#### Parameters

1. string `$string`

::: danger THROWS
- [UnexpectedValueException](../../../Exceptions/Core/UnexpectedValueException.md) If `$string` is an invalid regex matcher.
:::

---

### toAnchored()

Same as `toString` but with starting `^` and ending `$`.

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
