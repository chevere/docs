---
editLink: false
---

# Parameters

`Chevere\Components\Parameter\Parameters`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Components/Parameter/Parameters.php)

## Implements

- [ParametersInterface](../../Interfaces/Parameter/ParametersInterface.md)
- [Countable](https://www.php.net/manual/class.countable)
- [KeysInterface](../../Interfaces/DataStructure/KeysInterface.md)
- [GetGeneratorInterface](../../Interfaces/DataStructure/GetGeneratorInterface.md)
- [MappedInterface](../../Interfaces/DataStructure/MappedInterface.md)

## Methods

### __construct()

---

### __clone()

::: tip RETURN
void
:::

---

### withAddedRequired()

#### Parameters

1. [ParameterInterface](../../Interfaces/Parameter/ParameterInterface.md) `...$parameters`

::: tip RETURN
[ParametersInterface](../../Interfaces/Parameter/ParametersInterface.md)
:::

---

### withAddedOptional()

#### Parameters

1. [ParameterInterface](../../Interfaces/Parameter/ParameterInterface.md) `...$parameters`

::: tip RETURN
[ParametersInterface](../../Interfaces/Parameter/ParametersInterface.md)
:::

---

### withModify()

#### Parameters

1. [ParameterInterface](../../Interfaces/Parameter/ParameterInterface.md) `...$parameters`

::: tip RETURN
[ParametersInterface](../../Interfaces/Parameter/ParametersInterface.md)
:::

---

### has()

#### Parameters

1. string `$parameter`

::: tip RETURN
bool
:::

---

### isRequired()

#### Parameters

1. string `$parameter`

::: tip RETURN
bool
:::

---

### isOptional()

#### Parameters

1. string `$parameter`

::: tip RETURN
bool
:::

---

### get()

#### Parameters

1. string `$name`

::: tip RETURN
[ParameterInterface](../../Interfaces/Parameter/ParameterInterface.md)
:::

---

### required()

::: tip RETURN
[Ds\Set](https://www.php.net/manual/class.ds\set)
:::

---

### optional()

::: tip RETURN
[Ds\Set](https://www.php.net/manual/class.ds\set)
:::

---

### assertNoOutOfBounds()

#### Parameters

1. string `$parameter`

::: tip RETURN
void
:::

---

### assertNoOverflow()

#### Parameters

1. string `$name`

::: tip RETURN
void
:::

---

### keys()

::: tip RETURN
array
:::

---

### count()

::: tip RETURN
int
:::

---

### getGenerator()

::: tip RETURN
[Generator](https://www.php.net/manual/class.generator)
:::

---
