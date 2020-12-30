---
editLink: false
---

# WorkflowRunner

`Chevere\Components\Workflow\WorkflowRunner`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Components/Workflow/WorkflowRunner.php)

## Implements

- [WorkflowRunnerInterface](../../Interfaces/Workflow/WorkflowRunnerInterface.md)

## Methods

### __construct()

#### Parameters

1. [WorkflowRunInterface](../../Interfaces/Workflow/WorkflowRunInterface.md) `$workflowRun`

---

### workflowRun()

::: tip RETURN
[WorkflowRunInterface](../../Interfaces/Workflow/WorkflowRunInterface.md)
:::

---

### run()

#### Parameters

1.  `$container`

::: tip RETURN
[WorkflowRunInterface](../../Interfaces/Workflow/WorkflowRunInterface.md)
:::

---

### injectDependencies()

#### Parameters

1. [ActionInterface](../../Interfaces/Action/ActionInterface.md) `$action`
2.  `$container`

::: tip RETURN
void
:::

---

### getArguments()

#### Parameters

1. [StepInterface](../../Interfaces/Workflow/StepInterface.md) `$step`

::: tip RETURN
array
:::

---

### addStep()

#### Parameters

1. string `$name`
2. [StepInterface](../../Interfaces/Workflow/StepInterface.md) `$step`
3. [ResponseInterface](../../Interfaces/Response/ResponseInterface.md) `$response`

::: tip RETURN
void
:::

---
