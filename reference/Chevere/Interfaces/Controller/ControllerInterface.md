---
editLink: false
---

# ControllerInterface

`Chevere\Interfaces\Controller\ControllerInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Controller/ControllerInterface.php)

## Description

Describes the component in charge of handling controller instructions.

## Methods

### getParameters()

Defines the controller parameters.

::: tip RETURN
[ControllerParametersInterface](./ControllerParametersInterface.md)
:::

---

### parameters()

Provides access to the controller parameters defined with `getParameters()`.

::: tip RETURN
[ControllerParametersInterface](./ControllerParametersInterface.md)
:::

---

### getDescription()

Defines the controller description.

::: tip RETURN
string
:::

---

### description()

Provides access to the description defined with `getDescription()`.

::: tip RETURN
string
:::

---

### run()

This method will be called when running the controller.

#### Parameters

1. [ControllerArgumentsInterface](./ControllerArgumentsInterface.md) `$controllerArguments`

::: tip RETURN
[ControllerResponseInterface](./ControllerResponseInterface.md)
:::

---
