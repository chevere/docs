---
editLink: false
---

# IntegerParameterInterface

`Chevere\Interfaces\Parameter\IntegerParameterInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/Parameter/IntegerParameterInterface.php)

## Extends

- [ParameterInterface](./ParameterInterface.md)
- [AttributesInterface](../Common/AttributesInterface.md)
- [DescriptionInterface](../Common/DescriptionInterface.md)

## Description

Describes the component in charge of defining a parameter of type integer.

## Methods

### withDefault

Return an instance with the specified `$default` value.

::: warning Parameters
- *value*: int
:::

::: danger Throws
- [InvalidArgumentException](../../Exceptions/Core/InvalidArgumentException.md) 
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$default` value.

---

### default

Provides access to the default value.

::: tip Return
int
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
