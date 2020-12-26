---
editLink: false
---

# CacheKeyInterface

`Chevere\Interfaces\Cache\CacheKeyInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Cache/CacheKeyInterface.php)

## Extends

- [ToStringInterface](../Common/ToStringInterface.md)

## Description

Describes the component in charge of defining a cache key.

## Constants

### ILLEGAL_KEY_CHARACTERS

Type `string`

```php
'\\.\\/\\\\~\\:'
```

## Methods

### __construct()

#### Parameters

1. string `$key`

::: danger THROWS
- [InvalidArgumentException](../../Exceptions/Core/InvalidArgumentException.md) 
:::

---

### toString()

Provides access to `$key`.

::: tip RETURN
string
:::

---
