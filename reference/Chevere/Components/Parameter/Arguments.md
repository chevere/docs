---
editLink: false
---

# Arguments

`Chevere\Components\Parameter\Arguments`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Components/Parameter/Arguments.php)

## Implements

- [ArgumentsInterface](../../Interfaces/Parameter/ArgumentsInterface.md)
- [ToArrayInterface](../../Interfaces/Common/ToArrayInterface.md)

## Methods

### __construct()

#### Parameters

1. [ParametersInterface](../../Interfaces/Parameter/ParametersInterface.md) `$parameters`
2. mixed `...$namedArguments`

---

### parameters()

::: tip RETURN
[ParametersInterface](../../Interfaces/Parameter/ParametersInterface.md)
:::

---

### toArray()

::: tip RETURN
array
:::

---

### withArgument()

#### Parameters

1. string `$name`
2.  `$value`

::: tip RETURN
[ArgumentsInterface](../../Interfaces/Parameter/ArgumentsInterface.md)
:::

---

### has()

#### Parameters

1. string `$name`

::: tip RETURN
bool
:::

---

### get()

#### Parameters

1. string `$name`

::: tip RETURN
void
:::

---

### getBoolean()

#### Parameters

1. string `$boolean`

::: tip RETURN
bool
:::

---

### getString()

#### Parameters

1. string `$string`

::: tip RETURN
string
:::

---

### getInteger()

#### Parameters

1. string `$integer`

::: tip RETURN
int
:::

---

### getFloat()

#### Parameters

1. string `$float`

::: tip RETURN
float
:::

---

### getArray()

#### Parameters

1. string `$array`

::: tip RETURN
array
:::

---

### assertCount()

::: tip RETURN
void
:::

---

### assertType()

#### Parameters

1. string `$name`
2.  `$value`

::: tip RETURN
void
:::

---

### assertHasParameter()

#### Parameters

1. string `$name`

::: danger THROWS
- [ArgumentRequiredException](../../Exceptions/Parameter/ArgumentRequiredException.md) 
:::

::: tip RETURN
void
:::

---

### assertStringArgument()

#### Parameters

1. string `$name`
2. [StringParameterInterface](../../Interfaces/Parameter/StringParameterInterface.md) `$parameter`
3. string `$argument`

::: danger THROWS
- [ArgumentRegexMatchException](../../Exceptions/Parameter/ArgumentRegexMatchException.md) 
:::

::: tip RETURN
void
:::

---

### handleParameter()

#### Parameters

1. string `$name`
2. [ParameterInterface](../../Interfaces/Parameter/ParameterInterface.md) `$parameter`

::: tip RETURN
void
:::

---

### handleParameterDefault()

#### Parameters

1. string `$name`
2. [ParameterInterface](../../Interfaces/Parameter/ParameterInterface.md) `$parameter`

::: tip RETURN
void
:::

---
