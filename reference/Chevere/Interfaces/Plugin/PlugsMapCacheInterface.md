---
editLink: false
---

# PlugsMapCacheInterface

`Chevere\Interfaces\Plugin\PlugsMapCacheInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Plugin/PlugsMapCacheInterface.php)

## Constants

### KEY_CLASS_MAP

Type `string`

```php
'classmap'
```

## Methods

### withPut()

#### Parameters

1. [PlugsMapInterface](./PlugsMapInterface.md) `$plugsMap`

::: tip RETURN
PlugsMapCacheInterface
:::

---

### hasPlugsQueueFor()

#### Parameters

1. string `$className`

::: tip RETURN
bool
:::

---

### getPlugsQueueFor()

#### Parameters

1. string `$className`

::: tip RETURN
[PlugsQueueTypedInterface](./PlugsQueueTypedInterface.md)
:::

---
