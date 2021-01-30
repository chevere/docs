---
editLink: false
---

# HooksQueueInterface

`Chevere\Interfaces\Pluggable\Plug\Hook\HooksQueueInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Pluggable/Plug/Hook/HooksQueueInterface.php)

## Extends

- [PlugsQueueTypedInterface](../../PlugsQueueTypedInterface.md)

## Description

Describes the component in charge of type-hint a hooks queue.

## Methods

### withAdded()

**Parameters:**

- *plug*: [PlugInterface](../../PlugInterface.md)

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
[PlugTypeInterface](../../PlugTypeInterface.md)
:::

---

### plugsQueue()

Provides access to the plugs queue instance.

::: tip RETURN
[PlugsQueueInterface](../../PlugsQueueInterface.md)
:::

---
