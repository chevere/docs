---
editLink: false
---

# SpecMethodsInterface

`Chevere\Interfaces\Spec\SpecMethodsInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Spec/SpecMethodsInterface.php)

## Implements

- [DsMapInterface](../DataStructures/DsMapInterface.md)
- [Countable](https://www.php.net/manual/class.countable)

## Methods

### withPut()

**Parameters**

1. string `$name`
2. string `$jsonPath`

::: tip RETURN
SpecMethodsInterface
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
string
:::

---

### keys()

Provides access to the map keys.

::: tip RETURN
array
:::

---

### mapCopy()

Provides a deep copy of the internal map.

::: tip RETURN
Ds\Map
:::

---

### getGenerator()

Provides the generator.

::: tip RETURN
[Generator](https://www.php.net/manual/class.generator)
:::

---
