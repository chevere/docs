---
editLink: false
---

# StringParameter

`Chevere\Components\Parameter\StringParameter`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Components/Parameter/StringParameter.php)

## Implements

- [StringParameterInterface](../../Interfaces/Parameter/StringParameterInterface.md)
- [DescriptionInterface](../../Interfaces/Common/DescriptionInterface.md)
- [ParameterInterface](../../Interfaces/Parameter/ParameterInterface.md)

## Methods

### __construct()

---

### withRegex()

#### Parameters

1. [RegexInterface](../../Interfaces/Regex/RegexInterface.md) `$regex`

::: tip RETURN
[StringParameterInterface](../../Interfaces/Parameter/StringParameterInterface.md)
:::

---

### withDefault()

#### Parameters

1. string `$default`

::: tip RETURN
[StringParameterInterface](../../Interfaces/Parameter/StringParameterInterface.md)
:::

---

### regex()

::: tip RETURN
[RegexInterface](../../Interfaces/Regex/RegexInterface.md)
:::

---

### default()

::: tip RETURN
string
:::

---

### __clone()

::: tip RETURN
void
:::

---

### withDescription()

#### Parameters

1. string `$description`

::: tip RETURN
self
:::

---

### withAddedAttribute()

#### Parameters

1. string `...$attributes`

::: tip RETURN
self
:::

---

### withRemovedAttribute()

#### Parameters

1. string `...$attribute`

::: tip RETURN
[ParameterInterface](../../Interfaces/Parameter/ParameterInterface.md)
:::

---

### type()

::: tip RETURN
[TypeInterface](../../Interfaces/Type/TypeInterface.md)
:::

---

### description()

::: tip RETURN
string
:::

---

### hasAttribute()

#### Parameters

1. string `...$attribute`

::: tip RETURN
bool
:::

---

### attributes()

::: tip RETURN
[Ds\Set](https://www.php.net/manual/class.ds\set)
:::

---

### getDescription()

::: tip RETURN
string
:::

---
