---
editLink: false
---

# GroupSpecInterface

`Chevere\Interfaces\Spec\Specs\GroupSpecInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/Spec/Specs/GroupSpecInterface.php)

## Extends

- [SpecInterface](../SpecInterface.md)
- [ToArrayInterface](../../Common/ToArrayInterface.md)

## Description

Describes the component in charge of defining the group spec.

## Methods

### __construct

::: warning Parameters
- *specDir*: [DirInterface](../../Filesystem/DirInterface.md)
- *group*: string
:::

---

### withAddedRoutableSpec

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
