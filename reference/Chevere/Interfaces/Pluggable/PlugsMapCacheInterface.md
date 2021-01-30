---
editLink: false
---

# PlugsMapCacheInterface

`Chevere\Interfaces\Pluggable\PlugsMapCacheInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Pluggable/PlugsMapCacheInterface.php)

## Description

Describes the component in charge of caching a plugs map.

## Constants

### KEY_CLASS_MAP

Type `string`

```php
'classmap'
```

## Methods

### __construct()

**Parameters:**

- *cache*: [CacheInterface](../Cache/CacheInterface.md)

---

### withPut()

Return an instance with the specified `$plugsMap`.

**Parameters:**

- *plugsMap*: [PlugsMapInterface](./PlugsMapInterface.md)

::: danger THROWS
- [RuntimeException](../../Exceptions/Core/RuntimeException.md) 
:::

::: tip RETURN
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$plugsMap`.

---

### hasPlugsQueueTypedFor()

Indicates whether the instance has a plugs queue typed for `$className`.

**Parameters:**

- *className*: string

::: tip RETURN
bool
:::

---

### getPlugsQueueTypedFor()

Returns the plugs queue typed for `$className`.

**Parameters:**

- *className*: string

::: danger THROWS
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip RETURN
[PlugsQueueTypedInterface](./PlugsQueueTypedInterface.md)
:::

---
