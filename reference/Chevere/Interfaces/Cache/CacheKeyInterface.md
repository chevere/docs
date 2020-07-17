---
editLink: false
---

# CacheKeyInterface

`Chevere\Interfaces\Cache\CacheKeyInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Cache/CacheKeyInterface.php)

## Implements

- [ToStringInterface](../To/ToStringInterface.md)

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
- [CacheInvalidKeyException](../../Exceptions/Cache/CacheInvalidKeyException.md)
:::

---

### toString()

Provides access to `$key`.

::: tip RETURN
string
:::

---
