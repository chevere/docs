---
editLink: false
---

# PlugsQueueTypedInterface

`Chevere\Interfaces\Pluggable\PlugsQueueTypedInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Pluggable/PlugsQueueTypedInterface.php)

## Description

Describes the base interface used by typed plug queues.

## Methods

### withAdded()

**Parameters:**

- *plug*: [PlugInterface](./PlugInterface.md)

::: tip RETURN
self
:::

---

### interface()

Returns the interface name of plug members.

::: tip RETURN
string
:::

---

### getPlugType()

Returns a new instance for the members plug type.

::: tip RETURN
[PlugTypeInterface](./PlugTypeInterface.md)
:::

---

### plugsQueue()

Provides access to the plugs queue instance.

::: tip RETURN
[PlugsQueueInterface](./PlugsQueueInterface.md)
:::

---
