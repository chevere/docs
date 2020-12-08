---
editLink: false
---

# PlugsMapCacheInterface

`Chevere\Interfaces\Plugin\PlugsMapCacheInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Plugin/PlugsMapCacheInterface.php)

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

#### Parameters

1. [CacheInterface](../Cache/CacheInterface.md) `$cache`

---

### withPut()

Return an instance with the specified `$plugsMap`.

#### Parameters

1. [PlugsMapInterface](./PlugsMapInterface.md) `$plugsMap`

::: danger THROWS
- [RuntimeException](../../Exceptions/Core/RuntimeException.md) 
:::

::: tip RETURN
PlugsMapCacheInterface
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$plugsMap`.

---

### hasPlugsQueueTypedFor()

Indicates whether the instance has a plugs queue typed for `$className`.

#### Parameters

1. string `$className`

::: tip RETURN
bool
:::

---

### getPlugsQueueTypedFor()

Returns the plugs queue typed for `$className`.

#### Parameters

1. string `$className`

::: danger THROWS
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip RETURN
[PlugsQueueTypedInterface](./PlugsQueueTypedInterface.md)
:::

---
