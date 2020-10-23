---
editLink: false
---

# ParameterRequiredInterface

`Chevere\Interfaces\Parameter\ParameterRequiredInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Parameter/ParameterRequiredInterface.php)

## Implements

- [ParameterInterface](./ParameterInterface.md)
- [DescriptionInterface](../Description/DescriptionInterface.md)

## Description

Describes the component in charge of defining a required parameter.

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
[ParameterInterface](./ParameterInterface.md)
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$regex`.

---

### withDescription()

Return an instance with the specified `$description`.

#### Parameters

1. string `$description`

::: tip RETURN
[ParameterInterface](./ParameterInterface.md)
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$description`.

---

### withAddedAttribute()

Return an instance with the specified `$attribute`.

#### Parameters

1. string `$attribute`

::: tip RETURN
[ParameterInterface](./ParameterInterface.md)
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$attribute`.

---

### withRemovedAttribute()

Return an instance with the specified `$attribute` removed.

#### Parameters

1. string `$attribute`

::: tip RETURN
[ParameterInterface](./ParameterInterface.md)
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$attribute` removed.

---

### hasAttribute()

Indicates whether the instance has the given `$attribute`.

#### Parameters

1. string `$attribute`

::: tip RETURN
bool
:::

---

### attributes()

Provides access to the attributes instance.

::: tip RETURN
Ds\Set
:::

---

### description()

Provides access to the description.

::: tip RETURN
string
:::

---
