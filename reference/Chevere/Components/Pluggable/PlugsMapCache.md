---
editLink: false
---

# PlugsMapCache

`Chevere\Components\Pluggable\PlugsMapCache`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Components/Pluggable/PlugsMapCache.php)

## Implements

- [PlugsMapCacheInterface](../../Interfaces/Pluggable/PlugsMapCacheInterface.md)

## Constants

### KEY_CLASS_MAP

Type `string`

```php
'classmap'
```

## Methods

### __construct()

#### Parameters

1. [CacheInterface](../../Interfaces/Cache/CacheInterface.md) `$cache`

---

### withPut()

#### Parameters

1. [PlugsMapInterface](../../Interfaces/Pluggable/PlugsMapInterface.md) `$plugsMap`

::: tip RETURN
[PlugsMapCacheInterface](../../Interfaces/Pluggable/PlugsMapCacheInterface.md)
:::

---

### hasPlugsQueueTypedFor()

#### Parameters

1. string `$className`

::: tip RETURN
bool
:::

---

### getPlugsQueueTypedFor()

#### Parameters

1. string `$className`

::: tip RETURN
[PlugsQueueTypedInterface](../../Interfaces/Pluggable/PlugsQueueTypedInterface.md)
:::

---

### getClassMapFromCache()

::: tip RETURN
[ClassMapInterface](../../Interfaces/ClassMap/ClassMapInterface.md)
:::

---

### assertClassMap()

::: tip RETURN
void
:::

---
