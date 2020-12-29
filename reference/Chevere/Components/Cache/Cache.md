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

### __construct()

#### Parameters

1. [DirInterface](../../Interfaces/Filesystem/DirInterface.md) `$dir`

::: danger THROWS
- [DirUnableToCreateException](../../Exceptions/Filesystem/DirUnableToCreateException.md) 
:::

---

### dir()

::: tip RETURN
[DirInterface](../../Interfaces/Filesystem/DirInterface.md)
:::

---

### withPut()

#### Parameters

1. [CacheKeyInterface](../../Interfaces/Cache/CacheKeyInterface.md) `$key`
2. [VarStorableInterface](../../Interfaces/VarStorable/VarStorableInterface.md) `$varStorable`

::: tip RETURN
[CacheInterface](../../Interfaces/Cache/CacheInterface.md)
:::

---

### without()

#### Parameters

1. [CacheKeyInterface](../../Interfaces/Cache/CacheKeyInterface.md) `$cacheKey`

::: tip RETURN
[CacheInterface](../../Interfaces/Cache/CacheInterface.md)
:::

---

### exists()

#### Parameters

1. [CacheKeyInterface](../../Interfaces/Cache/CacheKeyInterface.md) `$cacheKey`

::: tip RETURN
bool
:::

---

### get()

#### Parameters

1. [CacheKeyInterface](../../Interfaces/Cache/CacheKeyInterface.md) `$cacheKey`

::: tip RETURN
[CacheItemInterface](../../Interfaces/Cache/CacheItemInterface.md)
:::

---

### puts()

::: tip RETURN
array
:::

---

### getPath()

#### Parameters

1. string `$name`

::: tip RETURN
[PathInterface](../../Interfaces/Filesystem/PathInterface.md)
:::

---
