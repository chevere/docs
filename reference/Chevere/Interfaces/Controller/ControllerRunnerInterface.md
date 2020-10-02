---
editLink: false
---

# ControllerRunnerInterface

`Chevere\Interfaces\Controller\ControllerRunnerInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Controller/ControllerRunnerInterface.php)

## Description

Describes the component in charge of running the controller.

## Methods

### __construct()

#### Parameters

1. [ControllerInterface](./ControllerInterface.md) `$controller`

---

### execute()

Executes the controller with the given `$arguments`.

#### Parameters

1. [ArgumentsInterface](../Parameter/ArgumentsInterface.md) `$arguments`

::: tip RETURN
[ControllerExecutedInterface](./ControllerExecutedInterface.md)
:::

---
