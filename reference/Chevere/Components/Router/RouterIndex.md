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

### __construct()

---

### withAddedRoutable()

**Parameters:**

- *routable*: [RoutableInterface](../../Interfaces/Router/RoutableInterface.md)
- *group*: string

::: tip RETURN
[RouterIndexInterface](../../Interfaces/Router/RouterIndexInterface.md)
:::

---

### hasRouteName()

**Parameters:**

- *name*: string

::: tip RETURN
bool
:::

---

### getRouteIdentifier()

**Parameters:**

- *name*: string

::: danger THROWS
- [TypeException](../../Exceptions/Core/TypeException.md) 
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip RETURN
[RouteIdentifierInterface](../../Interfaces/Router/RouteIdentifierInterface.md)
:::

---

### hasGroup()

**Parameters:**

- *group*: string

::: tip RETURN
bool
:::

---

### getGroupRouteNames()

**Parameters:**

- *group*: string

::: danger THROWS
- [TypeException](../../Exceptions/Core/TypeException.md) 
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip RETURN
array
:::

---

### getRouteGroup()

**Parameters:**

- *group*: string

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
