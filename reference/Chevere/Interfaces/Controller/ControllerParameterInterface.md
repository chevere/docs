---
editLink: false
---

# ControllerParameterInterface

`Chevere\Interfaces\Controller\ControllerParameterInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Controller/ControllerParameterInterface.php)

## Description

Describes the component in charge of handling controller parameters.

## Methods

### __construct()

#### Parameters

1. string `$name`

::: danger THROWS
- [ControllerParameterNameInvalidException](../../Exceptions/Controller/ControllerParameterNameInvalidException.md)
:::

---

### isRequired()

Indicates whether the parameter is required.

::: tip RETURN
bool
:::

---

### name()

Provides access to the parameter name.

::: tip RETURN
string
:::

---

### regex()

Provides access to the parameter regex instance.

::: tip RETURN
[RegexInterface](../Regex/RegexInterface.md)
:::

---

### description()

Provides access to the name instance.

::: tip RETURN
string
:::

---

### withRegex()

Return an instance with the specified regex.

#### Parameters

1. string `$regex`

::: tip RETURN
ControllerParameterInterface
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified regex.

---

### withDescription()

Return an instance with the specified description.

#### Parameters

1. string `$string`

::: tip RETURN
ControllerParameterInterface
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified description.

---
