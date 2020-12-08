---
editLink: false
---

# EventListenersQueueInterface

`Chevere\Interfaces\Plugin\Plugs\EventListener\EventListenersQueueInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Plugin/Plugs/EventListener/EventListenersQueueInterface.php)

## Extends

- [PlugsQueueTypedInterface](../../PlugsQueueTypedInterface.md)

## Description

Describes the component in charge of type-hint an event listeners queue.

## Methods

### withAdded()

#### Parameters

1. [PlugInterface](../../PlugInterface.md) `$plug`

::: tip RETURN
[PlugsQueueTypedInterface](../../PlugsQueueTypedInterface.md)
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
