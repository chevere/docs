---
editLink: false
---

# GroupSpecInterface

`Chevere\Interfaces\Spec\Specs\GroupSpecInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Spec/Specs/GroupSpecInterface.php)

## Extends

- [SpecInterface](../SpecInterface.md)
- [ToArrayInterface](../../To/ToArrayInterface.md)

## Description

Describes the component in charge of defining the group spec.

## Methods

### __construct()

#### Parameters

1. [DirInterface](../../Filesystem/DirInterface.md) `$specDir`
2. string `$group`

---

### withAddedRoutableSpec()

Return an instance with the specified `$routableSpec`.

#### Parameters

1. [RoutableSpecInterface](./RoutableSpecInterface.md) `$routableSpec`

::: tip RETURN
GroupSpecInterface
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$routableSpec`.

---

### jsonPath()

Provides access to the json path.

::: tip RETURN
string
:::

---

### key()

Provides access to the key.

::: tip RETURN
string
:::

---

### toArray()

Returns an array, representing the object itself or some of its data/properties.

::: tip RETURN
array
:::

---
