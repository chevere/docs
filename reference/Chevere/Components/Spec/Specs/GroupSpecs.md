---
editLink: false
---

# GroupSpecs

`Chevere\Components\Spec\Specs\GroupSpecs`

[view source](https://github.com/chevere/chevere/blob/master/Spec/Specs/GroupSpecs.php)

## Implements

- [GroupSpecsInterface](../../../Interfaces/Spec/Specs/GroupSpecsInterface.md)
- [Countable](https://www.php.net/manual/class.countable)
- [KeysInterface](../../../Interfaces/DataStructure/KeysInterface.md)
- [GetGeneratorInterface](../../../Interfaces/DataStructure/GetGeneratorInterface.md)
- [MappedInterface](../../../Interfaces/DataStructure/MappedInterface.md)

## Methods

### withPut()

#### Parameters

1. [GroupSpecInterface](../../../Interfaces/Spec/Specs/GroupSpecInterface.md) `$groupSpec`

::: tip RETURN
[GroupSpecsInterface](../../../Interfaces/Spec/Specs/GroupSpecsInterface.md)
:::

---

### has()

#### Parameters

1. string `$name`

::: tip RETURN
bool
:::

---

### get()

#### Parameters

1. string `$name`

::: danger THROWS
- [TypeException](../../../Exceptions/Core/TypeException.md) 
- [OutOfBoundsException](../../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip RETURN
[GroupSpecInterface](../../../Interfaces/Spec/Specs/GroupSpecInterface.md)
:::

---

### __construct()

---

### __clone()

::: tip RETURN
void
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
