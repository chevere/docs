---
editLink: false
---

# Parameter

`Chevere\Components\Parameter\Parameter`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Components/Parameter/Parameter.php)

## Implements

- [ParameterInterface](../../Interfaces/Parameter/ParameterInterface.md)
- [DescriptionInterface](../../Interfaces/Common/DescriptionInterface.md)

## Methods

### __construct()

#### Parameters

1. [TypeInterface](../../Interfaces/Type/TypeInterface.md) `$type`

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
Ds\Set
:::

---

### getDescription()

::: tip RETURN
string
:::

---
