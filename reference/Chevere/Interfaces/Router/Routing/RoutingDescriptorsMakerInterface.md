---
editLink: false
---

# RoutingDescriptorsMakerInterface

`Chevere\Interfaces\Router\Routing\RoutingDescriptorsMakerInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Router/Routing/RoutingDescriptorsMakerInterface.php)

## Description

Describes the component in charge of generating routing descriptors from a given directory.

## Methods

### __construct()

#### Parameters

1. string `$repository`
2. [DirInterface](../../Filesystem/DirInterface.md) `$dir`

::: danger THROWS
- [LogicException](../../../Exceptions/Core/LogicException.md) 
:::

---

### descriptors()

Provides access to the generated routing descriptors.

::: tip RETURN
[RoutingDescriptorsInterface](./RoutingDescriptorsInterface.md)
:::

---
