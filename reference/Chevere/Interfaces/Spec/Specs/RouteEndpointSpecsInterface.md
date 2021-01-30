---
editLink: false
---

# RouteEndpointSpecsInterface

`Chevere\Interfaces\Spec\Specs\RouteEndpointSpecsInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Spec/Specs/RouteEndpointSpecsInterface.php)

## Extends

- [MappedInterface](../../DataStructure/MappedInterface.md)
- [GetGeneratorInterface](../../DataStructure/GetGeneratorInterface.md)
- [KeysInterface](../../DataStructure/KeysInterface.md)
- [Countable](https://www.php.net/manual/class.countable)

## Description

Describes the component in charge of collecting objects implementing `RouteEndpointSpecInterface`.

## Methods

### withPut

Return an instance with the specified `$routeEndpointSpec`.

::: warning Parameters
- *routeEndpointSpec*: [RouteEndpointSpecInterface](./RouteEndpointSpecInterface.md)
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$routeEndpointSpec`.

---

### has

Indicates whether the instance has a route endpoint spec identified by its `$methodName`.

::: warning Parameters
- *methodName*: string
:::

::: tip Return
bool
:::

---

### get

Returns the route endpoint spec identified by its `$methodName`.

::: warning Parameters
- *methodName*: string
:::

::: danger Throws
- [OutOfBoundsException](../../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip Return
[RouteEndpointSpecInterface](./RouteEndpointSpecInterface.md)
:::

---

### getGenerator

::: tip Return
[Generator](https://www.php.net/manual/class.generator)
:::

---

### keys

Provides access to the object keys.

::: tip Return
array
:::

---
