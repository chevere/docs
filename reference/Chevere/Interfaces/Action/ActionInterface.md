---
editLink: false
---

# ActionInterface

`Chevere\Interfaces\Action\ActionInterface`

[view source](https://github.com/chevere/chevere/blob/master/Action/ActionInterface.php)

## Extends

- [DescriptionInterface](../Common/DescriptionInterface.md)

## Description

Describes the component in charge of defining a single action.

## Methods

### __construct()

---

### getParameters()

Defines parameters.

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

### run()

Method called when running the action.

#### Parameters

1. [ArgumentsInterface](../Parameter/ArgumentsInterface.md) `$arguments`

::: tip RETURN
[ResponseSuccessInterface](../Response/ResponseSuccessInterface.md)
:::

---

### parameters()

Provides access to the parameters.

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

### getArguments()

#### Parameters

1. mixed `...$arguments`

::: tip RETURN
[ArgumentsInterface](../Parameter/ArgumentsInterface.md)
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

### getDescription()

Defines the description.

::: tip RETURN
string
:::

---
