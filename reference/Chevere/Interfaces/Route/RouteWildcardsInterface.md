---
editLink: false
---

# RouteWildcardsInterface

`Chevere\Interfaces\Route\RouteWildcardsInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Route/RouteWildcardsInterface.php)

## Implements

- [DsMapInterface](../DataStructures/DsMapInterface.md)
- [Countable](https://www.php.net/manual/class.countable)

## Methods

### withAddedWildcard()

Return an instance with the specified RouteWildcardInterface.

**Parameters**

1. [RouteWildcardInterface](./RouteWildcardInterface.md) `$wildcard`

::: tip RETURN
RouteWildcardsInterface
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified RouteWildcardInterface.

This method should allow to override wildcards.

---

### count()

::: tip RETURN
int
:::

---

### has()

Returns a boolean indicating whether the instance has a given RouteWildcardInterface.

**Parameters**

1. string `$wildcardName`

::: tip RETURN
bool
:::

---

### get()

Provides access to the target RouteWildcardInterface instance.

**Parameters**

1. string `$wildcardName`

::: tip RETURN
[RouteWildcardInterface](./RouteWildcardInterface.md)
:::

---

### hasPos()

Returns a boolean indicating whether the instance has RouteWildcardInterface in the given pos.

**Parameters**

1. int `$pos`

::: tip RETURN
bool
:::

---

### getPos()

Provides access to the target RouteWildcardInterface instance in the given pos.

**Parameters**

1. int `$pos`

::: tip RETURN
[RouteWildcardInterface](./RouteWildcardInterface.md)
:::

---

### getGenerator()

::: tip RETURN
[Generator](https://www.php.net/manual/class.generator)
:::

---

### keys()

::: tip RETURN
array
:::

---

### mapCopy()

::: tip RETURN
Ds\Map
:::

---
