---
editLink: false
---

# ResponseSuccessInterface

`Chevere\Interfaces\Response\ResponseSuccessInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Response/ResponseSuccessInterface.php)

## Extends

- [ResponseInterface](./ResponseInterface.md)

## Description

Describes the component in charge of defining a provisional response.

## Methods

### withData()

Return an instance with the specified data.

#### Parameters

1. array `$data`

::: tip RETURN
ResponseSuccessInterface
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified data.

---

### withWorkflowMessage()

Return an instance with the specified workflow message.

#### Parameters

1. [WorkflowMessageInterface](../Workflow/WorkflowMessageInterface.md) `$workflowMessage`

::: tip RETURN
ResponseSuccessInterface
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified workflow message.

---

### workflowMessage()

::: tip RETURN
[WorkflowMessageInterface](../Workflow/WorkflowMessageInterface.md)
:::

---

### __construct()

#### Parameters

1. [ParametersInterface](../Parameter/ParametersInterface.md) `$parameters`
2. array `$data`

---

### uuid()

Provides access to response uuid.

::: tip RETURN
string
:::

---

### token()

Provides access to response token.

::: tip RETURN
string
:::

---

### data()

Provides access to response data.

::: tip RETURN
array
:::

---
