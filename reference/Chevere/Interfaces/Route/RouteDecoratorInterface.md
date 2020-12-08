---
editLink: false
---

# RouteDecoratorInterface

`Chevere\Interfaces\Route\RouteDecoratorInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Route/RouteDecoratorInterface.php)

## Description

Describes the component in charge of decorate a route.

## Methods

### __construct()

#### Parameters

1. [RouteNameInterface](./RouteNameInterface.md) `$name`

---

### name()

Provides access to the route name.

::: tip RETURN
[RouteNameInterface](./RouteNameInterface.md)
:::

---

### withWildcards()

Return an instance with the specified `$wildcards` instance.

#### Parameters

1. [WildcardsInterface](./WildcardsInterface.md) `$wildcards`

::: tip RETURN
RouteDecoratorInterface
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
