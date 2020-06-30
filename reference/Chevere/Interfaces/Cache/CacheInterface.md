# CacheInterface

`Chevere\Interfaces\Cache\CacheInterface`

[view source](https://github.com/chevere/chevere/blob/master//home/rodolfo/git/chevere/chevere/interfaces/Cache/CacheInterface.php)

## Constants

### ILLEGAL_KEY_CHARACTERS

Type `string`

```php
'\\.\\/\\\\~\\:'
```

## Methods

### __construct()

#### Parameters

- [DirInterface](../Filesystem/DirInterface.md) `$dir`

---

### withPut()

> Put item in cache.

Return an instance with the specified CacheKeyInterface put.

This method MUST retain the state of the current instance, and return
an instance that contains the specified CacheKeyInterface VarExportableInterface.

#### Parameters

- [CacheKeyInterface](./CacheKeyInterface.md) `$cacheKey`
- [VarExportableInterface](../VarExportable/VarExportableInterface.md) `$varExportable`

#### Return

CacheInterface

---

### withRemove()

> Remove item from cache.

Return an instance with the specified CacheKeyInterface removed.

This method MUST retain the state of the current instance, and return
an instance that contains the specified CacheKeyInterface removed.

#### Parameters

- [CacheKeyInterface](./CacheKeyInterface.md) `$cacheKey`

#### Return

CacheInterface

---

### exists()

> Returns a boolean indicating whether the cache exists for the given key.

#### Parameters

- [CacheKeyInterface](./CacheKeyInterface.md) `$cacheKey`

#### Return

bool

---

### get()

> Get a cache item.

#### Parameters

- [CacheKeyInterface](./CacheKeyInterface.md) `$cacheKey`

#### Return

[CacheItemInterface](./CacheItemInterface.md)

---

### puts()

#### Return

array

---

### getChild()

> Proxy for DirInterface getChild.

#### Parameters

- string `$path`

#### Return

CacheInterface

---

