---
editLink: false
---

# PlugsQueueInterface

`Chevere\Interfaces\Plugin\PlugsQueueInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Plugin/PlugsQueueInterface.php)

## Methods

### __construct()

#### Parameters

1. [PlugTypeInterface](./PlugTypeInterface.md) `$plugType`

---

### withAdded()

#### Parameters

1. [PlugInterface](./PlugInterface.md) `$plug`

::: danger THROWS
- [PlugInterfaceException](../../Exceptions/Plugin/PlugInterfaceException.md)
if $plug doesn't implement the expected plugType
:::

::: tip RETURN
PlugsQueueInterface
:::

---

### plugType()

::: tip RETURN
[PlugTypeInterface](./PlugTypeInterface.md)
:::

---

### toArray()

::: tip RETURN
array
:::

---
