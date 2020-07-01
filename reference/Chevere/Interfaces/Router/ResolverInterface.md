---
editLink: false
---

# ResolverInterface

`Chevere\Interfaces\Router\ResolverInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Router/ResolverInterface.php)

## Methods

### __construct()

**Parameters**

1. [RouterCacheInterface](./RouterCacheInterface.md) `$cache`

---

### resolve()

Returns a RoutedInterface for the given UriInterface.

**Parameters**

1. Psr\Http\Message\UriInterface `$uri`

::: danger THROWS
[RouterException](../../Exceptions/Router/RouterException.md)
if the router encounters any fatal error (UnserializeException, TypeError, etc)
:::

::: danger THROWS
[RouteNotFoundException](../../Exceptions/Router/RouteNotFoundException.md)
if no route resolves the given UriInterface
:::

::: tip RETURN
[RoutedInterface](./RoutedInterface.md)
:::

---
