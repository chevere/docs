---
editLink: false
---

# ClassMapInterface

`Chevere\Interfaces\ClassMap\ClassMapInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/ClassMap/ClassMapInterface.php)

## Extends

- [MappedInterface](../DataStructure/MappedInterface.md)
- [GetGeneratorInterface](../DataStructure/GetGeneratorInterface.md)
- [KeysInterface](../DataStructure/KeysInterface.md)
- [Countable](https://www.php.net/manual/class.countable)

## Description

Describes the component in charge of mapping classes to keys.

## Methods

### withPut

Return an instance with the specified className mapping.

::: warning Parameters
- *className*: string
- *key*: string
:::

::: danger Throws
- [ClassNotExistsException](../../Exceptions/Core/ClassNotExistsException.md) 
- [OverflowException](../../Exceptions/Core/OverflowException.md) 
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified className mapping.

---

### has

Indicates whether the instance is mapping the given class name.

::: warning Parameters
- *className*: string
:::

::: tip Return
bool
:::

---

### hasKey

Indicates whether the instance maps the given key.

::: warning Parameters
- *key*: string
:::

::: tip Return
bool
:::

---

### key

Provides access to the class name mapping.

::: warning Parameters
- *className*: string
:::

::: danger Throws
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip Return
string
:::

---

### className

Provides access to the class name mapped by key.

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

Provides a generator with `className => key`

::: tip Return
[Generator](https://www.php.net/manual/class.generator)
:::

---

### toArray

Provides access to the class map `className => key`

::: tip Return
array
:::

---

### keys

Provides access to the object keys.

::: tip Return
array
:::

---
