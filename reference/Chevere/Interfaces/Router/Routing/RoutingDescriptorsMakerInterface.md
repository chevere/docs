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

**Parameters:**

- *repository*: string

::: danger THROWS
- [LogicException](../../../Exceptions/Core/LogicException.md) 
:::

---

### withWriter()

**Parameters:**

- *writer*: [WriterInterface](../../Writer/WriterInterface.md)

::: tip RETURN
self
:::

---

### withTrailingSlash()

**Parameters:**

- *bool*: bool

::: tip RETURN
self
:::

---

### withDescriptorsFor()

**Parameters:**

- *dir*: [DirInterface](../../Filesystem/DirInterface.md)

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
