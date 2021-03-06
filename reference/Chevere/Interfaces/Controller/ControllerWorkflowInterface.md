---
editLink: false
---

# ControllerWorkflowInterface

`Chevere\Interfaces\Controller\ControllerWorkflowInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/Controller/ControllerWorkflowInterface.php)

## Extends

- [ControllerInterface](./ControllerInterface.md)
- [WorkflowProviderInterface](../Workflow/WorkflowProviderInterface.md)
- [DescriptionInterface](../Common/DescriptionInterface.md)
- [ActionInterface](../Action/ActionInterface.md)

## Description

Describes the component in charge of defining a Controller with Workflow.

## Constants

### PARAMETER_TYPE

Type `string`

```php
'string'
```

## Methods

### withSetup

Return an instance with setup (after plugins and dependency injection).

::: tip Return
static
:::

This method MUST retain the state of the current instance, and return
an instance that contains setup (after plugins and dependency injection).

---

### __construct

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

### getWorkflow

Defines the Workflow.

::: tip Return
[WorkflowInterface](../Workflow/WorkflowInterface.md)
:::

---

### withWorkflow

Return an instance with the specified Workflow.

::: warning Parameters
- *workflow*: [WorkflowInterface](../Workflow/WorkflowInterface.md)
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
[WorkflowInterface](../Workflow/WorkflowInterface.md)
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
