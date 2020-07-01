---
editLink: false
---

# MiddlewaresInterface

`Chevere\Interfaces\Middleware\MiddlewaresInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Middleware/MiddlewaresInterface.php)

## Implements

- [DsMapInterface](../DataStructures/DsMapInterface.md)
- [Countable](https://www.php.net/manual/class.countable)

## Methods

### withAddedMiddleware()

Return an instance with the specified $middleware.

**Parameters**

1. Psr\Http\Server\MiddlewareInterface `$middleware`

::: danger THROWS
[MiddlewareInterfaceException](../../Exceptions/Middleware/MiddlewareInterfaceException.md)
if $name doesn't represent a class implementing the MiddlewareInterface
:::

::: tip RETURN
MiddlewaresInterface
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified $middleware.

---

### has()

Returns a boolean indicating whether the instance has the given MiddlewareNameInterface.

**Parameters**

1. Psr\Http\Server\MiddlewareInterface `$middleware`

::: tip RETURN
bool
:::

---

### keys()

::: tip RETURN
array
:::

---

### map()

::: tip RETURN
Ds\Map
:::

---
