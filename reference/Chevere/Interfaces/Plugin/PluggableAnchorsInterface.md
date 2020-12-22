---
editLink: false
---

# PluggableAnchorsInterface

`Chevere\Interfaces\Plugin\PluggableAnchorsInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Plugin/PluggableAnchorsInterface.php)

## Description

Describes the component in charge of defining pluggable anchors.

## Methods

### withAdded()

Return an instance with the specified added `$anchor`.

#### Parameters

1. string `$anchor`

::: danger THROWS
- [OverflowException](../../Exceptions/Core/OverflowException.md) 
:::

::: tip RETURN
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified added `$anchor`.

---

### has()

Indicates whether the instance has the given `$anchor`.

#### Parameters

1. string `$anchor`

::: tip RETURN
bool
:::

---

### clonedSet()

Provides access to a cloned set instance.

::: tip RETURN
Ds\Set
:::

---
