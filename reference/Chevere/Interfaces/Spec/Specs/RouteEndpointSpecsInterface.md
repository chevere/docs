---
editLink: false
---

# RouteEndpointSpecsInterface

`Chevere\Interfaces\Spec\Specs\RouteEndpointSpecsInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Spec/Specs/RouteEndpointSpecsInterface.php)

## Implements

- [DsMapInterface](../../DataStructures/DsMapInterface.md)
- [Countable](https://www.php.net/manual/class.countable)

## Methods

### getGenerator()

::: tip RETURN
[Generator](https://www.php.net/manual/class.generator)
:::

---

### withPut()

#### Parameters

1. [RouteEndpointSpecInterface](./RouteEndpointSpecInterface.md) `$routeEndpointSpec`

::: tip RETURN
RouteEndpointSpecsInterface
:::

---

### hasKey()

#### Parameters

1. string `$key`

::: tip RETURN
bool
:::

---

### get()

#### Parameters

1. string `$key`

::: tip RETURN
[RouteEndpointSpecInterface](./RouteEndpointSpecInterface.md)
:::

---

### keys()

Provides access to the map keys.

::: tip RETURN
array
:::

---

### mapCopy()

Provides a deep copy of the internal map.

::: tip RETURN
Ds\Map
:::

---
