---
editLink: false
---

# StringParameter

`Chevere\Components\Parameter\StringParameter`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Components/Parameter/StringParameter.php)

## Implements

- [StringParameterInterface](../../Interfaces/Parameter/StringParameterInterface.md)
- [DescriptionInterface](../../Interfaces/Common/DescriptionInterface.md)
- [AttributesInterface](../../Interfaces/Common/AttributesInterface.md)
- [ParameterInterface](../../Interfaces/Parameter/ParameterInterface.md)

## Description



## Methods

### __construct

::: warning Parameters
- *description*: string
:::

---

### getType

::: tip Return
[TypeInterface](../../Interfaces/Type/TypeInterface.md)
:::

---

### withRegex

::: warning Parameters
- *regex*: [RegexInterface](../../Interfaces/Regex/RegexInterface.md)
:::

::: tip Return
[StringParameterInterface](../../Interfaces/Parameter/StringParameterInterface.md)
:::

---

### withDefault

::: warning Parameters
- *value*: string
:::

::: tip Return
[StringParameterInterface](../../Interfaces/Parameter/StringParameterInterface.md)
:::

---

### regex

::: tip Return
[RegexInterface](../../Interfaces/Regex/RegexInterface.md)
:::

---

### default

::: tip Return
string
:::

---

### setUp

::: tip Return
void
:::

---

### type

::: tip Return
[TypeInterface](../../Interfaces/Type/TypeInterface.md)
:::

---

### description

::: tip Return
string
:::

---

### getDescription

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
