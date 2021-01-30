---
editLink: false
---

# RouteDecoratorInterface

`Chevere\Interfaces\Router\Route\RouteDecoratorInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Router/Route/RouteDecoratorInterface.php)

## Description

Describes the component in charge of decorate a route.

## Methods

### __construct()

**Parameters:**

- *locator*: [RouteLocatorInterface](./RouteLocatorInterface.md)

---

### locator()

Provides access to the route name.

::: tip RETURN
[RouteLocatorInterface](./RouteLocatorInterface.md)
:::

---

### withWildcards()

Return an instance with the specified `$wildcards` instance.

**Parameters:**

- *wildcards*: [WildcardsInterface](./WildcardsInterface.md)

::: tip RETURN
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$wildcards` instance.

---

### wildcards()

Provides access to the route wildcards.

::: tip RETURN
[WildcardsInterface](./WildcardsInterface.md)
:::

---
