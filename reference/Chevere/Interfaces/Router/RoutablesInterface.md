---
editLink: false
---

# RoutablesInterface

`Chevere\Interfaces\Router\RoutablesInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Router/RoutablesInterface.php)

## Extends

- [MappedInterface](../DataStructure/MappedInterface.md)
- [GetGeneratorInterface](../DataStructure/GetGeneratorInterface.md)
- [KeysInterface](../DataStructure/KeysInterface.md)
- [Countable](https://www.php.net/manual/class.countable)

## Description

Describes the component in charge of collecting objects implementing `RoutableInterface`.

## Methods

### withPut()

Return an instance with the specified `$routable`.

**Parameters:**

- *routable*: [RoutableInterface](./RoutableInterface.md)

::: tip RETURN
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$routable`.

---

### has()

Indicates whether the instance has a routable identified by its `$name`.

**Parameters:**

- *name*: string

::: tip RETURN
bool
:::

---

### get()

Returns the routable identified by its `$name`.

**Parameters:**

- *name*: string

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

Provides access to the object keys.

::: tip RETURN
array
:::

---
