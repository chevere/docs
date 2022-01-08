---
editLink: false
---

# RouterInterface

`Chevere\Interfaces\Router\RouterInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/Router/RouterInterface.php)

## Description

Describes the component in charge of handling routing.

## Methods

### withAddedRoute

Return an instance with the specified added `$route`.

::: warning Parameters
- *group*: string
- *route*: Route/RouteInterface.md
:::

::: danger Throws
- [InvalidArgumentException](../../Exceptions/Core/InvalidArgumentException.md) if `$group` is invalid.
- [OverflowException](../../Exceptions/Core/OverflowException.md) if `$route` has been already added.
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified added `$route`.

---

### index

Provides access to the index instance.

::: tip Return
[RouterIndexInterface](./RouterIndexInterface.md)
:::

---

### routes

Provides access to the routes instance.

::: tip Return
[RoutesInterface](./RoutesInterface.md)
:::

---

### routeCollector

Provides access to the route collector instance.

::: tip Return
FastRoute\RouteCollector
:::

---
