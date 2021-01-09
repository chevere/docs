---
editLink: false
---

# ArrayParameter

`Chevere\Components\Parameter\ArrayParameter`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Components/Parameter/ArrayParameter.php)

## Implements

- [ArrayParameterInterface](../../Interfaces/Parameter/ArrayParameterInterface.md)
- [DescriptionInterface](../../Interfaces/Common/DescriptionInterface.md)
- [ParameterInterface](../../Interfaces/Parameter/ParameterInterface.md)

## Methods

### __construct()

---

### withDefault()

#### Parameters

1. array `$default`

::: tip RETURN
[ArrayParameterInterface](../../Interfaces/Parameter/ArrayParameterInterface.md)
:::

---

### default()

::: tip RETURN
array
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
