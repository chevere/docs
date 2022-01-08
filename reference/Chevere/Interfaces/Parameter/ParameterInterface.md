---
editLink: false
---

# ParameterInterface

`Chevere\Interfaces\Parameter\ParameterInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/Parameter/ParameterInterface.php)

## Extends

- [DescriptionInterface](../Common/DescriptionInterface.md)
- [AttributesInterface](../Common/AttributesInterface.md)

## Description

Describes the component in charge of defining a parameter.

## Methods

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
