---
editLink: false
---

# SpecIndexInterface

`Chevere\Interfaces\Spec\SpecIndexInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Spec/SpecIndexInterface.php)

## Extends

- [MappedInterface](../DataStructure/MappedInterface.md)
- [GetGeneratorInterface](../DataStructure/GetGeneratorInterface.md)
- [KeysInterface](../DataStructure/KeysInterface.md)
- [Countable](https://www.php.net/manual/class.countable)

## Description

Describes the component in charge of indexing endpoint specs for each route.

## Methods

### withAddedRoute

Return an instance with the specified `$routeEndpointSpec` for `$routeName`.

::: warning Parameters
- *routeName*: string
- *routeEndpointSpec*: Specs/RouteEndpointSpecInterface.md
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$routeEndpointSpec` for `$routeName`.

---

### has

Indicates whether the instance has a route endpoint spec for `$routeName` at the given `$methodName`.

::: warning Parameters
- *routeName*: string
- *methodName*: string
:::

::: tip Return
bool
:::

---

### get

Returns the spec path.

::: warning Parameters
- *routeName*: string
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

### getGenerator

Provides the generator.

::: tip Return
[Generator](https://www.php.net/manual/class.generator)
:::

---
