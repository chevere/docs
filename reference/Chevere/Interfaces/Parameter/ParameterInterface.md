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

Return an instance with the specified `$attribute` added.

#### Parameters

1. string `$attribute`

::: danger THROWS
- [OverflowException](../../Exceptions/Core/OverflowException.md) 
:::

::: tip RETURN
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$attribute` added.

---

### withRemovedAttribute()

Return an instance with the specified `$attribute` removed.

#### Parameters

1. string `$attribute`

::: danger THROWS
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip RETURN
self
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
[Ds\Set](https://www.php.net/manual/class.ds\set)
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
