---
editLink: false
---

# RouterIndex

`Chevere\Components\Router\RouterIndex`

[view source](https://github.com/chevere/chevere/blob/master/Router/RouterIndex.php)

## Implements

- [RouterIndexInterface](../../Interfaces/Router/RouterIndexInterface.md)
- [ToArrayInterface](../../Interfaces/Common/ToArrayInterface.md)

## Methods

### __construct()

---

### withAddedRoutable()

#### Parameters

1. [RoutableInterface](../../Interfaces/Router/RoutableInterface.md) `$routable`
2. string `$group`

::: tip RETURN
[RouterIndexInterface](../../Interfaces/Router/RouterIndexInterface.md)
:::

---

### hasRouteName()

#### Parameters

1. string `$name`

::: tip RETURN
bool
:::

---

### getRouteIdentifier()

#### Parameters

1. string `$name`

::: danger THROWS
- [TypeException](../../Exceptions/Core/TypeException.md) 
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip RETURN
[RouteIdentifierInterface](../../Interfaces/Router/RouteIdentifierInterface.md)
:::

---

### hasGroup()

#### Parameters

1. string `$group`

::: tip RETURN
bool
:::

---

### getGroupRouteNames()

#### Parameters

1. string `$group`

::: danger THROWS
- [TypeException](../../Exceptions/Core/TypeException.md) 
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip RETURN
array
:::

---

### getRouteGroup()

#### Parameters

1. string `$group`

::: danger THROWS
- [TypeException](../../Exceptions/Core/TypeException.md) 
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip RETURN
string
:::

---

### toArray()

::: tip RETURN
array
:::

---
