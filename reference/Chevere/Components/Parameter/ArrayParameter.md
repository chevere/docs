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

**Parameters:**

- *default*: array

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

**Parameters:**

- *description*: string

::: tip RETURN
self
:::

---

### withAddedAttribute()

**Parameters:**

- *...attributes*: string

::: tip RETURN
self
:::

---

### withRemovedAttribute()

**Parameters:**

- *...attribute*: string

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

**Parameters:**

- *...attribute*: string

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
