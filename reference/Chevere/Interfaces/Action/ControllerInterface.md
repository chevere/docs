---
editLink: false
---

# ControllerInterface

`Chevere\Interfaces\Action\ControllerInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Action/ControllerInterface.php)

## Extends

- [ActionInterface](./ActionInterface.md)
- [GetDescriptionInterface](../Description/GetDescriptionInterface.md)

## Description

Describes the component in charge of defining a controller, which is an action
intended to be exposed closest to an application entry-point HTTP/CLI mapping.

Key point of a controller is that it only takes string arguments and it
provides an additional layer for context parameters.

## Constants

### PARAMETER_TYPE

Type `string`

```php
'string'
```

## Methods

### assertParametersType()

::: danger THROWS
- [InvalidArgumentException](../../Exceptions/Core/InvalidArgumentException.md) If `getParameters` provides anything else than StringParameter
:::

::: tip RETURN
void
:::

---

### getContextParameters()

Defines context parameters.

::: tip RETURN
[ParametersInterface](../Parameter/ParametersInterface.md)
:::

---

### withContextArguments()

#### Parameters

1. mixed `$namedArguments`

::: tip RETURN
self
:::

---

### contextArguments()

::: tip RETURN
[ArgumentsInterface](../Parameter/ArgumentsInterface.md)
:::

---

### hasContextArguments()

::: tip RETURN
bool
:::

---

### contextParameters()

Provides access to context parameters.

::: tip RETURN
[ParametersInterface](../Parameter/ParametersInterface.md)
:::

---

### __construct()

---

### getParameters()

Defines parameters.

::: tip RETURN
[ParametersInterface](../Parameter/ParametersInterface.md)
:::

---

### parameters()

Provides access to the parameters.

::: tip RETURN
[ParametersInterface](../Parameter/ParametersInterface.md)
:::

---

### getResponseDataParameters()

Defines expected response data parameters when executing `run` method.

::: tip RETURN
[ParametersInterface](../Parameter/ParametersInterface.md)
:::

---

### responseDataParameters()

Provides access to the expected response data parameters.

::: tip RETURN
[ParametersInterface](../Parameter/ParametersInterface.md)
:::

---

### getResponseSuccess()

Retrieves a new success response with type-hinted data.

#### Parameters

1. array `$data`

::: tip RETURN
[ResponseSuccessInterface](../Response/ResponseSuccessInterface.md)
:::

---

### description()

Provides access to the description.

::: tip RETURN
string
:::

---

### run()

Method called when running the action.

#### Parameters

1. array `$arguments`

::: tip RETURN
[ResponseSuccessInterface](../Response/ResponseSuccessInterface.md)
:::

---

### getDescription()

Provides the description.

::: tip RETURN
string
:::

---
