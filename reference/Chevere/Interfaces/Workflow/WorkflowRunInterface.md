---
editLink: false
---

# WorkflowRunInterface

`Chevere\Interfaces\Workflow\WorkflowRunInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Workflow/WorkflowRunInterface.php)

## Description

Describes the component in charge of defining a workflow run, with the arguments returned for each task.

## Methods

### __construct

::: warning Parameters
- *workflow*: [WorkflowInterface](./WorkflowInterface.md)
- *...namedArguments*: mixed
:::

---

### uuid

Provides access to workflow uuid V4 (RFC 4122).

::: tip Return
string
:::

https://tools.ietf.org/html/rfc4122

---

### workflow

Provides access to the WorkflowInterface instance.

::: tip Return
[WorkflowInterface](./WorkflowInterface.md)
:::

---

### arguments

Provides access to the ArgumentsInterface instance.

::: tip Return
[ArgumentsInterface](../Parameter/ArgumentsInterface.md)
:::

---

### withStepResponse

::: warning Parameters
- *step*: string
- *response*: [ResponseInterface](../Response/ResponseInterface.md)
:::

::: danger Throws
- [ArgumentCountException](../../Exceptions/Core/ArgumentCountException.md) 
:::

::: tip Return
self
:::

---

### has

Indicates whether the instance has the given `$step`. Will return `true` if step has ran.

::: warning Parameters
- *step*: string
:::

::: tip Return
bool
:::

---

### get

Provides access to the ResponseInterface instance for the given `$step`.

::: warning Parameters
- *step*: string
:::

::: tip Return
[ResponseInterface](../Response/ResponseInterface.md)
:::

---
