# RouteWildcardInterface

`Chevere\Interfaces\Route\RouteWildcardInterface`

[view source](https://github.com/chevere/chevere/blob/master//home/rodolfo/git/chevere/chevere/interfaces/Route/RouteWildcardInterface.php)

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

- string `$name`

---

### withMatch()

> Return an instance with the specified WildcardMatchInterface.

This method MUST retain the state of the current instance, and return
an instance that contains the specified WildcardMatchInterface.

#### Parameters

- [RouteWildcardMatchInterface](./RouteWildcardMatchInterface.md) `$regexMatch`

#### Return

RouteWildcardInterface

---

### name()

> Provides access to the name.

#### Return

string

---

### toString()

> Provides access to the braced name `{name}`

#### Return

string

---

### match()

> Provides access to the WildcardMatchInterface instance.

#### Return

[RouteWildcardMatchInterface](./RouteWildcardMatchInterface.md)

---

### assertRoutePath()

> Asserts that a given RoutePathInterface contains the wildcard.

#### Parameters

- [RoutePathInterface](./RoutePathInterface.md) `$routePath`

#### Return

void

---

