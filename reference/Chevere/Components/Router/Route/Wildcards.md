---
editLink: false
---

# Wildcards

`Chevere\Components\Router\Route\Wildcards`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Components/Router/Route/Wildcards.php)

## Implements

- [WildcardsInterface](../../../Interfaces/Router/Route/WildcardsInterface.md)
- [Countable](https://www.php.net/manual/class.countable)
- [KeysInterface](../../../Interfaces/DataStructure/KeysInterface.md)
- [GetIteratorInterface](../../../Interfaces/DataStructure/GetIteratorInterface.md)
- [ToArrayInterface](../../../Interfaces/Common/ToArrayInterface.md)
- [MappedInterface](../../../Interfaces/DataStructure/MappedInterface.md)

## Methods

### __construct

---

### __clone

::: tip Return
void
:::

---

### withPut

::: warning Parameters
- *routeWildcard*: [RouteWildcardInterface](../../../Interfaces/Router/Route/RouteWildcardInterface.md)
:::

::: tip Return
[WildcardsInterface](../../../Interfaces/Router/Route/WildcardsInterface.md)
:::

---

### has

::: warning Parameters
- *wildcardName*: string
:::

::: tip Return
bool
:::

---

### get

::: warning Parameters
- *wildcardName*: string
:::

::: tip Return
[RouteWildcardInterface](../../../Interfaces/Router/Route/RouteWildcardInterface.md)
:::

---

### hasPos

::: warning Parameters
- *pos*: int
:::

::: tip Return
bool
:::

---

### getPos

::: warning Parameters
- *pos*: int
:::

::: tip Return
[RouteWildcardInterface](../../../Interfaces/Router/Route/RouteWildcardInterface.md)
:::

---

### keys

::: tip Return
array
:::

---

### count

::: tip Return
int
:::

---

### getIterator

::: tip Return
[Iterator](https://www.php.net/manual/class.iterator)
:::

---

### toArray

::: tip Return
array
:::

---
