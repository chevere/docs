---
editLink: false
---

# RouterInterface

`Chevere\Interfaces\Router\RouterInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Router/RouterInterface.php)

## Description

Describes the component in charge of handling routing.

## Methods

### withAddedRoutable

Return an instance with the specified added `$routable`.

::: warning Parameters
- *routable*: [RoutableInterface](./RoutableInterface.md)
- *group*: string
:::

::: danger Throws
- [InvalidArgumentException](../../Exceptions/Core/InvalidArgumentException.md) if `$group` is invalid.
- [OverflowException](../../Exceptions/Core/OverflowException.md) if `$routable` has been already added.
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified added `$routable`.

---

### index

Provides access to the index instance.

::: tip Return
[RouterIndexInterface](./RouterIndexInterface.md)
:::

---

### routables

Provides access to the routables instance.

::: tip Return
[RoutablesInterface](./RoutablesInterface.md)
:::

---

### routeCollector

Provides access to the route collector instance.

::: tip Return
FastRoute\RouteCollector
:::

---
