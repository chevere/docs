---
editLink: false
---

# RouteWildcardInterface

`Chevere\Interfaces\Route\RouteWildcardInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Route/RouteWildcardInterface.php)

## Implements

- [ToStringInterface](../To/ToStringInterface.md)

## Description

Describes the component in charge of defining a route wildcard.

## Constants

### REGEX_MATCH_DEFAULT

Type `string`

```php
'[A-z0-9\\_\\-\\%]+'
```

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

#### Parameters

1. string `$name`
2. [RouteWildcardMatchInterface](./RouteWildcardMatchInterface.md) `$match`

::: danger THROWS
- [RouteWildcardInvalidException](../../Exceptions/Route/RouteWildcardInvalidException.md)
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
