---
editLink: false
---

# ParameterInterface

`Chevere\Interfaces\Parameter\ParameterInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Parameter/ParameterInterface.php)

## Extends

- [DescriptionInterface](../Description/DescriptionInterface.md)

## Description

Describes the component in charge of defining a parameter.

## Methods

### name()

Provides access to the name.

::: tip RETURN
string
:::

---

### type()

Provides access to the type instance.

::: tip RETURN
[TypeInterface](../Type/TypeInterface.md)
:::

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

### withAddedAttribute()

Return an instance with the specified `$attribute` added.

#### Parameters

1. string `$attribute`

::: danger THROWS
- [OverflowException](../../Exceptions/Core/OverflowException.md) 
:::

::: tip RETURN
ParameterInterface
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
ParameterInterface
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
