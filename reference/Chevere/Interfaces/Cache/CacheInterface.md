---
editLink: false
---

# CacheInterface

`Chevere\Interfaces\Cache\CacheInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Cache/CacheInterface.php)

## Constants

### ILLEGAL_KEY_CHARACTERS

Type `string`

```php
'\\.\\/\\\\~\\:'
```

## Methods

### __construct()

**Parameters**

1. [DirInterface](../Filesystem/DirInterface.md) `$dir`

---

### withPut()

Put item in cache.

**Parameters**

1. [CacheKeyInterface](./CacheKeyInterface.md) `$cacheKey`
2. [VarExportableInterface](../VarExportable/VarExportableInterface.md) `$varExportable`

::: tip RETURN
CacheInterface
:::
Return an instance with the specified CacheKeyInterface put.

This method MUST retain the state of the current instance, and return
an instance that contains the specified CacheKeyInterface VarExportableInterface.

---

### withRemove()

Remove item from cache.

**Parameters**

1. [CacheKeyInterface](./CacheKeyInterface.md) `$cacheKey`

::: danger THROWS
[FileUnableToRemoveException](../../Exceptions/Filesystem/FileUnableToRemoveException.md)
if unable to remove the cache file
:::
::: tip RETURN
CacheInterface
:::
Return an instance with the specified CacheKeyInterface removed.

This method MUST retain the state of the current instance, and return
an instance that contains the specified CacheKeyInterface removed.

---

### exists()

Returns a boolean indicating whether the cache exists for the given key.

**Parameters**

1. [CacheKeyInterface](./CacheKeyInterface.md) `$cacheKey`

::: tip RETURN
bool
:::

---

### get()

Get a cache item.

**Parameters**

1. [CacheKeyInterface](./CacheKeyInterface.md) `$cacheKey`

::: danger THROWS
[CacheKeyNotFoundException](../../Exceptions/Cache/CacheKeyNotFoundException.md)
:::
::: tip RETURN
[CacheItemInterface](./CacheItemInterface.md)
:::

---

### puts()

Provides access to the array containing puts.

::: tip RETURN
array
:::
```php
return [
     'key' => [
             'checksum' => '<file_checksum>',
             'path' => '<the_file_path>'
     ],
];
```

---

### getChild()

Proxy for DirInterface getChild.

**Parameters**

1. string `$path`

::: danger THROWS
[DirUnableToCreateException](../../Exceptions/Filesystem/DirUnableToCreateException.md)
:::
::: tip RETURN
CacheInterface
:::

---

