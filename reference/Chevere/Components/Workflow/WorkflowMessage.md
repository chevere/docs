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

#### Parameters

1. [WorkflowRunInterface](../../Interfaces/Workflow/WorkflowRunInterface.md) `$workflowRun`

---

### withPriority()

#### Parameters

1. int `$priority`

::: tip RETURN
[WorkflowMessageInterface](../../Interfaces/Workflow/WorkflowMessageInterface.md)
:::

---

### withDelay()

#### Parameters

1. int `$seconds`

::: tip RETURN
[WorkflowMessageInterface](../../Interfaces/Workflow/WorkflowMessageInterface.md)
:::

---

### withExpiration()

#### Parameters

1. int `$seconds`

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

### assertTime()

#### Parameters

1. int `$time`

::: tip RETURN
void
:::

---
