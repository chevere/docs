---
editLink: false
---

# RouteWildcard

`Chevere\Components\Router\Route\RouteWildcard`

[view source](https://github.com/chevere/chevere/blob/master/Router/Route/RouteWildcard.php)

## Implements

- [RouteWildcardInterface](../../../Interfaces/Router/Route/RouteWildcardInterface.md)
- [ToStringInterface](../../../Interfaces/Common/ToStringInterface.md)

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
2. [RouteWildcardMatchInterface](../../../Interfaces/Router/Route/RouteWildcardMatchInterface.md) `$match`

---

### toString()

::: tip RETURN
string
:::

---

### match()

::: tip RETURN
[RouteWildcardMatchInterface](../../../Interfaces/Router/Route/RouteWildcardMatchInterface.md)
:::

---

### assertName()

::: tip RETURN
void
:::

---