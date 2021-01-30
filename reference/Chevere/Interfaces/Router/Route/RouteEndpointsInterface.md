---
editLink: false
---

# RouteEndpointsInterface

`Chevere\Interfaces\Router\Route\RouteEndpointsInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Router/Route/RouteEndpointsInterface.php)

## Extends

- [MappedInterface](../../DataStructure/MappedInterface.md)
- [GetGeneratorInterface](../../DataStructure/GetGeneratorInterface.md)
- [KeysInterface](../../DataStructure/KeysInterface.md)
- [Countable](https://www.php.net/manual/class.countable)

## Description

Describes the component in charge of collecting objects implementing `RouteEndpointInterface`.

## Methods

### withPut

Return an instance with the specified `$routeEndpoint`.

::: warning Parameters
- *routeEndpoint*: [RouteEndpointInterface](./RouteEndpointInterface.md)
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$routeEndpoint`.

---

### hasKey

Returns a boolean indicating whether the instance has `$key`.

::: warning Parameters
- *key*: string
:::

::: tip Return
bool
:::

---

### get

Provides access to the RouteEndpointInterface identified by `$key`.

::: warning Parameters
- *key*: string
:::

::: danger Throws
- [OutOfBoundsException](../../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip Return
[RouteEndpointInterface](./RouteEndpointInterface.md)
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
