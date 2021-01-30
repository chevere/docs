---
editLink: false
---

# StringParameterInterface

`Chevere\Interfaces\Parameter\StringParameterInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Parameter/StringParameterInterface.php)

## Extends

- [ParameterInterface](./ParameterInterface.md)
- [DescriptionInterface](../Common/DescriptionInterface.md)

## Description

Describes the component in charge of defining a parameter of type string.

## Methods

### regex()

Provides access to the regex instance.

::: tip RETURN
[RegexInterface](../Regex/RegexInterface.md)
:::

---

### withRegex()

Return an instance with the specified `$regex`.

**Parameters:**

- *regex*: [RegexInterface](../Regex/RegexInterface.md)

::: danger THROWS
- [BadFunctionCallException](../../Exceptions/Core/BadFunctionCallException.md) 
:::

::: tip RETURN
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$regex`.

---

### withDefault()

Return an instance with the specified `$default` value.

**Parameters:**

- *default*: string

::: danger THROWS
- [InvalidArgumentException](../../Exceptions/Core/InvalidArgumentException.md) 
:::

::: tip RETURN
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$default` value.

---

### default()

Provides access to the default value.

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

**Parameters:**

- *description*: string

::: tip RETURN
self
:::

---

### withAddedAttribute()

Return an instance with the specified `$attributes` added.

**Parameters:**

- *...attributes*: string

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

**Parameters:**

- *...attributes*: string

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

**Parameters:**

- *...attributes*: string

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
