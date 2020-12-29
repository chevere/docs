---
editLink: false
---

# Wildcards

`Chevere\Components\Router\Route\Wildcards`

[view source](https://github.com/chevere/chevere/blob/master/Router/Route/Wildcards.php)

## Implements

- [WildcardsInterface](../../../Interfaces/Router/Route/WildcardsInterface.md)
- [Countable](https://www.php.net/manual/class.countable)
- [KeysInterface](../../../Interfaces/DataStructure/KeysInterface.md)
- [GetGeneratorInterface](../../../Interfaces/DataStructure/GetGeneratorInterface.md)
- [ToArrayInterface](../../../Interfaces/Common/ToArrayInterface.md)
- [MappedInterface](../../../Interfaces/DataStructure/MappedInterface.md)

## Methods

### __construct()

---

### __clone()

::: tip RETURN
void
:::

---

### withAddedWildcard()

#### Parameters

1. [RouteWildcardInterface](../../../Interfaces/Router/Route/RouteWildcardInterface.md) `$routeWildcard`

::: tip RETURN
[WildcardsInterface](../../../Interfaces/Router/Route/WildcardsInterface.md)
:::

---

### has()

#### Parameters

1. string `$wildcardName`

::: tip RETURN
bool
:::

---

### get()

#### Parameters

1. string `$wildcardName`

::: tip RETURN
[RouteWildcardInterface](../../../Interfaces/Router/Route/RouteWildcardInterface.md)
:::

---

### hasPos()

#### Parameters

1. int `$pos`

::: tip RETURN
bool
:::

---

### getPos()

#### Parameters

1. int `$pos`

::: tip RETURN
[RouteWildcardInterface](../../../Interfaces/Router/Route/RouteWildcardInterface.md)
:::

---

### keys()

::: tip RETURN
array
:::

---

### count()

::: tip RETURN
int
:::

---

### getGenerator()

::: tip RETURN
[Generator](https://www.php.net/manual/class.generator)
:::

---

### toArray()

::: tip RETURN
array
:::

---
