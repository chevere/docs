---
editLink: false
---

# CacheInterface

`Chevere\Interfaces\Cache\CacheInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/Cache/CacheInterface.php)

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

### __construct

::: warning Parameters
- *dir*: [DirInterface](../Filesystem/DirInterface.md)
:::

::: danger Throws
- [DirUnableToCreateException](../../Exceptions/Filesystem/DirUnableToCreateException.md) if $dir doesn't exists and unable to create
:::

---

### dir

Provides access to the cache directory.

::: tip Return
[DirInterface](../Filesystem/DirInterface.md)
:::

---

### withPut

Put item in cache.

::: warning Parameters
- *key*: [CacheKeyInterface](./CacheKeyInterface.md)
- *var*: [VarStorableInterface](../VarSupport/VarStorableInterface.md)
:::

::: tip Return
self
:::

Return an instance with the specified put.

This method MUST retain the state of the current instance, and return
an instance that contains the specified put.

---

### without

Remove item from cache.

::: warning Parameters
- *key*: [CacheKeyInterface](./CacheKeyInterface.md)
:::

::: danger Throws
- [FileUnableToRemoveException](../../Exceptions/Filesystem/FileUnableToRemoveException.md) if unable to remove the cache file
:::

::: tip Return
self
:::

Return an instance with the specified removed.

This method MUST retain the state of the current instance, and return
an instance that contains the specified removed.

---

### exists

Indicates whether the cache exists for the given key.

::: warning Parameters
- *key*: [CacheKeyInterface](./CacheKeyInterface.md)
:::

::: tip Return
bool
:::

---

### get

Get a cache item.

::: warning Parameters
- *key*: [CacheKeyInterface](./CacheKeyInterface.md)
:::

::: danger Throws
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip Return
[CacheItemInterface](./CacheItemInterface.md)
:::

---

### puts

Provides access to the array containing puts.

::: tip Return
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
