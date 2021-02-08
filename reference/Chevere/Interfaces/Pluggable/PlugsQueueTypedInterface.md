---
editLink: false
---

# PlugsQueueTypedInterface

`Chevere\Interfaces\Pluggable\PlugsQueueTypedInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/Pluggable/PlugsQueueTypedInterface.php)

## Description

Describes the base interface used by typed plug queues.

## Methods

### withAdded

::: warning Parameters
- *plug*: [PlugInterface](./PlugInterface.md)
:::

::: tip Return
self
:::

---

### interface

Returns the interface name of plug members.

::: tip Return
string
:::

---

### getPlugType

Returns a new instance for the members plug type.

::: tip Return
[PlugTypeInterface](./PlugTypeInterface.md)
:::

---

### plugsQueue

Provides access to the plugs queue instance.

::: tip Return
[PlugsQueueInterface](./PlugsQueueInterface.md)
:::

---
