---
editLink: false
---

# RouteEndpointsInterface

`Chevere\Interfaces\Router\Route\RouteEndpointsInterface`

[view source](https://github.com/chevere/chevere/blob/master/Router/Route/RouteEndpointsInterface.php)

## Extends

- [MappedInterface](../../DataStructure/MappedInterface.md)
- [GetGeneratorInterface](../../DataStructure/GetGeneratorInterface.md)
- [KeysInterface](../../DataStructure/KeysInterface.md)
- [Countable](https://www.php.net/manual/class.countable)

## Description

Describes the component in charge of collecting objects implementing `RouteEndpointInterface`.

## Methods

### withPut()

Return an instance with the specified `$routeEndpoint`.

#### Parameters

1. [RouteEndpointInterface](./RouteEndpointInterface.md) `$routeEndpoint`

::: tip RETURN
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$routeEndpoint`.

---

### hasKey()

Returns a boolean indicating whether the instance has `$key`.

#### Parameters

1. string `$key`

::: tip RETURN
bool
:::

---

### get()

Provides access to the RouteEndpointInterface identified by `$key`.

#### Parameters

1. string `$key`

::: danger THROWS
- [OutOfBoundsException](../../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip RETURN
[RouteEndpointInterface](./RouteEndpointInterface.md)
:::

---

### getGenerator()

::: tip RETURN
[Generator](https://www.php.net/manual/class.generator)
:::

---

### keys()

Provides access to the object keys.

::: tip RETURN
array
:::

---
