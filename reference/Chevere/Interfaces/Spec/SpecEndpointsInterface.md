---
editLink: false
---

# SpecEndpointsInterface

`Chevere\Interfaces\Spec\SpecEndpointsInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/Spec/SpecEndpointsInterface.php)

## Extends

- [MappedInterface](../DataStructure/MappedInterface.md)
- [GetIteratorInterface](../DataStructure/GetIteratorInterface.md)
- [KeysInterface](../DataStructure/KeysInterface.md)
- [Countable](https://www.php.net/manual/class.countable)

## Description

Describes the component in charge of collecting objects implementing `RouteEndpointSpecInterface`.

## Methods

### withPut

Return an instance with the specified `$routeEndpointSpec`.

::: warning Parameters
- *routeEndpointSpec*: Specs/RouteEndpointSpecInterface.md
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$routeEndpointSpec`.

---

### has

Indicates whether the instance has a route endpoint identified by its `$methodName`.

::: warning Parameters
- *methodName*: string
:::

::: tip Return
bool
:::

---

### get

Returns the group spec identified by its `$methodName`.

::: warning Parameters
- *methodName*: string
:::

::: danger Throws
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip Return
string
:::

---

### keys

Provides access to the object keys.

::: tip Return
array
:::

---

### getIterator

::: tip Return
[Iterator](https://www.php.net/manual/class.iterator)
:::

---
