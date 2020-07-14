---
editLink: false
---

# RouterDispatcherInterface

`Chevere\Interfaces\Router\RouterDispatcherInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Router/RouterDispatcherInterface.php)

## Description

Describes the component in charge of dispatch router.

## Methods

### __construct()

**Parameters**

1. FastRoute\RouteCollector `$routeCollector`

---

### dispatch()

**Parameters**

1. string `$httpMethod`
2. string `$uri`

::: danger THROWS
- [RouterException](../../Exceptions/Router/RouterException.md)
if the route is not found or the method not allowed
- ⚠ Unknown type `LogicException` declared in `@throws` tag`
:::

::: tip RETURN
[RoutedInterface](./RoutedInterface.md)
:::

---
