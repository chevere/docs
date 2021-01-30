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

**Parameters:**

- *dir*: [DirInterface](../../Interfaces/Filesystem/DirInterface.md)

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

**Parameters:**

- *key*: [CacheKeyInterface](../../Interfaces/Cache/CacheKeyInterface.md)
- *varStorable*: [VarStorableInterface](../../Interfaces/VarStorable/VarStorableInterface.md)

::: tip RETURN
[CacheInterface](../../Interfaces/Cache/CacheInterface.md)
:::

---

### without()

**Parameters:**

- *cacheKey*: [CacheKeyInterface](../../Interfaces/Cache/CacheKeyInterface.md)

::: tip RETURN
[CacheInterface](../../Interfaces/Cache/CacheInterface.md)
:::

---

### exists()

**Parameters:**

- *cacheKey*: [CacheKeyInterface](../../Interfaces/Cache/CacheKeyInterface.md)

::: tip RETURN
bool
:::

---

### get()

**Parameters:**

- *cacheKey*: [CacheKeyInterface](../../Interfaces/Cache/CacheKeyInterface.md)

::: tip RETURN
[CacheItemInterface](../../Interfaces/Cache/CacheItemInterface.md)
:::

---

### puts()

::: tip RETURN
array
:::

---
