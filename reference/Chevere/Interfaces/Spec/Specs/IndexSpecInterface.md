---
editLink: false
---

# IndexSpecInterface

`Chevere\Interfaces\Spec\Specs\IndexSpecInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Spec/Specs/IndexSpecInterface.php)

## Extends

- [SpecInterface](../SpecInterface.md)
- [ToArrayInterface](../../Common/ToArrayInterface.md)

## Description

Describes the component in charge of defining the index spec.

## Methods

### __construct

::: warning Parameters
- *specDir*: [DirInterface](../../Filesystem/DirInterface.md)
:::

---

### withAddedGroup

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

### jsonPath

Provides access to the json path.

::: tip Return
string
:::

---

### key

Provides access to the key.

::: tip Return
string
:::

---

### toArray

Returns an array, representing the object itself or some of its data/properties.

::: tip Return
array
:::

---
