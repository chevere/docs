---
editLink: false
---

# RoutingDescriptorsInterface

`Chevere\Interfaces\Routing\RoutingDescriptorsInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Routing/RoutingDescriptorsInterface.php)

## Implements

- [Countable](https://www.php.net/manual/class.countable)

## Description

Describes the component in charge of collecting objects implementing `RoutingDescriptorInterface`.

## Methods

### withAdded()

Return an instance with the specified `$descriptor` added.

**Parameters**

1. [RoutingDescriptorInterface](./RoutingDescriptorInterface.md) `$descriptor`

::: danger THROWS
- [RoutingDescriptorAlreadyAddedException](../../Exceptions/Routing/RoutingDescriptorAlreadyAddedException.md)
- [OverflowException](../../Exceptions/Core/OverflowException.md)
:::

::: tip RETURN
RoutingDescriptorsInterface
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$descriptor` added.

---

### count()

Provides access to the element count.

::: tip RETURN
int
:::

---

### has()

Indicates whether the instance has the given `$descriptor`.

**Parameters**

1. [RoutingDescriptorInterface](./RoutingDescriptorInterface.md) `$descriptor`

::: tip RETURN
bool
:::

---

### get()

**Parameters**

1. int `$position`

::: danger THROWS
- [OutOfRangeException](../../Exceptions/Core/OutOfRangeException.md)
:::

::: tip RETURN
[RoutingDescriptorInterface](./RoutingDescriptorInterface.md)
:::

---
