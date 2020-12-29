---
editLink: false
---

# PlugsQueue

`Chevere\Components\Pluggable\PlugsQueue`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Components/Pluggable/PlugsQueue.php)

## Implements

- [PlugsQueueInterface](../../Interfaces/Pluggable/PlugsQueueInterface.md)
- [ToArrayInterface](../../Interfaces/Common/ToArrayInterface.md)

## Methods

### __construct()

#### Parameters

1. [PlugTypeInterface](../../Interfaces/Pluggable/PlugTypeInterface.md) `$plugType`

---

### withAdded()

#### Parameters

1. [PlugInterface](../../Interfaces/Pluggable/PlugInterface.md) `$plug`

::: tip RETURN
[PlugsQueueInterface](../../Interfaces/Pluggable/PlugsQueueInterface.md)
:::

---

### plugType()

::: tip RETURN
[PlugTypeInterface](../../Interfaces/Pluggable/PlugTypeInterface.md)
:::

---

### toArray()

::: tip RETURN
array
:::

---

### assertUnique()

#### Parameters

1. string `$plugName`

::: tip RETURN
void
:::

---

### assertInterface()

#### Parameters

1. [PlugInterface](../../Interfaces/Pluggable/PlugInterface.md) `$plug`

::: tip RETURN
void
:::

---
