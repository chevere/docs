---
editLink: false
---

# RoutingDescriptorsInterface

`Chevere\Interfaces\Router\Routing\RoutingDescriptorsInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Router/Routing/RoutingDescriptorsInterface.php)

## Extends

- [Countable](https://www.php.net/manual/class.countable)

## Description

Describes the component in charge of collecting objects implementing `RoutingDescriptorInterface`.

## Methods

### withAdded

Return an instance with the specified `$descriptor` added.

::: warning Parameters
- *descriptor*: [RoutingDescriptorInterface](./RoutingDescriptorInterface.md)
:::

::: danger Throws
- [OverflowException](../../../Exceptions/Core/OverflowException.md) 
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$descriptor` added.

---

### contains

Indicates whether the instance has the given `$descriptor`.

::: warning Parameters
- *descriptor*: [RoutingDescriptorInterface](./RoutingDescriptorInterface.md)
:::

::: tip Return
bool
:::

---

### get

::: warning Parameters
- *position*: int
:::

::: danger Throws
- [OutOfBoundsException](../../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip Return
[RoutingDescriptorInterface](./RoutingDescriptorInterface.md)
:::

---

### getGenerator

::: tip Return
[Generator](https://www.php.net/manual/class.generator)
:::

---
