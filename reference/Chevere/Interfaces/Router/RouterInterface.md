---
editLink: false
---

# RouterInterface

`Chevere\Interfaces\Router\RouterInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Router/RouterInterface.php)

## Description

Describes the component in charge of handling routing.

## Methods

### withAddedRoutable()

Return an instance with the specified added `$routable`.

#### Parameters

1. [RoutableInterface](./RoutableInterface.md) `$routable`
2. string `$group`

::: danger THROWS
- [InvalidArgumentException](../../Exceptions/Core/InvalidArgumentException.md) if `$group` is invalid.
- [OverflowException](../../Exceptions/Core/OverflowException.md) if `$routable` has been already added.
:::

::: tip RETURN
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified added `$routable`.

---

### index()

Provides access to the index instance.

::: tip RETURN
[RouterIndexInterface](./RouterIndexInterface.md)
:::

---

### routables()

Provides access to the routables instance.

::: tip RETURN
[RoutablesInterface](./RoutablesInterface.md)
:::

---

### routeCollector()

Provides access to the route collector instance.

::: tip RETURN
FastRoute\RouteCollector
:::

---
