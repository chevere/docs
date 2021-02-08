---
editLink: false
---

# StepInterface

`Chevere\Interfaces\Workflow\StepInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/Workflow/StepInterface.php)

## Description

Describes the component in charge of defining a task (a unit of job).

## Methods

### __construct

::: warning Parameters
- *action*: string
:::

::: danger Throws
- [InvalidArgumentException](../../Exceptions/Core/InvalidArgumentException.md) 
:::

---

### withArguments

Return an instance with the specified `$namedArguments`.

::: warning Parameters
- *...namedArguments*: mixed
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$namedArguments`.

---

### action

::: tip Return
string
:::

---

### arguments

::: tip Return
array
:::

---
