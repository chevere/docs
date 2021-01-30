---
editLink: false
---

# RouteWildcardInterface

`Chevere\Interfaces\Router\Route\RouteWildcardInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Router/Route/RouteWildcardInterface.php)

## Extends

- [ToStringInterface](../../Common/ToStringInterface.md)

## Description

Describes the component in charge of defining a route wildcard.

## Constants

### ACCEPT_CHARS

Type `string`

```php
'([a-z\\_][\\w_]*?)'
```

### ACCEPT_CHARS_REGEX

Type `string`

```php
'/^([a-z\\_][\\w_]*?)+$/i'
```

## Methods

### __construct()

**Parameters:**

- *name*: string
- *match*: [RouteWildcardMatchInterface](./RouteWildcardMatchInterface.md)

::: danger THROWS
- [RouteWildcardInvalidException](../../../Exceptions/Router/Route/RouteWildcardInvalidException.md) 
:::

---

### match()

Provides access to the match instance.

::: tip RETURN
[RouteWildcardMatchInterface](./RouteWildcardMatchInterface.md)
:::

---

### toString()

Returns a string, representing the object itself or some of its data/properties.

::: tip RETURN
string
:::

---
