---
editLink: false
---

# WorkflowMessageInterface

`Chevere\Interfaces\Workflow\WorkflowMessageInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Workflow/WorkflowMessageInterface.php)

## Description

Describes the component in charge of defining a workflow queue.

## Methods

### withPriority

Return an instance with the specified `$priority`.

::: warning Parameters
- *priority*: int
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$priority`.

---

### withDelay

Return an instance with the specified delay in `$seconds`.

::: warning Parameters
- *seconds*: int
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified delay in `$seconds`.

---

### withExpiration

Return an instance with the specified expiration in `$seconds`.

::: warning Parameters
- *seconds*: int
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified expiration in `$seconds`.

---

### workflowRun

Provides access to the instance WorkflowRunInterface.

::: tip Return
[WorkflowRunInterface](./WorkflowRunInterface.md)
:::

---

### uuid

Provides access to the token.

::: tip Return
string
:::

---

### priority

Provides access to the priority execution.

::: tip Return
int
:::

---

### delay

Provides access to the delay execution.

::: tip Return
int
:::

---

### expiration

Provides access to the expiration, in milliseconds.

::: tip Return
int
:::

---
