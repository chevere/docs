---
editLink: false
---

# RouteEndpointSpecsInterface

`Chevere\Interfaces\Spec\Specs\RouteEndpointSpecsInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Spec/Specs/RouteEndpointSpecsInterface.php)

## Implements

- [DsMapInterface](../../DataStructures/DsMapInterface.md)
- [Countable](https://www.php.net/manual/class.countable)

## Description

Describes the component in charge of collecting objects implementing `RouteEndpointSpecInterface`.

## Methods

### withPut()

Return an instance with the specified `$routeEndpointSpec`.

#### Parameters

1. [RouteEndpointSpecInterface](./RouteEndpointSpecInterface.md) `$routeEndpointSpec`

::: tip RETURN
RouteEndpointSpecsInterface
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$routeEndpointSpec`.

---

### has()

Indicates whether the instance has a route endpoint spec identified by its `$methodName`.

#### Parameters

1. string `$methodName`

::: tip RETURN
bool
:::

---

### get()

Returns the route endpoint spec identified by its `$methodName`.

#### Parameters

1. string `$methodName`

::: danger THROWS
- [OutOfBoundsException](../../../Exceptions/Core/OutOfBoundsException.md)
:::

::: tip RETURN
[RouteEndpointSpecInterface](./RouteEndpointSpecInterface.md)
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
