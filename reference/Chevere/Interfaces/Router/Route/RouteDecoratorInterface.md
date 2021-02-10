---
editLink: false
---

# RouteDecoratorInterface

`Chevere\Interfaces\Router\Route\RouteDecoratorInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/Router/Route/RouteDecoratorInterface.php)

## Description

Describes the component in charge of decorate a route.

## Methods

### __construct

::: warning Parameters
- *locator*: [RouteLocatorInterface](./RouteLocatorInterface.md)
:::

---

### locator

Provides access to the route name.

::: tip Return
[RouteLocatorInterface](./RouteLocatorInterface.md)
:::

---

### withWildcards

Return an instance with the specified `$wildcards` instance.

::: warning Parameters
- *wildcards*: [WildcardsInterface](./WildcardsInterface.md)
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$wildcards` instance.

---

### wildcards

Provides access to the route wildcards.

::: tip Return
[WildcardsInterface](./WildcardsInterface.md)
:::

---
