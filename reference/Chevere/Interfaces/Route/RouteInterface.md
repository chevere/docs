# RouteInterface

`Chevere\Interfaces\Route\RouteInterface`

[view source](https://github.com/chevere/chevere/blob/master//home/rodolfo/git/chevere/chevere/interfaces/Route/RouteInterface.php)

## Methods

### __construct()

#### Parameters

- [RouteNameInterface](./RouteNameInterface.md) `$name`
- [RoutePathInterface](./RoutePathInterface.md) `$routePath`

---

### name()

> Provides access to the route name (if any).

#### Return

[RouteNameInterface](./RouteNameInterface.md)

---

### path()

> Provides access to the RoutePathInterface instance.

#### Return

[RoutePathInterface](./RoutePathInterface.md)

---

### maker()

> Provides access to the file maker array.

#### Return

array

---

### withAddedEndpoint()

> Return an instance with the specified added $routeEndpoint.

This method MUST retain the state of the current instance, and return
an instance that contains the specified added $routeEndpoint.

This method should allow to override any previous $routeEndpoint.

#### Parameters

- [RouteEndpointInterface](./RouteEndpointInterface.md) `$routeEndpoint`

#### Return

RouteInterface

---

### endpoints()

> Provides access to the RouteEndpointsInterface instance.

#### Return

[RouteEndpointsInterface](./RouteEndpointsInterface.md)

---

### withAddedMiddleware()

> Return an instance with the specified added $middleware.

This method MUST retain the state of the current instance, and return
an instance that contains the specified added $middleware.

#### Parameters

- Psr\Http\Server\MiddlewareInterface `$middleware`

#### Return

RouteInterface

---

### middlewareNameCollection()

> Provides access to the MiddlewareNameCollectionInterface instance.

#### Return

[MiddlewaresInterface](../Middleware/MiddlewaresInterface.md)

---

