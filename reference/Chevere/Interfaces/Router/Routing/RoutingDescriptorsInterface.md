---
editLink: false
---

# RoutingDescriptorsInterface

`Chevere\Interfaces\Router\Routing\RoutingDescriptorsInterface`

[view source](https://github.com/chevere/chevere/blob/master/Router/Routing/RoutingDescriptorsInterface.php)

## Extends

- [Countable](https://www.php.net/manual/class.countable)

## Description

Describes the component in charge of collecting objects implementing `RoutingDescriptorInterface`.

## Methods

### withAdded()

Return an instance with the specified `$descriptor` added.

#### Parameters

1. [RoutingDescriptorInterface](./RoutingDescriptorInterface.md) `$descriptor`

::: danger THROWS
- [OverflowException](../../../Exceptions/Core/OverflowException.md) 
:::

::: tip RETURN
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$descriptor` added.

---

### contains()

Indicates whether the instance has the given `$descriptor`.

#### Parameters

1. [RoutingDescriptorInterface](./RoutingDescriptorInterface.md) `$descriptor`

::: tip RETURN
bool
:::

---

### get()

#### Parameters

1. int `$position`

::: danger THROWS
- [OutOfBoundsException](../../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip RETURN
[RoutingDescriptorInterface](./RoutingDescriptorInterface.md)
:::

---

### getGenerator()

::: tip RETURN
[Generator](https://www.php.net/manual/class.generator)
:::

---
