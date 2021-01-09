---
editLink: false
---

# ParametersInterface

`Chevere\Interfaces\Parameter\ParametersInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Parameter/ParametersInterface.php)

## Extends

- [MappedInterface](../DataStructure/MappedInterface.md)
- [GetGeneratorInterface](../DataStructure/GetGeneratorInterface.md)
- [KeysInterface](../DataStructure/KeysInterface.md)
- [Countable](https://www.php.net/manual/class.countable)

## Description

Describes the component in charge of collecting objects implementing `ParameterInterface`.

## Methods

### getGenerator()

::: tip RETURN
[Generator](https://www.php.net/manual/class.generator)
:::

---

### withAddedRequired()

Return an instance with the specified required `$parameters` instance added.

#### Parameters

1. [ParameterInterface](./ParameterInterface.md) `...$parameters`

::: danger THROWS
- [OverflowException](../../Exceptions/Core/OverflowException.md) 
:::

::: tip RETURN
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified required `$parameters` instance added.

---

### withAddedOptional()

Return an instance with the specified optional `$parameters` instance added.

#### Parameters

1. [ParameterInterface](./ParameterInterface.md) `...$parameters`

::: danger THROWS
- [OverflowException](../../Exceptions/Core/OverflowException.md) 
:::

::: tip RETURN
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified optional `$parameters` instance added.

---

### withModify()

Return an instance with the specified `$parameters` modifying an already added parameter.

#### Parameters

1. [ParameterInterface](./ParameterInterface.md) `...$parameters`

::: danger THROWS
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip RETURN
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$parameters` modifying an already added parameter.

---

### has()

Indicates whether the instance has a parameter by name.

#### Parameters

1. string `$parameter`

::: tip RETURN
bool
:::

---

### isRequired()

Indicates whether the `$parameter` identified by its name is required.

#### Parameters

1. string `$parameter`

::: danger THROWS
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip RETURN
bool
:::

---

### isOptional()

Indicates whether the `$parameter` identified by its name is optional.

#### Parameters

1. string `$parameter`

::: danger THROWS
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip RETURN
bool
:::

---

### get()

#### Parameters

1. string `$parameter`

::: danger THROWS
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip RETURN
[ParameterInterface](./ParameterInterface.md)
:::

---

### required()

::: tip RETURN
[Ds\Set](https://www.php.net/manual/class.ds\set)
:::

---

### optional()

::: tip RETURN
[Ds\Set](https://www.php.net/manual/class.ds\set)
:::

---

### keys()

Provides access to the object keys.

::: tip RETURN
array
:::

---
