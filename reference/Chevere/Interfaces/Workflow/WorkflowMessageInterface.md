---
editLink: false
---

# WorkflowMessageInterface

`Chevere\Interfaces\Workflow\WorkflowMessageInterface`

[view source](https://github.com/chevere/chevere/blob/master/Workflow/WorkflowMessageInterface.php)

## Description

Describes the component in charge of defining a workflow queue.

## Methods

### withPriority()

Return an instance with the specified `$priority`.

#### Parameters

1. int `$priority`

::: tip RETURN
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$priority`.

---

### withDelay()

Return an instance with the specified delay in `$seconds`.

#### Parameters

1. int `$seconds`

::: tip RETURN
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified delay in `$seconds`.

---

### withExpiration()

Return an instance with the specified expiration in `$seconds`.

#### Parameters

1. int `$seconds`

::: tip RETURN
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified expiration in `$seconds`.

---

### workflowRun()

Provides access to the instance WorkflowRunInterface.

::: tip RETURN
[WorkflowRunInterface](./WorkflowRunInterface.md)
:::

---

### uuid()

Provides access to the token.

::: tip RETURN
string
:::

---

### priority()

Provides access to the priority execution.

::: tip RETURN
int
:::

---

### delay()

Provides access to the delay execution.

::: tip RETURN
int
:::

---

### expiration()

Provides access to the expiration, in milliseconds.

::: tip RETURN
int
:::

---
