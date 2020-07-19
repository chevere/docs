---
editLink: false
---

# RouteWildcardMatchInterface

`Chevere\Interfaces\Route\RouteWildcardMatchInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Route/RouteWildcardMatchInterface.php)

## Implements

- [ToStringInterface](../To/ToStringInterface.md)

## Description

Describes the component in charge of defining a route wildcard match.

## Methods

### __construct()

#### Parameters

1. string `$string`

::: danger THROWS
- [RegexException](../../Exceptions/Regex/RegexException.md)
If `$string` is an invalid regex matcher.
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
