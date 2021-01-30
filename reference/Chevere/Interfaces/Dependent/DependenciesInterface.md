---
editLink: false
---

# DependenciesInterface

`Chevere\Interfaces\Dependent\DependenciesInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Dependent/DependenciesInterface.php)

## Extends

- [MappedInterface](../DataStructure/MappedInterface.md)
- [GetGeneratorInterface](../DataStructure/GetGeneratorInterface.md)
- [KeysInterface](../DataStructure/KeysInterface.md)
- [Countable](https://www.php.net/manual/class.countable)

## Description

Describes the component in charge of defining dependencies.

## Methods

### withPut()

**Parameters:**

- *...namedDependencies*: string

::: tip RETURN
self
:::

---

### getGenerator()

::: tip RETURN
[Generator](https://www.php.net/manual/class.generator)
:::

---

### keys()

Provides access to the object keys.

::: tip RETURN
array
:::

---
