---
editLink: false
---

# RouteEndpointSpecInterface

`Chevere\Interfaces\Spec\Specs\RouteEndpointSpecInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Spec/Specs/RouteEndpointSpecInterface.php)

## Extends

- [SpecInterface](../SpecInterface.md)
- [ToArrayInterface](../../To/ToArrayInterface.md)

## Description

Describes the component in charge of defining a route endpoint spec.

## Methods

### __construct()

#### Parameters

1. [DirInterface](../../Filesystem/DirInterface.md) `$specDir`
2. [RouteEndpointInterface](../../Router/Route/RouteEndpointInterface.md) `$routeEndpoint`

::: danger THROWS
- [InvalidArgumentException](../../../Exceptions/Core/InvalidArgumentException.md) 
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
