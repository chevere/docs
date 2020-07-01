---
editLink: false
---

# RoutePathInterface

`Chevere\Interfaces\Route\RoutePathInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Route/RoutePathInterface.php)

## Implements

- [ToStringInterface](../To/ToStringInterface.md)

## Constants

### REGEX_DELIMITER_CHAR

Type `string`

```php
'/'
```

### REGEX_WILDCARD_SEARCH

Type `string`

```php
'/{([a-z\\_][\\w_]*?)}/i'
```

### ILLEGAL_CHARS

Type `array`

```php
array (
  '//' => 'extra-slashes',
  '\\' => 'backslash',
  '{{' => 'double-braces',
  '}}' => 'double-braces',
  ' ' => 'whitespace',
)
```

## Methods

### __construct()

**Parameters**

1. string `$path`

::: danger THROWS
[RoutePathForwardSlashException](../../Exceptions/Route/RoutePathForwardSlashException.md)
if $path doesn't start with forward slash
:::

::: danger THROWS
[RoutePathInvalidCharsException](../../Exceptions/Route/RoutePathInvalidCharsException.md)
if $path contains invalid chars
:::

::: danger THROWS
[RoutePathUnmatchedBracesException](../../Exceptions/Route/RoutePathUnmatchedBracesException.md)
if $path contains unmatched braces (must be paired)
:::

::: danger THROWS
[RoutePathUnmatchedWildcardsException](../../Exceptions/Route/RoutePathUnmatchedWildcardsException.md)
if $path contains wildcards that don't match the number of braces
:::

::: danger THROWS
[RouteWildcardReservedException](../../Exceptions/Route/RouteWildcardReservedException.md)
if $path contains reserved wildcards
:::

::: danger THROWS
[RouteWildcardRepeatException](../../Exceptions/Route/RouteWildcardRepeatException.md)
if $path contains repeated wildcards
:::

---

### toString()

::: tip RETURN
string
:::

---

### key()

Provides access to the key string, which is a representation of the path
with placeholders converting `/api/articles/{wildcard}` to `/api/articles/{0}`

::: tip RETURN
string
:::

---

### regex()

::: tip RETURN
[RegexInterface](../Regex/RegexInterface.md)
:::

---

### wildcards()

Provides access to the RouteWildcardsInterface instance.

::: tip RETURN
[RouteWildcardsInterface](./RouteWildcardsInterface.md)
:::

---

### withWildcard()

Return an instance with the specified WildcardInterface.

**Parameters**

1. [RouteWildcardInterface](./RouteWildcardInterface.md) `$wildcard`

::: tip RETURN
RoutePathInterface
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified WildcardInterface.

---

### uriFor()

Provide a request uri for the given wildcards.

**Parameters**

1. array `$wildcards`

::: tip RETURN
string
:::

---
