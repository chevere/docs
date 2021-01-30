---
editLink: false
---

# GroupSpecsInterface

`Chevere\Interfaces\Spec\Specs\GroupSpecsInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Spec/Specs/GroupSpecsInterface.php)

## Extends

- [MappedInterface](../../DataStructure/MappedInterface.md)
- [GetGeneratorInterface](../../DataStructure/GetGeneratorInterface.md)
- [KeysInterface](../../DataStructure/KeysInterface.md)
- [Countable](https://www.php.net/manual/class.countable)

## Description

Describes the component in charge of collecting objects implementing `GroupSpecInterface`.

## Methods

### withPut()

Return an instance with the specified `$groupSpec`.

**Parameters:**

- *groupSpec*: [GroupSpecInterface](./GroupSpecInterface.md)

::: tip RETURN
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$groupSpec`.

---

### has()

Indicates whether the instance has a group spec identified by its `$groupName`.

**Parameters:**

- *groupName*: string

::: tip RETURN
bool
:::

---

### get()

Returns the group spec identified by its `$groupName`.

**Parameters:**

- *groupName*: string

::: danger THROWS
- [OutOfBoundsException](../../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip RETURN
[GroupSpecInterface](./GroupSpecInterface.md)
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
