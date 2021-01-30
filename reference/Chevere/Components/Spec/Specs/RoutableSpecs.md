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

### withPut

::: warning Parameters
- *routableSpec*: [RoutableSpecInterface](../../../Interfaces/Spec/Specs/RoutableSpecInterface.md)
:::

::: tip Return
[RoutableSpecsInterface](../../../Interfaces/Spec/Specs/RoutableSpecsInterface.md)
:::

---

### has

::: warning Parameters
- *routeName*: string
:::

::: tip Return
bool
:::

---

### get

::: warning Parameters
- *routeName*: string
:::

::: danger Throws
- [TypeException](../../../Exceptions/Core/TypeException.md) 
- [OutOfBoundsException](../../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip Return
[RoutableSpecInterface](../../../Interfaces/Spec/Specs/RoutableSpecInterface.md)
:::

---

### __construct

---

### __clone

::: tip Return
void
:::

---

### keys

::: tip Return
array
:::

---

### count

::: tip Return
int
:::

---

### getGenerator

::: tip Return
[Generator](https://www.php.net/manual/class.generator)
:::

---
