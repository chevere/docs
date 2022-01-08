---
editLink: false
---

# WildcardsInterface

`Chevere\Interfaces\Router\Route\WildcardsInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/Router/Route/WildcardsInterface.php)

## Extends

- [MappedInterface](../../DataStructure/MappedInterface.md)
- [ToArrayInterface](../../Common/ToArrayInterface.md)
- [GetIteratorInterface](../../DataStructure/GetIteratorInterface.md)
- [KeysInterface](../../DataStructure/KeysInterface.md)
- [Countable](https://www.php.net/manual/class.countable)

## Description

Describes the component in charge of collecting objects implementing `RouteWildcardInterface`.

## Methods

### withPut

Return an instance with the specified `$wildcard`.

::: warning Parameters
- *wildcard*: [RouteWildcardInterface](./RouteWildcardInterface.md)
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$wildcard`.

This method should overrides existing wildcards.

---

### has

Returns a boolean indicating whether the instance has a given RouteWildcardInterface.

::: warning Parameters
- *wildcardName*: string
:::

::: tip Return
bool
:::

---

### get

Provides access to the target RouteWildcardInterface instance.

::: warning Parameters
- *wildcardName*: string
:::

::: tip Return
[RouteWildcardInterface](./RouteWildcardInterface.md)
:::

---

### hasPos

Returns a boolean indicating whether the instance has RouteWildcardInterface in the given pos.

::: warning Parameters
- *pos*: int
:::

::: tip Return
bool
:::

---

### getPos

Provides access to the target RouteWildcardInterface instance in the given pos.

::: warning Parameters
- *pos*: int
:::

::: tip Return
[RouteWildcardInterface](./RouteWildcardInterface.md)
:::

---

### getIterator

::: tip Return
[Iterator](https://www.php.net/manual/class.iterator)
:::

---

### keys

Provides access to the object keys.

::: tip Return
array
:::

---

### toArray

Returns an array, representing the object itself or some of its data/properties.

::: tip Return
array
:::

---
