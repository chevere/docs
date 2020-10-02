---
editLink: false
---

# ParameterInterface

`Chevere\Interfaces\Parameter\ParameterInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Parameter/ParameterInterface.php)

## Implements

- [DescriptionInterface](../Description/DescriptionInterface.md)

## Description

Describes the component in charge of defining a parameter.

## Methods

### __construct()

#### Parameters

1. string `$name`

::: danger THROWS
- [ParameterNameInvalidException](../../Exceptions/Parameter/ParameterNameInvalidException.md)
:::

---

### name()

Provides access to the name.

::: tip RETURN
string
:::

---

### regex()

Provides access to the regex instance.

::: tip RETURN
[RegexInterface](../Regex/RegexInterface.md)
:::

---

### withRegex()

Return an instance with the specified `$regex`.

#### Parameters

1. [RegexInterface](../Regex/RegexInterface.md) `$regex`

::: tip RETURN
ParameterInterface
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$regex`.

---

### withDescription()

Return an instance with the specified `$description`.

#### Parameters

1. string `$description`

::: tip RETURN
ParameterInterface
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$description`.

---

### description()

Provides access to the description.

::: tip RETURN
string
:::

---
