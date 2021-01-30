---
editLink: false
---

# RouteEndpointSpecInterface

`Chevere\Interfaces\Spec\Specs\RouteEndpointSpecInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Spec/Specs/RouteEndpointSpecInterface.php)

## Extends

- [SpecInterface](../SpecInterface.md)
- [ToArrayInterface](../../Common/ToArrayInterface.md)

## Description

Describes the component in charge of defining a route endpoint spec.

## Methods

### __construct

::: warning Parameters
- *specDir*: [DirInterface](../../Filesystem/DirInterface.md)
- *routeEndpoint*: [RouteEndpointInterface](../../Router/Route/RouteEndpointInterface.md)
:::

::: danger Throws
- [InvalidArgumentException](../../../Exceptions/Core/InvalidArgumentException.md) 
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
