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

#### Parameters

1. [WorkflowInterface](../../Interfaces/Workflow/WorkflowInterface.md) `$workflow`
2. mixed `...$namedArguments`

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

#### Parameters

1. string `$step`
2. [ResponseInterface](../../Interfaces/Response/ResponseInterface.md) `$response`

::: tip RETURN
[WorkflowRunInterface](../../Interfaces/Workflow/WorkflowRunInterface.md)
:::

---

### has()

#### Parameters

1. string `$name`

::: tip RETURN
bool
:::

---

### get()

#### Parameters

1. string `$name`

::: danger THROWS
- [TypeException](../../Exceptions/Core/TypeException.md) 
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip RETURN
[ResponseInterface](../../Interfaces/Response/ResponseInterface.md)
:::

---
