---
editLink: false
---

# WildcardsInterface

`Chevere\Interfaces\Router\Route\WildcardsInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Router/Route/WildcardsInterface.php)

## Extends

- [MappedInterface](../../DataStructures/MappedInterface.md)
- [ToArrayInterface](../../To/ToArrayInterface.md)
- [GetGeneratorInterface](../../DataStructures/GetGeneratorInterface.md)
- [KeysInterface](../../DataStructures/KeysInterface.md)
- [Countable](https://www.php.net/manual/class.countable)

## Description

Describes the component in charge of collecting objects implementing `RouteWildcardInterface`.

## Methods

### withAddedWildcard()

Return an instance with the specified `$wildcard`.

#### Parameters

1. [RouteWildcardInterface](./RouteWildcardInterface.md) `$wildcard`

::: tip RETURN
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$wildcard`.

This method should overrides existing wildcards.

---

### has()

Returns a boolean indicating whether the instance has a given RouteWildcardInterface.

#### Parameters

1. string `$wildcardName`

::: tip RETURN
bool
:::

---

### get()

Provides access to the target RouteWildcardInterface instance.

#### Parameters

1. string `$wildcardName`

::: tip RETURN
[RouteWildcardInterface](./RouteWildcardInterface.md)
:::

---

### hasPos()

Returns a boolean indicating whether the instance has RouteWildcardInterface in the given pos.

#### Parameters

1. int `$pos`

::: tip RETURN
bool
:::

---

### getPos()

Provides access to the target RouteWildcardInterface instance in the given pos.

#### Parameters

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

Provides access to the object keys.

::: tip RETURN
array
:::

---

### toArray()

Returns an array, representing the object itself or some of its data/properties.

::: tip RETURN
array
:::

---
