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

#### Parameters

1. FastRoute\RouteCollector `$routeCollector`

---

### dispatch()

Dispatches against the provided HTTP method verb and URI.

#### Parameters

1. string `$httpMethod`
2. string `$uri`

::: danger THROWS
- [RouteNotFoundException](../../Exceptions/Router/RouteNotFoundException.md)
- [MethodNotAllowedException](../../Exceptions/Http/MethodNotAllowedException.md)
- [LogicException](../../Exceptions/Core/LogicException.md)
if dispatcher returns an unexpected code.
:::

::: tip RETURN
[RoutedInterface](./RoutedInterface.md)
:::

---
