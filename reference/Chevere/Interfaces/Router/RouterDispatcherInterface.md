---
editLink: false
---

# RouterDispatcherInterface

`Chevere\Interfaces\Router\RouterDispatcherInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/Router/RouterDispatcherInterface.php)

## Description

Describes the component in charge of dispatch router.

## Methods

### __construct

::: warning Parameters
- *routeCollector*: FastRoute\RouteCollector
:::

---

### dispatch

Dispatches against the provided HTTP method verb and URI.

::: warning Parameters
- *httpMethod*: string
- *uri*: string
:::

::: danger Throws
- [RouteNotFoundException](../../Exceptions/Router/RouteNotFoundException.md) 
- [HttpMethodNotAllowedException](../../Exceptions/Http/HttpMethodNotAllowedException.md) 
- [LogicException](../../Exceptions/Core/LogicException.md) if dispatcher returns an unexpected code.
:::

::: tip Return
[RoutedInterface](./RoutedInterface.md)
:::

---
