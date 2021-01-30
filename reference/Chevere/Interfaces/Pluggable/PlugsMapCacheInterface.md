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

### __construct

::: warning Parameters
- *cache*: [CacheInterface](../Cache/CacheInterface.md)
:::

---

### withPut

Return an instance with the specified `$plugsMap`.

::: warning Parameters
- *plugsMap*: [PlugsMapInterface](./PlugsMapInterface.md)
:::

::: danger Throws
- [RuntimeException](../../Exceptions/Core/RuntimeException.md) 
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$plugsMap`.

---

### hasPlugsQueueTypedFor

Indicates whether the instance has a plugs queue typed for `$className`.

::: warning Parameters
- *className*: string
:::

::: tip Return
bool
:::

---

### getPlugsQueueTypedFor

Returns the plugs queue typed for `$className`.

::: warning Parameters
- *className*: string
:::

::: danger Throws
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip Return
[PlugsQueueTypedInterface](./PlugsQueueTypedInterface.md)
:::

---
