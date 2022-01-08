---
editLink: false
---

# Dependencies

`Chevere\Components\Dependent\Dependencies`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Components/Dependent/Dependencies.php)

## Implements

- [DependenciesInterface](../../Interfaces/Dependent/DependenciesInterface.md)
- [Countable](https://www.php.net/manual/class.countable)
- [KeysInterface](../../Interfaces/DataStructure/KeysInterface.md)
- [GetIteratorInterface](../../Interfaces/DataStructure/GetIteratorInterface.md)
- [MappedInterface](../../Interfaces/DataStructure/MappedInterface.md)

## Methods

### __construct

::: warning Parameters
- *...dependencies*: string
:::

---

### withPut

::: warning Parameters
- *...dependencies*: string
:::

::: tip Return
[DependenciesInterface](../../Interfaces/Dependent/DependenciesInterface.md)
:::

---

### withMerge

::: warning Parameters
- *dependencies*: [DependenciesInterface](../../Interfaces/Dependent/DependenciesInterface.md)
:::

::: tip Return
[DependenciesInterface](../../Interfaces/Dependent/DependenciesInterface.md)
:::

---

### hasKey

::: warning Parameters
- *key*: string
:::

::: tip Return
bool
:::

---

### key

::: warning Parameters
- *key*: string
:::

::: danger Throws
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip Return
string
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
