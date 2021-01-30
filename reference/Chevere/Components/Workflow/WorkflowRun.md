---
editLink: false
---

# WorkflowRun

`Chevere\Components\Workflow\WorkflowRun`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Components/Workflow/WorkflowRun.php)

## Implements

- [WorkflowRunInterface](../../Interfaces/Workflow/WorkflowRunInterface.md)

## Methods

### __construct()

**Parameters:**

- *workflow*: [WorkflowInterface](../../Interfaces/Workflow/WorkflowInterface.md)
- *...namedArguments*: mixed

---

### __clone()

::: tip RETURN
void
:::

---

### uuid()

::: tip RETURN
string
:::

---

### workflow()

::: tip RETURN
[WorkflowInterface](../../Interfaces/Workflow/WorkflowInterface.md)
:::

---

### arguments()

::: tip RETURN
[ArgumentsInterface](../../Interfaces/Parameter/ArgumentsInterface.md)
:::

---

### withStepResponse()

**Parameters:**

- *step*: string
- *response*: [ResponseInterface](../../Interfaces/Response/ResponseInterface.md)

::: tip RETURN
[WorkflowRunInterface](../../Interfaces/Workflow/WorkflowRunInterface.md)
:::

---

### has()

**Parameters:**

- *name*: string

::: tip RETURN
bool
:::

---

### get()

**Parameters:**

- *name*: string

::: danger THROWS
- [TypeException](../../Exceptions/Core/TypeException.md) 
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip RETURN
[ResponseInterface](../../Interfaces/Response/ResponseInterface.md)
:::

---
