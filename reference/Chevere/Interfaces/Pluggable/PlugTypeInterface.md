---
editLink: false
---

# PlugTypeInterface

`Chevere\Interfaces\Pluggable\PlugTypeInterface`

[view source](https://github.com/chevere/chevere/blob/master/Pluggable/PlugTypeInterface.php)

## Description

Describes the component in charge of defining a generic plug type.

## Methods

### interface()

Returns the interface that the plug must implement.

::: tip RETURN
string
:::

---

### plugsTo()

Returns the applicable pluggable interface.

::: tip RETURN
string
:::

---

### trailingName()

Returns trailing component name, like `name.php`.

::: tip RETURN
string
:::

---

### getPlugsQueueTyped()

Gets a new plugs queue typed instance.

::: tip RETURN
[PlugsQueueTypedInterface](./PlugsQueueTypedInterface.md)
:::

---

### pluggableAnchorsMethod()

Returns the name of the pluggable method which returns the plug anchors.

::: tip RETURN
string
:::

---
