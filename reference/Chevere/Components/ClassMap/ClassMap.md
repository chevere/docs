---
editLink: false
---

# ClassMap

`Chevere\Components\ClassMap\ClassMap`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Components/ClassMap/ClassMap.php)

## Implements

- [ClassMapInterface](../../Interfaces/ClassMap/ClassMapInterface.md)
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

### withPut()

**Parameters:**

- *className*: string
- *key*: string

::: tip RETURN
[ClassMapInterface](../../Interfaces/ClassMap/ClassMapInterface.md)
:::

---

### has()

**Parameters:**

- *className*: string

::: tip RETURN
bool
:::

---

### hasKey()

**Parameters:**

- *key*: string

::: tip RETURN
bool
:::

---

### key()

**Parameters:**

- *className*: string

::: tip RETURN
string
:::

---

### keys()

::: tip RETURN
array
:::

---

### className()

**Parameters:**

- *key*: string

::: tip RETURN
string
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

### toArray()

::: tip RETURN
array
:::

---
