---
editLink: false
---

# SpecEndpointsInterface

`Chevere\Interfaces\Spec\SpecEndpointsInterface`

[view source](https://github.com/chevere/chevere/blob/master/Spec/SpecEndpointsInterface.php)

## Extends

- [MappedInterface](../DataStructure/MappedInterface.md)
- [GetGeneratorInterface](../DataStructure/GetGeneratorInterface.md)
- [KeysInterface](../DataStructure/KeysInterface.md)
- [Countable](https://www.php.net/manual/class.countable)

## Description

Describes the component in charge of collecting objects implementing `RouteEndpointSpecInterface`.

## Methods

### withPut()

Return an instance with the specified `$routeEndpointSpec`.

#### Parameters

1. Specs/RouteEndpointSpecInterface.md `$routeEndpointSpec`

::: tip RETURN
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$routeEndpointSpec`.

---

### has()

Indicates whether the instance has a route endpoint identified by its `$methodName`.

#### Parameters

1. string `$methodName`

::: tip RETURN
bool
:::

---

### get()

Returns the group spec identified by its `$methodName`.

#### Parameters

1. string `$methodName`

::: danger THROWS
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip RETURN
string
:::

---

### keys()

Provides access to the object keys.

::: tip RETURN
array
:::

---

### getGenerator()

Provides the generator.

::: tip RETURN
[Generator](https://www.php.net/manual/class.generator)
:::

---
