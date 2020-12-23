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

### withAddedRoute()

Return an instance with the specified `$routeEndpointSpec` for `$routeName`.

#### Parameters

1. string `$routeName`
2. Specs/RouteEndpointSpecInterface.md `$routeEndpointSpec`

::: tip RETURN
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$routeEndpointSpec` for `$routeName`.

---

### has()

Indicates whether the instance has a route endpoint spec for `$routeName` at the given `$methodName`.

#### Parameters

1. string `$routeName`
2. string `$methodName`

::: tip RETURN
bool
:::

---

### get()

Returns the spec path.

#### Parameters

1. string `$routeName`
2. string `$methodName`

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
