---
editLink: false
---

# SpecIndexMapInterface

`Chevere\Interfaces\Spec\SpecIndexMapInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Spec/SpecIndexMapInterface.php)

## Implements

- [DsMapInterface](../DataStructures/DsMapInterface.md)
- [Countable](https://www.php.net/manual/class.countable)

## Description

Describes the component in charge of collecting route spec endpoints.

## Methods

### withPut()

Return an instance with the specified `$specEndpoints` for `$routeName`.

#### Parameters

1. string `$routeName`
2. [SpecEndpointsInterface](./SpecEndpointsInterface.md) `$specEndpoints`

::: tip RETURN
SpecIndexMapInterface
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$specEndpoints` for `$routeName`.

---

### hasKey()

Indicates whether the instance has a spec endpoints identified by `$routeName`.

#### Parameters

1. string `$routeName`

::: tip RETURN
bool
:::

---

### get()

Returns the route endpoint spec identified by its `$key`.

#### Parameters

1. string `$routeName`

::: danger THROWS
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md)
:::

::: tip RETURN
[SpecEndpointsInterface](./SpecEndpointsInterface.md)
:::

---

### getGenerator()

::: tip RETURN
[Generator](https://www.php.net/manual/class.generator)
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
