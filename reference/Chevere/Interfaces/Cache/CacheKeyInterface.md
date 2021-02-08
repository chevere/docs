---
editLink: false
---

# CacheKeyInterface

`Chevere\Interfaces\Cache\CacheKeyInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/Cache/CacheKeyInterface.php)

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

### __construct

::: warning Parameters
- *key*: string
:::

::: danger Throws
- [InvalidArgumentException](../../Exceptions/Core/InvalidArgumentException.md) 
:::

---

### toString

Provides access to `$key`.

::: tip Return
string
:::

---
