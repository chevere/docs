---
editLink: false
---

# ActionInterface

`Chevere\Interfaces\Action\ActionInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Action/ActionInterface.php)

## Implements

- [GetDescriptionInterface](../Description/GetDescriptionInterface.md)

## Description

Describes the component in charge of defining a single action.

## Methods

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

### getDescription()

Provides the description.

::: tip RETURN
string
:::

---
