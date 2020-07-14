---
editLink: false
---

# RouteWildcardInterface

`Chevere\Interfaces\Route\RouteWildcardInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Route/RouteWildcardInterface.php)

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

**Parameters**

1. string `$name`
2. [RouteWildcardMatchInterface](./RouteWildcardMatchInterface.md) `$match`

---

### name()

Provides access to the name.

::: tip RETURN
string
:::

---

### match()

Provides access to the WildcardMatchInterface instance.

::: tip RETURN
[RouteWildcardMatchInterface](./RouteWildcardMatchInterface.md)
:::

---
