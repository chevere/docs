---
editLink: false
---

# CacheInterface

`Chevere\Interfaces\Cache\CacheInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Cache/CacheInterface.php)

## Description

Describes the component in charge of caching PHP variables.

`cached.php >>> <?php return 'my cached data';`

## Constants

### ILLEGAL_KEY_CHARACTERS

Type `string`

```php
'\\.\\/\\\\~\\:'
```

## Methods

### __construct()

#### Parameters

1. [DirInterface](../Filesystem/DirInterface.md) `$dir`

::: danger THROWS
- [DirUnableToCreateException](../../Exceptions/Filesystem/DirUnableToCreateException.md) if $dir doesn't exists and unable to create
:::

---

### dir()

Provides access to the cache directory.

::: tip RETURN
[DirInterface](../Filesystem/DirInterface.md)
:::

---

### withAddedItem()

Put item in cache.

#### Parameters

1. [CacheKeyInterface](./CacheKeyInterface.md) `$cacheKey`
2. [VarExportableInterface](../VarExportable/VarExportableInterface.md) `$varExportable`

::: tip RETURN
CacheInterface
:::

Return an instance with the specified put.

This method MUST retain the state of the current instance, and return
an instance that contains the specified put.

---

### withoutItem()

Remove item from cache.

#### Parameters

1. [CacheKeyInterface](./CacheKeyInterface.md) `$cacheKey`

::: danger THROWS
- [FileUnableToRemoveException](../../Exceptions/Filesystem/FileUnableToRemoveException.md) if unable to remove the cache file
:::

::: tip RETURN
CacheInterface
:::

Return an instance with the specified removed.

This method MUST retain the state of the current instance, and return
an instance that contains the specified removed.

---

### exists()

Indicates whether the cache exists for the given key.

#### Parameters

1. [CacheKeyInterface](./CacheKeyInterface.md) `$cacheKey`

::: tip RETURN
bool
:::

---

### get()

Get a cache item.

#### Parameters

1. [CacheKeyInterface](./CacheKeyInterface.md) `$cacheKey`

::: danger THROWS
- [CacheKeyNotFoundException](../../Exceptions/Cache/CacheKeyNotFoundException.md) 
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
