---
editLink: false
---

# GroupSpecs

`Chevere\Components\Spec\Specs\GroupSpecs`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Components/Spec/Specs/GroupSpecs.php)

## Implements

- [GroupSpecsInterface](../../../Interfaces/Spec/Specs/GroupSpecsInterface.md)
- [Countable](https://www.php.net/manual/class.countable)
- [KeysInterface](../../../Interfaces/DataStructure/KeysInterface.md)
- [GetIteratorInterface](../../../Interfaces/DataStructure/GetIteratorInterface.md)
- [MappedInterface](../../../Interfaces/DataStructure/MappedInterface.md)

## Methods

### withPut

::: warning Parameters
- *groupSpec*: [GroupSpecInterface](../../../Interfaces/Spec/Specs/GroupSpecInterface.md)
:::

::: tip Return
[GroupSpecsInterface](../../../Interfaces/Spec/Specs/GroupSpecsInterface.md)
:::

---

### has

::: warning Parameters
- *name*: string
:::

::: tip Return
bool
:::

---

### get

::: warning Parameters
- *name*: string
:::

::: danger Throws
- [TypeException](../../../Exceptions/Core/TypeException.md) 
- [OutOfBoundsException](../../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip Return
[GroupSpecInterface](../../../Interfaces/Spec/Specs/GroupSpecInterface.md)
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

### getIterator

::: tip Return
[Iterator](https://www.php.net/manual/class.iterator)
:::

---
