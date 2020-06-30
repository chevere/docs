# RouteEndpointsInterface

`Chevere\Interfaces\Route\RouteEndpointsInterface`

[view source](https://github.com/chevere/chevere/blob/master//home/rodolfo/git/chevere/chevere/interfaces/Route/RouteEndpointsInterface.php)

## Extends

- [DsMapInterface]()
- [Countable]()

## Methods

### keys()

#### Return

array

---

### withPut()

> Return an instance with the specified RouteEndpoint.

This method MUST retain the state of the current instance, and return
an instance that contains the specified RouteEndpoint.

#### Parameters

- [RouteEndpointInterface](./RouteEndpointInterface.md) `$routeEndpoint`

#### Return

RouteEndpointsInterface

---

### hasKey()

> Returns a boolean indicating whether the instance has $key.

#### Parameters

- string `$key`

#### Return

bool

---

### get()

> Provides access to the RouteEndpointInterface identified by $key.

#### Parameters

- string `$key`

#### Return

[RouteEndpointInterface](./RouteEndpointInterface.md)

---

### map()

#### Return

Ds\Map

---

### count()

#### Return

void

---

