---
editLink: false
---

# WorkflowRun

`Chevere\Components\Workflow\WorkflowRun`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Components/Workflow/WorkflowRun.php)

## Implements

- [WorkflowRunInterface](../../Interfaces/Workflow/WorkflowRunInterface.md)

## Methods

### __construct

::: warning Parameters
- *workflow*: [WorkflowInterface](../../Interfaces/Workflow/WorkflowInterface.md)
- *...namedArguments*: mixed
:::

---

### __clone

::: tip Return
void
:::

---

### uuid

::: tip Return
string
:::

---

### workflow

::: tip Return
[WorkflowInterface](../../Interfaces/Workflow/WorkflowInterface.md)
:::

---

### arguments

::: tip Return
[ArgumentsInterface](../../Interfaces/Parameter/ArgumentsInterface.md)
:::

---

### withStepResponse

::: warning Parameters
- *step*: string
- *response*: [ResponseInterface](../../Interfaces/Response/ResponseInterface.md)
:::

::: tip Return
[WorkflowRunInterface](../../Interfaces/Workflow/WorkflowRunInterface.md)
:::

---

### has

::: warning Parameters
- *name*: string
:::

::: tip Return
bool
:::

---

### get

::: warning Parameters
- *name*: string
:::

::: danger Throws
- [TypeException](../../Exceptions/Core/TypeException.md) 
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip Return
[ResponseInterface](../../Interfaces/Response/ResponseInterface.md)
:::

---
