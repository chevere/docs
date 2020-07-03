---
editLink: false
---

# RouteInterface

`Chevere\Interfaces\Route\RouteInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Route/RouteInterface.php)

## Methods

### __construct()

**Parameters**

1. [RouteNameInterface](./RouteNameInterface.md) `$name`
2. [RoutePathInterface](./RoutePathInterface.md) `$routePath`

::: danger THROWS
- [RouteNameInvalidException](../../Exceptions/Route/RouteNameInvalidException.md)
if $name doesn't match REGEX_NAME
:::

---

### name()

Provides access to the route name (if any).

::: tip RETURN
[RouteNameInterface](./RouteNameInterface.md)
:::

---

### path()

Provides access to the RoutePathInterface instance.

::: tip RETURN
[RoutePathInterface](./RoutePathInterface.md)
:::

---

### maker()

Provides access to the file maker array.

::: tip RETURN
array
:::

---

### withAddedEndpoint()

Return an instance with the specified added $routeEndpoint.

**Parameters**

1. [RouteEndpointInterface](./RouteEndpointInterface.md) `$routeEndpoint`

::: tip RETURN
RouteInterface
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified added $routeEndpoint.

This method should allow to override any previous $routeEndpoint.

---

### endpoints()

Provides access to the RouteEndpointsInterface instance.

::: tip RETURN
[RouteEndpointsInterface](./RouteEndpointsInterface.md)
:::

---

### withAddedMiddleware()

Return an instance with the specified added $middleware.

**Parameters**

1. Psr\Http\Server\MiddlewareInterface `$middleware`

::: tip RETURN
RouteInterface
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified added $middleware.

---

### middlewareNameCollection()

Provides access to the MiddlewareNameCollectionInterface instance.

::: tip RETURN
[MiddlewaresInterface](../Middleware/MiddlewaresInterface.md)
:::

---
