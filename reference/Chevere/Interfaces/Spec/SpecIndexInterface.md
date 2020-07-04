---
editLink: false
---

# SpecIndexInterface

`Chevere\Interfaces\Spec\SpecIndexInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Spec/SpecIndexInterface.php)

## Implements

- [DsMapInterface](../DataStructures/DsMapInterface.md)
- [Countable](https://www.php.net/manual/class.countable)

## Methods

### withOffset()

**Parameters**

1. string `$routeName`
2. [RouteEndpointSpec](../../Components/Spec/Specs/RouteEndpointSpec.md) `$routeEndpointSpec`

::: tip RETURN
SpecIndexInterface
:::

---

### specIndexMap()

::: tip RETURN
[SpecIndexMapInterface](./SpecIndexMapInterface.md)
:::

---

### has()

**Parameters**

1. string `$routeName`
2. string `$methodName`

::: tip RETURN
bool
:::

---

### get()

**Parameters**

1. string `$routeName`
2. string `$methodName`

::: tip RETURN
string
:::

---

### keys()

::: tip RETURN
array
:::

---

### mapCopy()

::: tip RETURN
Ds\Map
:::

---
