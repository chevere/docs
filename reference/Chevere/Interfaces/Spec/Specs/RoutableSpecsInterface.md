---
editLink: false
---

# RoutableSpecsInterface

`Chevere\Interfaces\Spec\Specs\RoutableSpecsInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Spec/Specs/RoutableSpecsInterface.php)

## Implements

- [DsMapInterface](../../DataStructures/DsMapInterface.md)
- [Countable](https://www.php.net/manual/class.countable)

## Methods

### getGenerator()

::: tip RETURN
[Generator](https://www.php.net/manual/class.generator)
:::

---

### put()

**Parameters**

1. [RoutableSpecInterface](./RoutableSpecInterface.md) `$routableSpec`

::: tip RETURN
void
:::

---

### hasKey()

**Parameters**

1. string `$key`

::: tip RETURN
bool
:::

---

### get()

**Parameters**

1. string `$key`

::: tip RETURN
[RoutableSpecInterface](./RoutableSpecInterface.md)
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
