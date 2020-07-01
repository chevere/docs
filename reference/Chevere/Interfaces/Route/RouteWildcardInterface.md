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

---

### withMatch()

Return an instance with the specified WildcardMatchInterface.

**Parameters**

1. [RouteWildcardMatchInterface](./RouteWildcardMatchInterface.md) `$regexMatch`

::: danger THROWS
[RouteWildcardInvalidRegexException](../../Exceptions/Route/RouteWildcardInvalidRegexException.md)
if $match is an invalid regex match
:::

::: tip RETURN
RouteWildcardInterface
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified WildcardMatchInterface.

---

### name()

Provides access to the name.

::: tip RETURN
string
:::

---

### toString()

Provides access to the braced name `{name}`

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

### assertRoutePath()

Asserts that a given RoutePathInterface contains the wildcard.

**Parameters**

1. [RoutePathInterface](./RoutePathInterface.md) `$routePath`

::: danger THROWS
[RouteWildcardNotFoundException](../../Exceptions/Route/RouteWildcardNotFoundException.md)
if the wildcard doesn't exists in the path
:::

::: tip RETURN
void
:::

---
