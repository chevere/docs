---
editLink: false
---

# SpecIndexMapInterface

`Chevere\Interfaces\Spec\SpecIndexMapInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Spec/SpecIndexMapInterface.php)

## Implements

- [DsMapInterface](../DataStructures/DsMapInterface.md)
- [Countable](https://www.php.net/manual/class.countable)

## Methods

### getGenerator()

::: tip RETURN
[Generator](https://www.php.net/manual/class.generator)
:::

---

### withPut()

**Parameters**

1. string `$name`
2. [SpecMethodsInterface](./SpecMethodsInterface.md) `$specMethods`

::: tip RETURN
SpecIndexMapInterface
:::

---

### hasKey()

**Parameters**

1. string `$name`

::: tip RETURN
bool
:::

---

### get()

**Parameters**

1. string `$name`

::: tip RETURN
[SpecMethodsInterface](./SpecMethodsInterface.md)
:::

---

### keys()

::: tip RETURN
array
:::

---

### mapCopy()

::: tip RETURN
Ds\Map
:::

---
