---
editLink: false
---

# Parameters

`Chevere\Components\Parameter\Parameters`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Components/Parameter/Parameters.php)

## Implements

- [ParametersInterface](../../Interfaces/Parameter/ParametersInterface.md)
- [Countable](https://www.php.net/manual/class.countable)
- [KeysInterface](../../Interfaces/DataStructure/KeysInterface.md)
- [GetGeneratorInterface](../../Interfaces/DataStructure/GetGeneratorInterface.md)
- [MappedInterface](../../Interfaces/DataStructure/MappedInterface.md)

## Methods

### __construct

::: warning Parameters
- *...parameters*: [ParameterInterface](../../Interfaces/Parameter/ParameterInterface.md)
:::

---

### __clone

::: tip Return
void
:::

---

### withAdded

::: warning Parameters
- *...parameters*: [ParameterInterface](../../Interfaces/Parameter/ParameterInterface.md)
:::

::: tip Return
[ParametersInterface](../../Interfaces/Parameter/ParametersInterface.md)
:::

---

### withAddedOptional

::: warning Parameters
- *...parameters*: [ParameterInterface](../../Interfaces/Parameter/ParameterInterface.md)
:::

::: tip Return
[ParametersInterface](../../Interfaces/Parameter/ParametersInterface.md)
:::

---

### withModify

::: warning Parameters
- *...parameters*: [ParameterInterface](../../Interfaces/Parameter/ParameterInterface.md)
:::

::: tip Return
[ParametersInterface](../../Interfaces/Parameter/ParametersInterface.md)
:::

---

### has

::: warning Parameters
- *parameter*: string
:::

::: tip Return
bool
:::

---

### isRequired

::: warning Parameters
- *parameter*: string
:::

::: tip Return
bool
:::

---

### isOptional

::: warning Parameters
- *parameter*: string
:::

::: tip Return
bool
:::

---

### get

::: warning Parameters
- *name*: string
:::

::: tip Return
[ParameterInterface](../../Interfaces/Parameter/ParameterInterface.md)
:::

---

### required

::: tip Return
[Ds\Set](https://www.php.net/manual/class.ds\set)
:::

---

### optional

::: tip Return
[Ds\Set](https://www.php.net/manual/class.ds\set)
:::

---

### keys

::: tip Return
array
:::

---

### count

::: tip Return
int
:::

---

### getGenerator

::: tip Return
[Generator](https://www.php.net/manual/class.generator)
:::

---
