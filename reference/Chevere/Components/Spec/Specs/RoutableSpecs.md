---
editLink: false
---

# RoutableSpecs

`Chevere\Components\Spec\Specs\RoutableSpecs`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Components/Spec/Specs/RoutableSpecs.php)

## Implements

- [RoutableSpecsInterface](../../../Interfaces/Spec/Specs/RoutableSpecsInterface.md)
- [Countable](https://www.php.net/manual/class.countable)
- [KeysInterface](../../../Interfaces/DataStructure/KeysInterface.md)
- [GetGeneratorInterface](../../../Interfaces/DataStructure/GetGeneratorInterface.md)
- [MappedInterface](../../../Interfaces/DataStructure/MappedInterface.md)

## Methods

### withPut()

#### Parameters

1. [RoutableSpecInterface](../../../Interfaces/Spec/Specs/RoutableSpecInterface.md) `$routableSpec`

::: tip RETURN
[RoutableSpecsInterface](../../../Interfaces/Spec/Specs/RoutableSpecsInterface.md)
:::

---

### has()

#### Parameters

1. string `$routeName`

::: tip RETURN
bool
:::

---

### get()

#### Parameters

1. string `$routeName`

::: danger THROWS
- [TypeException](../../../Exceptions/Core/TypeException.md) 
- [OutOfBoundsException](../../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip RETURN
[RoutableSpecInterface](../../../Interfaces/Spec/Specs/RoutableSpecInterface.md)
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
