---
editLink: false
---

# ParametersInterface

`Chevere\Interfaces\Parameter\ParametersInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/Parameter/ParametersInterface.php)

## Extends

- [MappedInterface](../DataStructure/MappedInterface.md)
- [GetIteratorInterface](../DataStructure/GetIteratorInterface.md)
- [KeysInterface](../DataStructure/KeysInterface.md)
- [Countable](https://www.php.net/manual/class.countable)

## Description

Describes the component in charge of collecting objects implementing `ParameterInterface`.

## Methods

### __construct

::: warning Parameters
- *...parameters*: [ParameterInterface](./ParameterInterface.md)
:::

---

### getIterator

::: tip Return
[Iterator](https://www.php.net/manual/class.iterator)
:::

---

### withAdded

Return an instance with the specified required `$parameters` instance added.

::: warning Parameters
- *...parameters*: [ParameterInterface](./ParameterInterface.md)
:::

::: danger Throws
- [OverflowException](../../Exceptions/Core/OverflowException.md) 
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified required `$parameters` instance added.

---

### withAddedOptional

Return an instance with the specified optional `$parameters` instance added.

::: warning Parameters
- *...parameters*: [ParameterInterface](./ParameterInterface.md)
:::

::: danger Throws
- [OverflowException](../../Exceptions/Core/OverflowException.md) 
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified optional `$parameters` instance added.

---

### withModify

Return an instance with the specified `$parameters` modifying an already added parameter.

::: warning Parameters
- *...parameters*: [ParameterInterface](./ParameterInterface.md)
:::

::: danger Throws
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$parameters` modifying an already added parameter.

---

### has

Indicates whether the instance has a parameter by name(s).

::: warning Parameters
- *...parameter*: string
:::

::: tip Return
bool
:::

---

### isRequired

Indicates whether the `$parameter` identified by its name is required.

::: warning Parameters
- *parameter*: string
:::

::: danger Throws
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip Return
bool
:::

---

### isOptional

Indicates whether the `$parameter` identified by its name is optional.

::: warning Parameters
- *parameter*: string
:::

::: danger Throws
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip Return
bool
:::

---

### get

::: warning Parameters
- *parameter*: string
:::

::: danger Throws
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip Return
[ParameterInterface](./ParameterInterface.md)
:::

---

### required

::: tip Return
[Ds\Set](https://www.php.net/manual/class.ds\set)
:::

---

### optional

::: tip Return
[Ds\Set](https://www.php.net/manual/class.ds\set)
:::

---

### keys

Provides access to the object keys.

::: tip Return
array
:::

---
