---
editLink: false
---

# CacheItemInterface

`Chevere\Interfaces\Cache\CacheItemInterface`

[view source](https://github.com/chevere/chevere/blob/master/Cache/CacheItemInterface.php)

## Description

Describes the component that defines a cache item.

## Methods

### __construct()

#### Parameters

1. [FilePhpReturnInterface](../Filesystem/FilePhpReturnInterface.md) `$phpFileReturn`

---

### raw()

Provides raw access to the cache value "as-is".

::: danger THROWS
- [RuntimeException](../../Exceptions/Core/RuntimeException.md) 
:::

::: tip RETURN
void
:::

---

### var()

Provides access to the cache PHP variable.

::: danger THROWS
- [RuntimeException](../../Exceptions/Core/RuntimeException.md) 
:::

::: tip RETURN
void
:::

---
