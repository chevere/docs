---
editLink: false
---

# HooksQueueInterface

`Chevere\Interfaces\Pluggable\Plug\Hook\HooksQueueInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/Pluggable/Plug/Hook/HooksQueueInterface.php)

## Extends

- [PlugsQueueTypedInterface](../../PlugsQueueTypedInterface.md)

## Description

Describes the component in charge of type-hint a hooks queue.

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
