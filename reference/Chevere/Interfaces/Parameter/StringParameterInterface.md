---
editLink: false
---

# StringParameterInterface

`Chevere\Interfaces\Parameter\StringParameterInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/Parameter/StringParameterInterface.php)

## Extends

- [ParameterInterface](./ParameterInterface.md)
- [AttributesInterface](../Common/AttributesInterface.md)
- [DescriptionInterface](../Common/DescriptionInterface.md)

## Description

Describes the component in charge of defining a parameter of type string.

## Methods

### regex

Provides access to the regex instance.

::: tip Return
[RegexInterface](../Regex/RegexInterface.md)
:::

---

### withRegex

Return an instance with the specified `$regex`.

::: warning Parameters
- *regex*: [RegexInterface](../Regex/RegexInterface.md)
:::

::: danger Throws
- [BadFunctionCallException](../../Exceptions/Core/BadFunctionCallException.md) 
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$regex`.

---

### withDefault

Return an instance with the specified `$default` value.

::: warning Parameters
- *value*: string
:::

::: danger Throws
- [InvalidArgumentException](../../Exceptions/Core/InvalidArgumentException.md) 
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$default` value.

---

### default

Provides access to the default value.

::: tip Return
string
:::

---

### type

Provides access to the type instance.

::: tip Return
[TypeInterface](../Type/TypeInterface.md)
:::

---

### withDescription

::: warning Parameters
- *description*: string
:::

::: tip Return
static
:::

---

### withAddedAttribute

Return an instance with the specified `$attributes` added.

::: warning Parameters
- *...attributes*: string
:::

::: danger Throws
- [OverflowException](../../Exceptions/Core/OverflowException.md) 
:::

::: tip Return
static
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$attributes` added.

---

### withoutAttribute

Return an instance with the specified `$attributes` removed.

::: warning Parameters
- *...attributes*: string
:::

::: danger Throws
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip Return
static
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$attributes` removed.

---

### hasAttribute

Indicates whether the instance has the given `$attributes`.

::: warning Parameters
- *...attributes*: string
:::

::: tip Return
bool
:::

---

### attributes

Provides access to the attributes instance.

::: tip Return
[Ds\Set](https://www.php.net/manual/class.ds\set)
:::

---

### description

Provides access to the description.

::: tip Return
string
:::

---

### getDescription

Defines the description.

::: tip Return
string
:::

---
