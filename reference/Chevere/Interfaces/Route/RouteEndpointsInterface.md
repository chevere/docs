---
editLink: false
---

# RouteEndpointsInterface

`Chevere\Interfaces\Route\RouteEndpointsInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Route/RouteEndpointsInterface.php)

## Implements

- [DsMapInterface](../DataStructures/DsMapInterface.md)
- [Countable](https://www.php.net/manual/class.countable)

## Methods

### keys()

::: tip RETURN
array
:::

---

### withPut()

Return an instance with the specified RouteEndpoint.

**Parameters**

1. [RouteEndpointInterface](./RouteEndpointInterface.md) `$routeEndpoint`

::: tip RETURN
RouteEndpointsInterface
:::
This method MUST retain the state of the current instance, and return
an instance that contains the specified RouteEndpoint.

---

### hasKey()

Returns a boolean indicating whether the instance has $key.

**Parameters**

1. string `$key`

::: tip RETURN
bool
:::

---

### get()

Provides access to the RouteEndpointInterface identified by $key.

**Parameters**

1. string `$key`

::: tip RETURN
[RouteEndpointInterface](./RouteEndpointInterface.md)
:::

---

### map()

::: tip RETURN
Ds\Map
:::

---

