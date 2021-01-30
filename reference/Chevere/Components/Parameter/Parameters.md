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

**Parameters:**

- *...parameters*: [ParameterInterface](../../Interfaces/Parameter/ParameterInterface.md)

::: tip RETURN
[ParametersInterface](../../Interfaces/Parameter/ParametersInterface.md)
:::

---

### withAddedOptional()

**Parameters:**

- *...parameters*: [ParameterInterface](../../Interfaces/Parameter/ParameterInterface.md)

::: tip RETURN
[ParametersInterface](../../Interfaces/Parameter/ParametersInterface.md)
:::

---

### withModify()

**Parameters:**

- *...parameters*: [ParameterInterface](../../Interfaces/Parameter/ParameterInterface.md)

::: tip RETURN
[ParametersInterface](../../Interfaces/Parameter/ParametersInterface.md)
:::

---

### has()

**Parameters:**

- *parameter*: string

::: tip RETURN
bool
:::

---

### isRequired()

**Parameters:**

- *parameter*: string

::: tip RETURN
bool
:::

---

### isOptional()

**Parameters:**

- *parameter*: string

::: tip RETURN
bool
:::

---

### get()

**Parameters:**

- *name*: string

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
