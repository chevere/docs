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

**Parameters:**

- *cache*: [CacheInterface](../../Interfaces/Cache/CacheInterface.md)

---

### withPut()

**Parameters:**

- *plugsMap*: [PlugsMapInterface](../../Interfaces/Pluggable/PlugsMapInterface.md)

::: tip RETURN
[PlugsMapCacheInterface](../../Interfaces/Pluggable/PlugsMapCacheInterface.md)
:::

---

### hasPlugsQueueTypedFor()

**Parameters:**

- *className*: string

::: tip RETURN
bool
:::

---

### getPlugsQueueTypedFor()

**Parameters:**

- *className*: string

::: tip RETURN
[PlugsQueueTypedInterface](../../Interfaces/Pluggable/PlugsQueueTypedInterface.md)
:::

---
