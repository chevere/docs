---
editLink: false
---

# GroupSpecsInterface

`Chevere\Interfaces\Spec\Specs\GroupSpecsInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/Spec/Specs/GroupSpecsInterface.php)

## Extends

- [MappedInterface](../../DataStructure/MappedInterface.md)
- [GetGeneratorInterface](../../DataStructure/GetGeneratorInterface.md)
- [KeysInterface](../../DataStructure/KeysInterface.md)
- [Countable](https://www.php.net/manual/class.countable)

## Description

Describes the component in charge of collecting objects implementing `GroupSpecInterface`.

## Methods

### withPut

Return an instance with the specified `$groupSpec`.

::: warning Parameters
- *groupSpec*: [GroupSpecInterface](./GroupSpecInterface.md)
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$groupSpec`.

---

### has

Indicates whether the instance has a group spec identified by its `$groupName`.

::: warning Parameters
- *groupName*: string
:::

::: tip Return
bool
:::

---

### get

Returns the group spec identified by its `$groupName`.

::: warning Parameters
- *groupName*: string
:::

::: danger Throws
- [OutOfBoundsException](../../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip Return
[GroupSpecInterface](./GroupSpecInterface.md)
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
