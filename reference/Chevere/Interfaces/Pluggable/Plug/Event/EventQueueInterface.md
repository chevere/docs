---
editLink: false
---

# EventQueueInterface

`Chevere\Interfaces\Pluggable\Plug\Event\EventQueueInterface`

[view source](https://github.com/chevere/chevere/blob/master/Pluggable/Plug/Event/EventQueueInterface.php)

## Extends

- [PlugsQueueTypedInterface](../../PlugsQueueTypedInterface.md)

## Description

Describes the component in charge of type-hint an event listeners queue.

## Methods

### withAdded()

#### Parameters

1. [PlugInterface](../../PlugInterface.md) `$plug`

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
