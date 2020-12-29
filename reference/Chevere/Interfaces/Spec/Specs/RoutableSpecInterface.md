---
editLink: false
---

# RoutableSpecInterface

`Chevere\Interfaces\Spec\Specs\RoutableSpecInterface`

[view source](https://github.com/chevere/chevere/blob/master/Spec/Specs/RoutableSpecInterface.php)

## Extends

- [SpecInterface](../SpecInterface.md)
- [ToArrayInterface](../../Common/ToArrayInterface.md)

## Description

Describes the component in charge of defining a routable spec.

## Methods

### __construct()

#### Parameters

1. [DirInterface](../../Filesystem/DirInterface.md) `$specDir`
2. [RoutableInterface](../../Router/RoutableInterface.md) `$routable`
3. string `$repository`

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
