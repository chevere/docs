---
editLink: false
---

# RoutingDescriptorsMaker

`Chevere\Components\Router\Routing\RoutingDescriptorsMaker`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Components/Router/Routing/RoutingDescriptorsMaker.php)

## Implements

- [RoutingDescriptorsMakerInterface](../../../Interfaces/Router/Routing/RoutingDescriptorsMakerInterface.md)

## Methods

### __construct()

#### Parameters

1. string `$repository`
2. [DirInterface](../../../Interfaces/Filesystem/DirInterface.md) `$dir`

---

### descriptors()

::: tip RETURN
[RoutingDescriptorsInterface](../../../Interfaces/Router/Routing/RoutingDescriptorsInterface.md)
:::

---

### iterate()

#### Parameters

1. [RecursiveIteratorIterator](https://www.php.net/manual/class.recursiveiteratoriterator) `$iterator`

::: tip RETURN
void
:::

---

### getPathForParameters()

#### Parameters

1. [StrInterface](../../../Interfaces/Str/StrInterface.md) `$path`
2. array `$parameters`

::: tip RETURN
string
:::

---
