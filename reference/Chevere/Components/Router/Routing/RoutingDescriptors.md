---
editLink: false
---

# RoutingDescriptors

`Chevere\Components\Router\Routing\RoutingDescriptors`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Components/Router/Routing/RoutingDescriptors.php)

## Implements

- [RoutingDescriptorsInterface](../../../Interfaces/Router/Routing/RoutingDescriptorsInterface.md)
- [Countable](https://www.php.net/manual/class.countable)

## Methods

### __construct()

---

### withAdded()

#### Parameters

1. [RoutingDescriptorInterface](../../../Interfaces/Router/Routing/RoutingDescriptorInterface.md) `$descriptor`

::: tip RETURN
[RoutingDescriptorsInterface](../../../Interfaces/Router/Routing/RoutingDescriptorsInterface.md)
:::

---

### getGenerator()

::: tip RETURN
[Generator](https://www.php.net/manual/class.generator)
:::

---

### count()

::: tip RETURN
int
:::

---

### contains()

#### Parameters

1. [RoutingDescriptorInterface](../../../Interfaces/Router/Routing/RoutingDescriptorInterface.md) `$descriptor`

::: tip RETURN
bool
:::

---

### get()

#### Parameters

1. int `$position`

::: tip RETURN
[RoutingDescriptorInterface](../../../Interfaces/Router/Routing/RoutingDescriptorInterface.md)
:::

---

### assertPushPath()

#### Parameters

1. string `$path`

::: tip RETURN
void
:::

---

### assertPushName()

#### Parameters

1. string `$name`

::: tip RETURN
void
:::

---
