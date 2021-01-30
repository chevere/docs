---
editLink: false
---

# CacheItemInterface

`Chevere\Interfaces\Cache\CacheItemInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Cache/CacheItemInterface.php)

## Description

Describes the component that defines a cache item.

## Methods

### __construct()

**Parameters:**

- *phpFileReturn*: [FilePhpReturnInterface](../Filesystem/FilePhpReturnInterface.md)

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
