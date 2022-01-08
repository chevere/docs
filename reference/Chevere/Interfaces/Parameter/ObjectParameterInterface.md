---
editLink: false
---

# ObjectParameterInterface

`Chevere\Interfaces\Parameter\ObjectParameterInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/Parameter/ObjectParameterInterface.php)

## Extends

- [ParameterInterface](./ParameterInterface.md)
- [AttributesInterface](../Common/AttributesInterface.md)
- [DescriptionInterface](../Common/DescriptionInterface.md)

## Description

Describes the component in charge of defining a parameter of type object (typed).

## Methods

### className

::: tip Return
string
:::

---

### withClassName

::: warning Parameters
- *className*: string
:::

::: tip Return
self
:::

---

### type

::: tip Return
[TypeInterface](../Type/TypeInterface.md)
:::

---

### description

Provides access to the description.

::: tip Return
string
:::

---

### getDescription

Defines the description.

::: tip Return
string
:::

---

### withAddedAttribute

::: warning Parameters
- *...attributes*: string
:::

::: tip Return
static
:::

---

### withoutAttribute

::: warning Parameters
- *...attributes*: string
:::

::: tip Return
static
:::

---

### hasAttribute

::: warning Parameters
- *...attributes*: string
:::

::: tip Return
bool
:::

---

### attributes

::: tip Return
[Ds\Map](https://www.php.net/manual/class.ds\map)
:::

---
