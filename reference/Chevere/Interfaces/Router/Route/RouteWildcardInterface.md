---
editLink: false
---

# RouteWildcardInterface

`Chevere\Interfaces\Router\Route\RouteWildcardInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/Router/Route/RouteWildcardInterface.php)

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

### __construct

::: warning Parameters
- *name*: string
- *match*: [RouteWildcardMatchInterface](./RouteWildcardMatchInterface.md)
:::

::: danger Throws
- [RouteWildcardInvalidException](../../../Exceptions/Router/Route/RouteWildcardInvalidException.md) 
:::

---

### match

Provides access to the match instance.

::: tip Return
[RouteWildcardMatchInterface](./RouteWildcardMatchInterface.md)
:::

---

### toString

Returns a string, representing the object itself or some of its data/properties.

::: tip Return
string
:::

---
