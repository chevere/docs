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

### withPut()

Return an instance with the specified className mapping.

**Parameters:**

- *className*: string
- *key*: string

::: danger THROWS
- [ClassNotExistsException](../../Exceptions/Core/ClassNotExistsException.md) 
- [OverflowException](../../Exceptions/Core/OverflowException.md) 
:::

::: tip RETURN
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified className mapping.

---

### has()

Indicates whether the instance is mapping the given class name.

**Parameters:**

- *className*: string

::: tip RETURN
bool
:::

---

### hasKey()

Indicates whether the instance maps the given key.

**Parameters:**

- *key*: string

::: tip RETURN
bool
:::

---

### key()

Provides access to the class name mapping.

**Parameters:**

- *className*: string

::: danger THROWS
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip RETURN
string
:::

---

### className()

Provides access to the class name mapped by key.

**Parameters:**

- *key*: string

::: danger THROWS
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip RETURN
string
:::

---

### getGenerator()

Provides a generator with `className => key`

::: tip RETURN
[Generator](https://www.php.net/manual/class.generator)
:::

---

### toArray()

Provides access to the class map `className => key`

::: tip RETURN
array
:::

---

### keys()

Provides access to the object keys.

::: tip RETURN
array
:::

---
