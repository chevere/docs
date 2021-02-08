---
editLink: false
---

# CacheItemInterface

`Chevere\Interfaces\Cache\CacheItemInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/Cache/CacheItemInterface.php)

## Description

Describes the component that defines a cache item.

## Methods

### __construct

::: warning Parameters
- *phpFileReturn*: [FilePhpReturnInterface](../Filesystem/FilePhpReturnInterface.md)
:::

---

### raw

Provides raw access to the cache value "as-is".

::: danger Throws
- [RuntimeException](../../Exceptions/Core/RuntimeException.md) 
:::

::: tip Return
void
:::

---

### var

Provides access to the cache PHP variable.

::: danger Throws
- [RuntimeException](../../Exceptions/Core/RuntimeException.md) 
:::

::: tip Return
void
:::

---
