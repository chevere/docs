---
editLink: false
---

# ControllerInterface

`Chevere\Interfaces\Controller\ControllerInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Controller/ControllerInterface.php)

## Implements

- [ActionInterface](../Action/ActionInterface.md)
- [GetDescriptionInterface](../Description/GetDescriptionInterface.md)

## Description

Describes the component in charge of handling controller instructions.

## Methods

### parameters()

Provides access to the controller parameters defined with `getParameters()`.

::: tip RETURN
[ParametersInterface](../Parameter/ParametersInterface.md)
:::

---

### getDescription()

Defines the default description.

::: tip RETURN
string
:::

---

### setUp()

Returns a new instance with setup made. Useful to wrap pluggable instructions on parameters and description.

::: tip RETURN
ControllerInterface
:::

---

### __construct()

---

### getParameters()

Defines the default parameters.

::: tip RETURN
[ParametersInterface](../Parameter/ParametersInterface.md)
:::

---

### run()

Method called when running the action. This method MUST not alter the state of the instance.

#### Parameters

1. [ArgumentsInterface](../Parameter/ArgumentsInterface.md) `$arguments`

::: tip RETURN
[ResponseInterface](../Response/ResponseInterface.md)
:::

---
