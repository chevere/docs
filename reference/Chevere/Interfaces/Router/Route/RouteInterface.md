---
editLink: false
---

# RouteInterface

`Chevere\Interfaces\Router\Route\RouteInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Router/Route/RouteInterface.php)

## Description

Describes the component in charge of defining a route.

## Methods

### __construct()

#### Parameters

1. [RoutePathInterface](./RoutePathInterface.md) `$path`

---

### path()

Provides access to the `$path` instance.

::: tip RETURN
[RoutePathInterface](./RoutePathInterface.md)
:::

---

### maker()

Provides access to the file maker.

::: tip RETURN
array
:::

---

### withAddedEndpoint()

Return an instance with the specified added `$routeEndpoint`.

#### Parameters

1. [RouteEndpointInterface](./RouteEndpointInterface.md) `$routeEndpoint`

::: danger THROWS
- [OverflowException](../../../Exceptions/Core/OverflowException.md) 
- [RouteEndpointConflictException](../../../Exceptions/Router/Route/RouteEndpointConflictException.md) 
- [InvalidArgumentException](../../../Exceptions/Core/InvalidArgumentException.md) 
- [OutOfBoundsException](../../../Exceptions/Core/OutOfBoundsException.md) 
- [RouteWildcardConflictException](../../../Exceptions/Router/Route/RouteWildcardConflictException.md) 
:::

::: tip RETURN
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified added `$routeEndpoint`.

This method should allow to override any previous `$routeEndpoint`.

---

### endpoints()

Provides access to the endpoints instance.

::: tip RETURN
[RouteEndpointsInterface](./RouteEndpointsInterface.md)
:::

---
