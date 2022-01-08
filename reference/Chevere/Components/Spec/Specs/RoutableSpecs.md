---
editLink: false
---

# RoutableSpecs

`Chevere\Components\Spec\Specs\RoutableSpecs`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Components/Spec/Specs/RoutableSpecs.php)

## Implements

- [RoutableSpecsInterface](../../../Interfaces/Spec/Specs/RoutableSpecsInterface.md)
- [Countable](https://www.php.net/manual/class.countable)
- [KeysInterface](../../../Interfaces/DataStructure/KeysInterface.md)
- [GetIteratorInterface](../../../Interfaces/DataStructure/GetIteratorInterface.md)
- [MappedInterface](../../../Interfaces/DataStructure/MappedInterface.md)

## Methods

### withPut

::: warning Parameters
- *routableSpec*: [RouteSpecInterface](../../../Interfaces/Spec/Specs/RouteSpecInterface.md)
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
[RouteSpecInterface](../../../Interfaces/Spec/Specs/RouteSpecInterface.md)
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
