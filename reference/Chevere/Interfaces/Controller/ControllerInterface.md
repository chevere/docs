---
editLink: false
---

# ControllerInterface

`Chevere\Interfaces\Controller\ControllerInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/Controller/ControllerInterface.php)

## Extends

- [ActionInterface](../Action/ActionInterface.md)
- [DescriptionInterface](../Common/DescriptionInterface.md)

## Description

Describes the component in charge of defining a controller, which is an action
intended to be exposed closest to an application entry-point HTTP/CLI mapping.

Key point of a controller is that it only takes string arguments and it
provides an additional layer for context parameters.

## Methods

### __construct

::: warning Parameters
- *dispatch*: string
- *relation*: string
:::

---

### relation

::: tip Return
string
:::

---

### parameter

::: tip Return
[StringParameterInterface](../Parameter/StringParameterInterface.md)
:::

---

### getParameters

Defines action parameters.

::: tip Return
[ParametersInterface](../Parameter/ParametersInterface.md)
:::

---

### getResponseParameters

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

### responseParameters

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
