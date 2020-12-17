---
editLink: false
---

# IndexSpecInterface

`Chevere\Interfaces\Spec\Specs\IndexSpecInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Spec/Specs/IndexSpecInterface.php)

## Extends

- [SpecInterface](../SpecInterface.md)
- [ToArrayInterface](../../To/ToArrayInterface.md)

## Description

Describes the component in charge of defining the index spec.

## Methods

### __construct()

#### Parameters

1. [DirInterface](../../Filesystem/DirInterface.md) `$specDir`

---

### withAddedGroup()

Return an instance with the specified `$groupSpec`.

#### Parameters

1. [GroupSpecInterface](./GroupSpecInterface.md) `$groupSpec`

::: tip RETURN
IndexSpecInterface
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$groupSpec`.

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
