---
editLink: false
---

# ParameterInterface

`Chevere\Interfaces\Parameter\ParameterInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Parameter/ParameterInterface.php)

## Extends

- [DescriptionInterface](../Common/DescriptionInterface.md)

## Description

Describes the component in charge of defining a parameter.

## Methods

### type()

Provides access to the type instance.

::: tip RETURN
[TypeInterface](../Type/TypeInterface.md)
:::

---

### withDescription()

#### Parameters

1. string `$description`

::: tip RETURN
self
:::

---

### withAddedAttribute()

Return an instance with the specified `$attributes` added.

#### Parameters

1. string `...$attributes`

::: danger THROWS
- [OverflowException](../../Exceptions/Core/OverflowException.md) 
:::

::: tip RETURN
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$attributes` added.

---

### withRemovedAttribute()

Return an instance with the specified `$attributes` removed.

#### Parameters

1. string `...$attributes`

::: danger THROWS
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip RETURN
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$attributes` removed.

---

### hasAttribute()

Indicates whether the instance has the given `$attributes`.

#### Parameters

1. string `...$attributes`

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

### getDescription()

Defines the description.

::: tip RETURN
string
:::

---
