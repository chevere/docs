---
editLink: false
---

# RouterIndex

`Chevere\Components\Router\RouterIndex`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Components/Router/RouterIndex.php)

## Implements

- [RouterIndexInterface](../../Interfaces/Router/RouterIndexInterface.md)
- [ToArrayInterface](../../Interfaces/Common/ToArrayInterface.md)

## Methods

### __construct

---

### withAddedRoutable

::: warning Parameters
- *routable*: [RoutableInterface](../../Interfaces/Router/RoutableInterface.md)
- *group*: string
:::

::: tip Return
[RouterIndexInterface](../../Interfaces/Router/RouterIndexInterface.md)
:::

---

### hasRouteName

::: warning Parameters
- *name*: string
:::

::: tip Return
bool
:::

---

### getRouteIdentifier

::: warning Parameters
- *name*: string
:::

::: danger Throws
- [TypeException](../../Exceptions/Core/TypeException.md) 
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip Return
[RouteIdentifierInterface](../../Interfaces/Router/RouteIdentifierInterface.md)
:::

---

### hasGroup

::: warning Parameters
- *group*: string
:::

::: tip Return
bool
:::

---

### getGroupRouteNames

::: warning Parameters
- *group*: string
:::

::: danger Throws
- [TypeException](../../Exceptions/Core/TypeException.md) 
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip Return
array
:::

---

### getRouteGroup

::: warning Parameters
- *group*: string
:::

::: danger Throws
- [TypeException](../../Exceptions/Core/TypeException.md) 
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip Return
string
:::

---

### toArray

::: tip Return
array
:::

---
