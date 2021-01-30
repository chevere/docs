---
editLink: false
---

# ControllerWorkflow

`Chevere\Components\Action\ControllerWorkflow`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Components/Action/ControllerWorkflow.php)

## Implements

- [ActionInterface](../../Interfaces/Action/ActionInterface.md)
- [DescriptionInterface](../../Interfaces/Common/DescriptionInterface.md)
- [ControllerInterface](../../Interfaces/Action/ControllerInterface.md)
- [WorkflowProviderInterface](../../Interfaces/Workflow/WorkflowProviderInterface.md)

## Extends

- [Controller](./Controller.md)

## Constants

### PARAMETER_TYPE

Type `string`

```php
'string'
```

## Methods

### __construct

---

### getWorkflow

::: tip Return
[WorkflowInterface](../../Interfaces/Workflow/WorkflowInterface.md)
:::

---

### workflow

::: tip Return
[WorkflowInterface](../../Interfaces/Workflow/WorkflowInterface.md)
:::

---

### getContextParameters

::: tip Return
[ParametersInterface](../../Interfaces/Parameter/ParametersInterface.md)
:::

---

### withContextArguments

::: warning Parameters
- *...namedArguments*: mixed
:::

::: tip Return
self
:::

---

### contextArguments

::: tip Return
[ArgumentsInterface](../../Interfaces/Parameter/ArgumentsInterface.md)
:::

---

### hasContextArguments

::: tip Return
bool
:::

---

### contextParameters

::: tip Return
[ParametersInterface](../../Interfaces/Parameter/ParametersInterface.md)
:::

---

### getParameters

::: tip Return
[ParametersInterface](../../Interfaces/Parameter/ParametersInterface.md)
:::

---

### getResponseDataParameters

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

### responseDataParameters

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

### getResponse

::: warning Parameters
- *...namedData*: mixed
:::

::: tip Return
[ResponseInterface](../../Interfaces/Response/ResponseInterface.md)
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
