---
editLink: false
---

# RouteNameInterface

`Chevere\Interfaces\Router\Route\RouteNameInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Router/Route/RouteNameInterface.php)

## Extends

- [ToStringInterface](../../To/ToStringInterface.md)

## Description

Describes the component in charge of defining a route name.

## Constants

### REGEX

Type `string`

```php
'/^([\\w\\-]+)\\:(\\/.+\\/|\\/)$/i'
```

## Methods

### __construct()

#### Parameters

1. string `$name`

::: danger THROWS
- [RouteNameInvalidException](../../../Exceptions/Router/Route/RouteNameInvalidException.md) if `$name` doesn't match `self::REGEX`
:::

---

### repository()

::: tip RETURN
string
:::

---

### path()

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
