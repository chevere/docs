---
editLink: false
---

# PluggableAnchorsInterface

`Chevere\Interfaces\Pluggable\PluggableAnchorsInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/Pluggable/PluggableAnchorsInterface.php)

## Description

Describes the component in charge of defining pluggable anchors.

## Methods

### __construct

::: warning Parameters
- *...anchors*: string
:::

---

### withAdded

Return an instance with the specified added `$anchor`.

::: warning Parameters
- *...anchors*: string
:::

::: danger Throws
- [OverflowException](../../Exceptions/Core/OverflowException.md) 
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified added `$anchor`.

---

### has

Indicates whether the instance has the given `$anchors`.

::: warning Parameters
- *...anchors*: string
:::

::: tip Return
bool
:::

---

### clonedSet

Provides access to a cloned set instance.

::: tip Return
[Ds\Set](https://www.php.net/manual/class.ds\set)
:::

---
