---
editLink: false
---

# RoutingDescriptorsMakerInterface

`Chevere\Interfaces\Router\Routing\RoutingDescriptorsMakerInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/Router/Routing/RoutingDescriptorsMakerInterface.php)

## Description

Describes the component in charge of generating routing descriptors from a given directory.

## Methods

### __construct

::: warning Parameters
- *repository*: string
:::

::: danger Throws
- [LogicException](../../../Exceptions/Core/LogicException.md) 
:::

---

### withWriter

::: warning Parameters
- *writer*: [WriterInterface](../../Writer/WriterInterface.md)
:::

::: tip Return
self
:::

---

### withTrailingSlash

::: warning Parameters
- *bool*: bool
:::

::: tip Return
self
:::

---

### withDescriptorsFor

::: warning Parameters
- *dir*: [DirInterface](../../Filesystem/DirInterface.md)
:::

::: tip Return
self
:::

---

### writer

::: tip Return
[WriterInterface](../../Writer/WriterInterface.md)
:::

---

### useTrailingSlash

::: tip Return
bool
:::

---

### repository

::: tip Return
string
:::

---

### descriptors

Provides access to the generated routing descriptors.

::: tip Return
[RoutingDescriptorsInterface](./RoutingDescriptorsInterface.md)
:::

---
