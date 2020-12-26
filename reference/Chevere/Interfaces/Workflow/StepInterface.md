---
editLink: false
---

# StepInterface

`Chevere\Interfaces\Workflow\StepInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Workflow/StepInterface.php)

## Description

Describes the component in charge of defining a task (a unit of job).

## Methods

### __construct()

#### Parameters

1. string `$action`

::: danger THROWS
- [InvalidArgumentException](../../Exceptions/Core/InvalidArgumentException.md) 
:::

---

### withArguments()

Return an instance with the specified named `$namedArguments`.

#### Parameters

1. mixed `...$namedArguments`

::: tip RETURN
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified named `$namedArguments`.

---

### action()

::: tip RETURN
string
:::

---

### arguments()

::: tip RETURN
array
:::

---
