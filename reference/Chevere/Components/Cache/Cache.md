---
editLink: false
---

# Cache

`Chevere\Components\Cache\Cache`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Components/Cache/Cache.php)

## Implements

- [CacheInterface](../../Interfaces/Cache/CacheInterface.md)

## Constants

### ILLEGAL_KEY_CHARACTERS

Type `string`

```php
'\\.\\/\\\\~\\:'
```

## Methods

### __construct

::: warning Parameters
- *dir*: [DirInterface](../../Interfaces/Filesystem/DirInterface.md)
:::

::: danger Throws
- [DirUnableToCreateException](../../Exceptions/Filesystem/DirUnableToCreateException.md) 
:::

---

### dir

::: tip Return
[DirInterface](../../Interfaces/Filesystem/DirInterface.md)
:::

---

### withPut

::: warning Parameters
- *key*: [CacheKeyInterface](../../Interfaces/Cache/CacheKeyInterface.md)
- *var*: [VarStorableInterface](../../Interfaces/VarStorable/VarStorableInterface.md)
:::

::: tip Return
[CacheInterface](../../Interfaces/Cache/CacheInterface.md)
:::

---

### without

::: warning Parameters
- *cacheKey*: [CacheKeyInterface](../../Interfaces/Cache/CacheKeyInterface.md)
:::

::: tip Return
[CacheInterface](../../Interfaces/Cache/CacheInterface.md)
:::

---

### exists

::: warning Parameters
- *cacheKey*: [CacheKeyInterface](../../Interfaces/Cache/CacheKeyInterface.md)
:::

::: tip Return
bool
:::

---

### get

::: warning Parameters
- *cacheKey*: [CacheKeyInterface](../../Interfaces/Cache/CacheKeyInterface.md)
:::

::: tip Return
[CacheItemInterface](../../Interfaces/Cache/CacheItemInterface.md)
:::

---

### puts

::: tip Return
array
:::

---
