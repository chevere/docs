---
editLink: false
---

# RoutableSpecInterface

`Chevere\Interfaces\Spec\Specs\RoutableSpecInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Spec/Specs/RoutableSpecInterface.php)

## Implements

- [SpecInterface](../SpecInterface.md)
- [ToArrayInterface](../../To/ToArrayInterface.md)

## Description

Describes the component in charge of defining a routable spec.

## Methods

### __construct()

#### Parameters

1. [SpecPathInterface](../SpecPathInterface.md) `$specGroupPath`
2. [RoutableInterface](../../Router/RoutableInterface.md) `$routable`

---

### clonedRouteEndpointSpecs()

Provides access to a cloned `RouteEndpointSpecs` which doesn't affects the object instance used in `toArray`.

::: tip RETURN
[RouteEndpointSpecs](../../../Components/Spec/Specs/RouteEndpointSpecs.md)
:::

---

### jsonPath()

Provides access to the json path.

::: tip RETURN
string
:::

---

### key()

Provides access to the key.

::: tip RETURN
string
:::

---

### toArray()

Returns an array, representing the object itself or some of its data/properties.

::: tip RETURN
array
:::

---
