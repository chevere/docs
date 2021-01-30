---
editLink: false
---

# WorkflowMessage

`Chevere\Components\Workflow\WorkflowMessage`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Components/Workflow/WorkflowMessage.php)

## Implements

- [WorkflowMessageInterface](../../Interfaces/Workflow/WorkflowMessageInterface.md)

## Methods

### __construct()

**Parameters:**

- *workflowRun*: [WorkflowRunInterface](../../Interfaces/Workflow/WorkflowRunInterface.md)

---

### withPriority()

**Parameters:**

- *priority*: int

::: tip RETURN
[WorkflowMessageInterface](../../Interfaces/Workflow/WorkflowMessageInterface.md)
:::

---

### withDelay()

**Parameters:**

- *seconds*: int

::: tip RETURN
[WorkflowMessageInterface](../../Interfaces/Workflow/WorkflowMessageInterface.md)
:::

---

### withExpiration()

**Parameters:**

- *seconds*: int

::: tip RETURN
[WorkflowMessageInterface](../../Interfaces/Workflow/WorkflowMessageInterface.md)
:::

---

### workflowRun()

::: tip RETURN
[WorkflowRunInterface](../../Interfaces/Workflow/WorkflowRunInterface.md)
:::

---

### uuid()

::: tip RETURN
string
:::

---

### priority()

::: tip RETURN
int
:::

---

### delay()

::: tip RETURN
int
:::

---

### expiration()

::: tip RETURN
int
:::

---
