---
editLink: false
---

# RoutablesInterface

`Chevere\Interfaces\Router\RoutablesInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Router/RoutablesInterface.php)

## Implements

- [DsMapInterface](../DataStructures/DsMapInterface.md)
- [Countable](https://www.php.net/manual/class.countable)

## Methods

### getGenerator()

::: tip RETURN
[Generator](https://www.php.net/manual/class.generator)
:::

---

### withPut()

#### Parameters

1. [RoutableInterface](./RoutableInterface.md) `$routable`

::: tip RETURN
RoutablesInterface
:::

---

### hasKey()

#### Parameters

1. string `$name`

::: tip RETURN
bool
:::

---

### get()

#### Parameters

1. string `$name`

::: tip RETURN
[RoutableInterface](./RoutableInterface.md)
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
