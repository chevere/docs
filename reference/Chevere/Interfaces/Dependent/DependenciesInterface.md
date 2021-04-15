---
editLink: false
---

# DependenciesInterface

`Chevere\Interfaces\Dependent\DependenciesInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/Dependent/DependenciesInterface.php)

## Extends

- [MappedInterface](../DataStructure/MappedInterface.md)
- [GetGeneratorInterface](../DataStructure/GetGeneratorInterface.md)
- [KeysInterface](../DataStructure/KeysInterface.md)
- [Countable](https://www.php.net/manual/class.countable)

## Description

Describes the component in charge of defining dependencies.

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
self
:::

---

### withMerge

::: warning Parameters
- *dependencies*: self
:::

::: tip Return
self
:::

---

### hasKey

Indicates whether the instance declares a dependency for the given key.

::: warning Parameters
- *key*: string
:::

::: tip Return
bool
:::

---

### key

Provides access to the dependency class name.

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

### getGenerator

::: tip Return
[Generator](https://www.php.net/manual/class.generator)
:::

---

### keys

Provides access to the object keys.

::: tip Return
array
:::

---
