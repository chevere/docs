---
editLink: false
---

# EventQueueInterface

`Chevere\Interfaces\Pluggable\Plug\Event\EventQueueInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/Pluggable/Plug/Event/EventQueueInterface.php)

## Extends

- [PlugsQueueTypedInterface](../../PlugsQueueTypedInterface.md)

## Description

Describes the component in charge of type-hint an event listeners queue.

## Methods

### withAdded

::: warning Parameters
- *plug*: [PlugInterface](../../PlugInterface.md)
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
[PlugTypeInterface](../../PlugTypeInterface.md)
:::

---

### plugsQueue

Provides access to the plugs queue instance.

::: tip Return
[PlugsQueueInterface](../../PlugsQueueInterface.md)
:::

---
