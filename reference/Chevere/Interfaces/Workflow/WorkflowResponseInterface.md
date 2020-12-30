---
editLink: false
---

# WorkflowResponseInterface

`Chevere\Interfaces\Workflow\WorkflowResponseInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Workflow/WorkflowResponseInterface.php)

## Extends

- [ResponseInterface](../Response/ResponseInterface.md)

## Description

Describes the component in charge of providing a workflow response.

## Methods

### withWorkflowMessage()

Return an instance with the specified workflow message.

#### Parameters

1. [WorkflowMessageInterface](./WorkflowMessageInterface.md) `$workflowMessage`

::: tip RETURN
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified workflow message.

---

### workflowMessage()

::: tip RETURN
[WorkflowMessageInterface](./WorkflowMessageInterface.md)
:::

---

### withStatus()

Return an instance with the specified status.

#### Parameters

1. int `$code`

::: tip RETURN
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified status.

---

### withData()

Return an instance with the specified data.

#### Parameters

1. mixed `...$data`

::: tip RETURN
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified data.

---

### uuid()

Provides access to uuid.

::: tip RETURN
string
:::

---

### token()

Provides access to token.

::: tip RETURN
string
:::

---

### data()

Provides access to data.

::: tip RETURN
array
:::

---

### status()

Provides access to status.

::: tip RETURN
int
:::

---
