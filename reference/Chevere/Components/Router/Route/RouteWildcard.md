---
editLink: false
---

# RouteWildcard

`Chevere\Components\Router\Route\RouteWildcard`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Components/Router/Route/RouteWildcard.php)

## Implements

- [RouteWildcardInterface](../../../Interfaces/Router/Route/RouteWildcardInterface.md)
- [ToStringInterface](../../../Interfaces/Common/ToStringInterface.md)

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
- *match*: [RouteWildcardMatchInterface](../../../Interfaces/Router/Route/RouteWildcardMatchInterface.md)
:::

---

### toString

::: tip Return
string
:::

---

### match

::: tip Return
[RouteWildcardMatchInterface](../../../Interfaces/Router/Route/RouteWildcardMatchInterface.md)
:::

---
