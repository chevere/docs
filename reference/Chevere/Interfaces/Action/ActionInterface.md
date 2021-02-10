---
editLink: false
---

# ActionInterface

`Chevere\Interfaces\Action\ActionInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/Action/ActionInterface.php)

## Extends

- [DescriptionInterface](../Common/DescriptionInterface.md)

## Description

Describes the component in charge of defining a single action.

## Methods

### __construct

---

### getParameters

Defines parameters.

::: tip Return
[ParametersInterface](../Parameter/ParametersInterface.md)
:::

---

### getResponseDataParameters

Defines expected response data parameters when executing `run` method.

::: tip Return
[ParametersInterface](../Parameter/ParametersInterface.md)
:::

---

### run

Method called when running the action.

::: warning Parameters
- *arguments*: [ArgumentsInterface](../Parameter/ArgumentsInterface.md)
:::

::: tip Return
[ResponseInterface](../Response/ResponseInterface.md)
:::

---

### parameters

Provides access to the parameters.

::: tip Return
[ParametersInterface](../Parameter/ParametersInterface.md)
:::

---

### responseDataParameters

Provides access to the expected response data parameters.

::: tip Return
[ParametersInterface](../Parameter/ParametersInterface.md)
:::

---

### getArguments

::: warning Parameters
- *...namedArguments*: mixed
:::

::: tip Return
[ArgumentsInterface](../Parameter/ArgumentsInterface.md)
:::

---

### getResponse

Retrieves a new success response with type-hinted data.

::: warning Parameters
- *...namedData*: mixed
:::

::: tip Return
[ResponseInterface](../Response/ResponseInterface.md)
:::

---

### description

Provides access to the description.

::: tip Return
string
:::

---

### getDescription

Defines the description.

::: tip Return
string
:::

---
