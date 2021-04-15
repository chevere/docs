---
editLink: false
---

# ControllerWorkflow

`Chevere\Components\Controller\ControllerWorkflow`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Components/Controller/ControllerWorkflow.php)

## Implements

- [ActionInterface](../../Interfaces/Action/ActionInterface.md)
- [DescriptionInterface](../../Interfaces/Common/DescriptionInterface.md)
- [ControllerInterface](../../Interfaces/Controller/ControllerInterface.md)
- [ControllerWorkflowInterface](../../Interfaces/Controller/ControllerWorkflowInterface.md)
- [WorkflowProviderInterface](../../Interfaces/Workflow/WorkflowProviderInterface.md)

## Extends

- [Controller](./Controller.md)

## Description



## Constants

### PARAMETER_TYPE

Type `string`

```php
'string'
```

## Methods

### getResponse

::: warning Parameters
- *...namedData*: mixed
:::

::: tip Return
[ResponseInterface](../../Interfaces/Response/ResponseInterface.md)
:::

---

### __construct

---

### withSetup

::: tip Return
static
:::

---

### getParameters

::: tip Return
[ParametersInterface](../../Interfaces/Parameter/ParametersInterface.md)
:::

---

### getResponseParameters

::: tip Return
[ParametersInterface](../../Interfaces/Parameter/ParametersInterface.md)
:::

---

### run

::: warning Parameters
- *arguments*: [ArgumentsInterface](../../Interfaces/Parameter/ArgumentsInterface.md)
:::

::: tip Return
[ResponseInterface](../../Interfaces/Response/ResponseInterface.md)
:::

---

### parameters

::: tip Return
[ParametersInterface](../../Interfaces/Parameter/ParametersInterface.md)
:::

---

### responseParameters

::: tip Return
[ParametersInterface](../../Interfaces/Parameter/ParametersInterface.md)
:::

---

### getArguments

::: warning Parameters
- *...namedArguments*: mixed
:::

::: tip Return
[ArgumentsInterface](../../Interfaces/Parameter/ArgumentsInterface.md)
:::

---

### getDescription

::: tip Return
string
:::

---

### description

::: tip Return
string
:::

---

### getWorkflow

::: tip Return
[WorkflowInterface](../../Interfaces/Workflow/WorkflowInterface.md)
:::

---

### withWorkflow

::: warning Parameters
- *workflow*: [WorkflowInterface](../../Interfaces/Workflow/WorkflowInterface.md)
:::

::: tip Return
static
:::

---

### workflow

::: tip Return
[WorkflowInterface](../../Interfaces/Workflow/WorkflowInterface.md)
:::

---

### assertWorkflow

::: tip Return
void
:::

---
