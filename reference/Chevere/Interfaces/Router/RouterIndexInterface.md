---
editLink: false
---

# RouterIndexInterface

`Chevere\Interfaces\Router\RouterIndexInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Router/RouterIndexInterface.php)

## Implements

- [ToArrayInterface](../To/ToArrayInterface.md)

## Methods

### withAdded()

Return an instance with the specified values.

**Parameters**

1. [RoutableInterface](./RoutableInterface.md) `$routable`
2. string `$group`

::: tip RETURN
RouterIndexInterface
:::
This method MUST retain the state of the current instance, and return
an instance that contains the specified values.

---

### hasRouteName()

**Parameters**

1. string `$routeName`

::: tip RETURN
bool
:::

---

### getRouteIdentifier()

**Parameters**

1. string `$routeName`

::: tip RETURN
[RouteIdentifierInterface](./RouteIdentifierInterface.md)
:::

---

### hasGroup()

**Parameters**

1. string `$group`

::: tip RETURN
bool
:::

---

### getGroupRouteNames()

**Parameters**

1. string `$group`

::: tip RETURN
array
:::

---

### getRouteGroup()

**Parameters**

1. string `$routeName`

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

