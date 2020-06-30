# RoutePathInterface

`Chevere\Interfaces\Route\RoutePathInterface`

[view source](https://github.com/chevere/chevere/blob/master//home/rodolfo/git/chevere/chevere/interfaces/Route/RoutePathInterface.php)

## Extends

- [ToStringInterface]()

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

#### Parameters

- string `$path`

---

### toString()

#### Return

string

---

### key()

> Provides access to the key string, which is a representation of the path
with placeholders converting `/api/articles/{wildcard}` to `/api/articles/{0}`

#### Return

string

---

### regex()

#### Return

[RegexInterface](../Regex/RegexInterface.md)

---

### wildcards()

> Provides access to the RouteWildcardsInterface instance.

#### Return

[RouteWildcardsInterface](./RouteWildcardsInterface.md)

---

### withWildcard()

> Return an instance with the specified WildcardInterface.

This method MUST retain the state of the current instance, and return
an instance that contains the specified WildcardInterface.

#### Parameters

- [RouteWildcardInterface](./RouteWildcardInterface.md) `$wildcard`

#### Return

RoutePathInterface

---

### uriFor()

> Provide a request uri for the given wildcards.

#### Parameters

- array `$wildcards`

#### Return

string

---

