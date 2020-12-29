---
editLink: false
---

# RouterIndexInterface

`Chevere\Interfaces\Router\RouterIndexInterface`

[view source](https://github.com/chevere/chevere/blob/master/Router/RouterIndexInterface.php)

## Extends

- [ToArrayInterface](../Common/ToArrayInterface.md)

## Description

Describes the component in charge of indexing named routes.

## Methods

### withAddedRoutable()

Return an instance with the specified `$routable` added.

#### Parameters

1. [RoutableInterface](./RoutableInterface.md) `$routable`
2. string `$group`

::: danger THROWS
- [InvalidArgumentException](../../Exceptions/Core/InvalidArgumentException.md) 
- [OverflowException](../../Exceptions/Core/OverflowException.md) 
:::

::: tip RETURN
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$routable` added.

---

### hasRouteName()

Indicates whether the instance has a route identified by its `$name`.

#### Parameters

1. string `$name`

::: tip RETURN
bool
:::

---

### getRouteIdentifier()

Returns the route identifier for the given route `$name`.

#### Parameters

1. string `$name`

::: danger THROWS
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip RETURN
[RouteIdentifierInterface](./RouteIdentifierInterface.md)
:::

---

### hasGroup()

Indicates whether the instance has routes for the given `$group`.

#### Parameters

1. string `$group`

::: tip RETURN
bool
:::

---

### getGroupRouteNames()

Returns an array containing the route names for the given `$group`.

#### Parameters

1. string `$group`

::: danger THROWS
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip RETURN
array
:::

---

### getRouteGroup()

Returns the route group for the route identified by its `$name`.

#### Parameters

1. string `$group`

::: danger THROWS
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip RETURN
string
:::

---

### toArray()

Returns an array, representing the object itself or some of its data/properties.

::: tip RETURN
array
:::

---
