---
editLink: false
---

# RoutableSpecsInterface

`Chevere\Interfaces\Spec\Specs\RoutableSpecsInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Spec/Specs/RoutableSpecsInterface.php)

## Extends

- [MappedInterface](../../DataStructure/MappedInterface.md)
- [GetGeneratorInterface](../../DataStructure/GetGeneratorInterface.md)
- [KeysInterface](../../DataStructure/KeysInterface.md)
- [Countable](https://www.php.net/manual/class.countable)

## Description

Describes the component in charge of collecting objects implementing `RoutableSpecInterface`.

## Methods

### withPut()

Return an instance with the specified `$routableSpec`.

#### Parameters

1. [RoutableSpecInterface](./RoutableSpecInterface.md) `$routableSpec`

::: tip RETURN
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$routableSpec`.

---

### has()

Indicates whether the instance has a routable spec identified by its `$routeName`.

#### Parameters

1. string `$routeName`

::: tip RETURN
bool
:::

---

### get()

Returns the routable spec identified by its `$routeName`.

#### Parameters

1. string `$routeName`

::: danger THROWS
- [OutOfBoundsException](../../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip RETURN
[RoutableSpecInterface](./RoutableSpecInterface.md)
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
