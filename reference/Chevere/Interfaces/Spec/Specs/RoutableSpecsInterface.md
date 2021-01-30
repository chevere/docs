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

### withPut

Return an instance with the specified `$routableSpec`.

::: warning Parameters
- *routableSpec*: [RoutableSpecInterface](./RoutableSpecInterface.md)
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$routableSpec`.

---

### has

Indicates whether the instance has a routable spec identified by its `$routeName`.

::: warning Parameters
- *routeName*: string
:::

::: tip Return
bool
:::

---

### get

Returns the routable spec identified by its `$routeName`.

::: warning Parameters
- *routeName*: string
:::

::: danger Throws
- [OutOfBoundsException](../../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip Return
[RoutableSpecInterface](./RoutableSpecInterface.md)
:::

---

### getGenerator

::: tip Return
[Generator](https://www.php.net/manual/class.generator)
:::

---

### keys

Provides access to the object keys.

::: tip Return
array
:::

---
