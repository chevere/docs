---
editLink: false
---

# WorkflowProviderInterface

`Chevere\Interfaces\Workflow\WorkflowProviderInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/Workflow/WorkflowProviderInterface.php)

## Description

Describes the component in charge of providing Workflow.

## Methods

### getWorkflow

Defines the Workflow.

::: tip Return
[WorkflowInterface](./WorkflowInterface.md)
:::

---

### withWorkflow

Return an instance with the specified Workflow.

::: warning Parameters
- *workflow*: [WorkflowInterface](./WorkflowInterface.md)
:::

::: tip Return
static
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified Workflow.

---

### workflow

Provides access to the Workflow instance.

::: tip Return
[WorkflowInterface](./WorkflowInterface.md)
:::

---

### assertWorkflow

::: danger Throws
- [LogicException](../../Exceptions/Core/LogicException.md) 
:::

::: tip Return
void
:::

---
