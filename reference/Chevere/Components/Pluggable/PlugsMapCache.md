---
editLink: false
---

# PlugsMapCache

`Chevere\Components\Pluggable\PlugsMapCache`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Components/Pluggable/PlugsMapCache.php)

## Implements

- [PlugsMapCacheInterface](../../Interfaces/Pluggable/PlugsMapCacheInterface.md)

## Constants

### KEY_CLASS_MAP

Type `string`

```php
'classmap'
```

## Methods

### __construct

::: warning Parameters
- *cache*: [CacheInterface](../../Interfaces/Cache/CacheInterface.md)
:::

---

### withPut

::: warning Parameters
- *plugsMap*: [PlugsMapInterface](../../Interfaces/Pluggable/PlugsMapInterface.md)
:::

::: tip Return
[PlugsMapCacheInterface](../../Interfaces/Pluggable/PlugsMapCacheInterface.md)
:::

---

### hasPlugsQueueTypedFor

::: warning Parameters
- *className*: string
:::

::: tip Return
bool
:::

---

### getPlugsQueueTypedFor

::: warning Parameters
- *className*: string
:::

::: tip Return
[PlugsQueueTypedInterface](../../Interfaces/Pluggable/PlugsQueueTypedInterface.md)
:::

---
