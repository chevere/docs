---
editLink: false
---

# RoutableInterface

`Chevere\Interfaces\Router\RoutableInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Router/RoutableInterface.php)

## Description

Determines if a RouteInterface is able to be routed.

## Methods

### __construct()

**Parameters**

1. [RouteInterface](../Route/RouteInterface.md) `$route`
::: danger THROWS
[RouteNotRoutableException](../../Exceptions/Router/RouteNotRoutableException.md)
:::
::: danger THROWS
[RouteWithoutEndpointsException](../../Exceptions/Router/RouteWithoutEndpointsException.md)
:::

---

### route()

Provides access to the RouteInterface instance.

::: tip RETURN
[RouteInterface](../Route/RouteInterface.md)
:::

---

