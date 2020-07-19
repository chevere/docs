---
editLink: false
---

# RoutablesInterface

`Chevere\Interfaces\Router\RoutablesInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Router/RoutablesInterface.php)

## Implements

- [DsMapInterface](../DataStructures/DsMapInterface.md)
- [Countable](https://www.php.net/manual/class.countable)

## Description

Describes the component in charge of collecting objects implementing `RoutableInterface`.

## Methods

### withPut()

Return an instance with the specified `$routable`.

#### Parameters

1. [RoutableInterface](./RoutableInterface.md) `$routable`

::: tip RETURN
RoutablesInterface
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$routable`.

---

### has()

Indicates whether the instance has a routable identified by its `$name`.

#### Parameters

1. string `$name`

::: tip RETURN
bool
:::

---

### get()

Returns the routable identified by its `$name`.

#### Parameters

1. string `$name`

::: danger THROWS
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md)
:::

::: tip RETURN
[RoutableInterface](./RoutableInterface.md)
:::

---

### getGenerator()

::: tip RETURN
[Generator](https://www.php.net/manual/class.generator)
:::

---

### keys()

Provides access to the map keys.

::: tip RETURN
array
:::

---

### mapCopy()

Provides a deep copy of the internal map.

::: tip RETURN
Ds\Map
:::

---
