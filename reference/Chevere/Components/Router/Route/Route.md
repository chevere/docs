---
editLink: false
---

# Route

`Chevere\Components\Router\Route\Route`

[view source](https://github.com/chevere/chevere/blob/master/Router/Route/Route.php)

## Implements

- [RouteInterface](../../../Interfaces/Router/Route/RouteInterface.md)

## Methods

### __construct()

#### Parameters

1. [RoutePathInterface](../../../Interfaces/Router/Route/RoutePathInterface.md) `$routePath`

---

### path()

::: tip RETURN
[RoutePathInterface](../../../Interfaces/Router/Route/RoutePathInterface.md)
:::

---

### maker()

::: tip RETURN
array
:::

---

### withAddedEndpoint()

#### Parameters

1. [RouteEndpointInterface](../../../Interfaces/Router/Route/RouteEndpointInterface.md) `$endpoint`

::: tip RETURN
[RouteInterface](../../../Interfaces/Router/Route/RouteInterface.md)
:::

---

### endpoints()

::: tip RETURN
[RouteEndpointsInterface](../../../Interfaces/Router/Route/RouteEndpointsInterface.md)
:::

---

### assertUnique()

#### Parameters

1. [RouteEndpointInterface](../../../Interfaces/Router/Route/RouteEndpointInterface.md) `$endpoint`

::: tip RETURN
void
:::

---

### assertNoConflict()

#### Parameters

1. [RouteEndpointInterface](../../../Interfaces/Router/Route/RouteEndpointInterface.md) `$endpoint`

::: tip RETURN
void
:::

---

### assertWildcardEndpoint()

#### Parameters

1. [RouteWildcardInterface](../../../Interfaces/Router/Route/RouteWildcardInterface.md) `$wildcard`
2. [RouteEndpointInterface](../../../Interfaces/Router/Route/RouteEndpointInterface.md) `$endpoint`

::: tip RETURN
void
:::

---
