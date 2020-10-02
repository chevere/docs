---
editLink: false
---

# WorkflowRunInterface

`Chevere\Interfaces\Workflow\WorkflowRunInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Workflow/WorkflowRunInterface.php)

## Description

Describes the component in charge of defining a workflow run, with the arguments returned for each task.

## Methods

### __construct()

#### Parameters

1. [WorkflowInterface](./WorkflowInterface.md) `$workflow`
2. array `$arguments`

---

### uuid()

Provides access to workflow uuid V4 (RFC 4122).

::: tip RETURN
string
:::

https://tools.ietf.org/html/rfc4122

---

### workflow()

::: tip RETURN
[WorkflowInterface](./WorkflowInterface.md)
:::

---

### arguments()

::: tip RETURN
[ArgumentsInterface](../Parameter/ArgumentsInterface.md)
:::

---

### withAdded()

#### Parameters

1. string `$step`
2. [ResponseSuccessInterface](../Response/ResponseSuccessInterface.md) `$response`

::: tip RETURN
WorkflowRunInterface
:::

---

### has()

#### Parameters

1. string `$step`

::: tip RETURN
bool
:::

---

### get()

#### Parameters

1. string `$step`

::: tip RETURN
[ResponseInterface](../Response/ResponseInterface.md)
:::

---
