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

**Parameters:**

- *type*: [TypeInterface](../../Interfaces/Type/TypeInterface.md)

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
