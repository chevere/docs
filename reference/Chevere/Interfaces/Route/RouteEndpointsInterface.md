---
editLink: false
---

# RouteEndpointsInterface

`Chevere\Interfaces\Route\RouteEndpointsInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Route/RouteEndpointsInterface.php)

## Implements

- [DsMapInterface](../DataStructures/DsMapInterface.md)
- [Countable](https://www.php.net/manual/class.countable)

## Description

Describes the component in charge of collecting objects implementing `RouteEndpointInterface`.

## Methods

### withPut()

Return an instance with the specified `$routeEndpoint`.

#### Parameters

1. [RouteEndpointInterface](./RouteEndpointInterface.md) `$routeEndpoint`

::: tip RETURN
RouteEndpointsInterface
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$routeEndpoint`.

---

### hasKey()

Returns a boolean indicating whether the instance has `$key`.

#### Parameters

1. string `$key`

::: tip RETURN
bool
:::

---

### get()

Provides access to the RouteEndpointInterface identified by `$key`.

#### Parameters

1. string `$key`

::: danger THROWS
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md)
:::

::: tip RETURN
[RouteEndpointInterface](./RouteEndpointInterface.md)
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
