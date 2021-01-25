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

::: danger THROWS
- [LogicException](../../../Exceptions/Core/LogicException.md) 
:::

---

### withWriter()

#### Parameters

1. [WriterInterface](../../Writer/WriterInterface.md) `$writer`

::: tip RETURN
self
:::

---

### withTrailingSlash()

#### Parameters

1. bool `$bool`

::: tip RETURN
self
:::

---

### withDescriptorsFor()

#### Parameters

1. [DirInterface](../../Filesystem/DirInterface.md) `$dir`

::: tip RETURN
self
:::

---

### writer()

::: tip RETURN
[WriterInterface](../../Writer/WriterInterface.md)
:::

---

### useTrailingSlash()

::: tip RETURN
bool
:::

---

### repository()

::: tip RETURN
string
:::

---

### descriptors()

Provides access to the generated routing descriptors.

::: tip RETURN
[RoutingDescriptorsInterface](./RoutingDescriptorsInterface.md)
:::

---
