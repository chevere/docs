---
editLink: false
---

# RouteSpecInterface

`Chevere\Interfaces\Spec\Specs\RouteSpecInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/Spec/Specs/RouteSpecInterface.php)

## Extends

- [SpecInterface](../SpecInterface.md)
- [ToArrayInterface](../../Common/ToArrayInterface.md)

## Description

Describes the component in charge of defining a route spec.

## Methods

### __construct

::: warning Parameters
- *specDir*: [DirInterface](../../Filesystem/DirInterface.md)
- *route*: [RouteInterface](../../Router/Route/RouteInterface.md)
- *repository*: string
:::

---

### clonedRouteEndpointSpecs

Provides access to a cloned `RouteEndpointSpecs` which doesn't affects the object instance used in `toArray`.

::: tip Return
[RouteEndpointSpecs](../../../Components/Spec/Specs/RouteEndpointSpecs.md)
:::

---

### jsonPath

Provides access to the json path.

::: tip Return
string
:::

---

### key

Provides access to the key.

::: tip Return
string
:::

---

### toArray

Returns an array, representing the object itself or some of its data/properties.

::: tip Return
array
:::

---
