---
editLink: false
---

# RouterIndexInterface

`Chevere\Interfaces\Router\RouterIndexInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/Router/RouterIndexInterface.php)

## Extends

- [ToArrayInterface](../Common/ToArrayInterface.md)

## Description

Describes the component in charge of indexing named routes.

## Methods

### withAddedRoutable

Return an instance with the specified `$routable` added.

::: warning Parameters
- *routable*: [RoutableInterface](./RoutableInterface.md)
- *group*: string
:::

::: danger Throws
- [InvalidArgumentException](../../Exceptions/Core/InvalidArgumentException.md) 
- [OverflowException](../../Exceptions/Core/OverflowException.md) 
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$routable` added.

---

### hasRouteName

Indicates whether the instance has a route identified by its `$name`.

::: warning Parameters
- *name*: string
:::

::: tip Return
bool
:::

---

### getRouteIdentifier

Returns the route identifier for the given route `$name`.

::: warning Parameters
- *name*: string
:::

::: danger Throws
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip Return
[RouteIdentifierInterface](./RouteIdentifierInterface.md)
:::

---

### hasGroup

Indicates whether the instance has routes for the given `$group`.

::: warning Parameters
- *group*: string
:::

::: tip Return
bool
:::

---

### getGroupRouteNames

Returns an array containing the route names for the given `$group`.

::: warning Parameters
- *group*: string
:::

::: danger Throws
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip Return
array
:::

---

### getRouteGroup

Returns the route group for the route identified by its `$name`.

::: warning Parameters
- *group*: string
:::

::: danger Throws
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip Return
string
:::

---

### toArray

Returns an array, representing the object itself or some of its data/properties.

::: tip Return
array
:::

---
