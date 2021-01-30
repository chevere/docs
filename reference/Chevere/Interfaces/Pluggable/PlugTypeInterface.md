---
editLink: false
---

# PlugTypeInterface

`Chevere\Interfaces\Pluggable\PlugTypeInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Pluggable/PlugTypeInterface.php)

## Description

Describes the component in charge of defining a generic plug type.

## Methods

### interface

Returns the interface that the plug must implement.

::: tip Return
string
:::

---

### plugsTo

Returns the applicable pluggable interface.

::: tip Return
string
:::

---

### trailingName

Returns trailing component name, like `name.php`.

::: tip Return
string
:::

---

### getPlugsQueueTyped

Gets a new plugs queue typed instance.

::: tip Return
[PlugsQueueTypedInterface](./PlugsQueueTypedInterface.md)
:::

---

### pluggableAnchorsMethod

Returns the name of the pluggable method which returns the plug anchors.

::: tip Return
string
:::

---
