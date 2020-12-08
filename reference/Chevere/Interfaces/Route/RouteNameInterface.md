---
editLink: false
---

# RouteNameInterface

`Chevere\Interfaces\Route\RouteNameInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Route/RouteNameInterface.php)

## Extends

- [ToStringInterface](../To/ToStringInterface.md)

## Description

Describes the component in charge of defining a route name.

## Constants

### REGEX

Type `string`

```php
'/^[\\w\\-\\.]+$/i'
```

## Methods

### __construct()

#### Parameters

1. string `$name`

::: danger THROWS
- [StrAssertException](../../Exceptions/Str/StrAssertException.md) If `$name` is empty or if it is ctype-space.
- [RouteNameInvalidException](../../Exceptions/Route/RouteNameInvalidException.md) if `$name` doesn't match `self::REGEX`
:::

---

### toString()

Returns a string, representing the object itself or some of its data/properties.

::: tip RETURN
string
:::

---
