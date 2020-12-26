---
editLink: false
---

# WorkflowRunInterface

`Chevere\Interfaces\Workflow\WorkflowRunInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Workflow/WorkflowRunInterface.php)

## Description

Describes the component in charge of defining a workflow run, with the arguments returned for each task.

## Methods

### __construct()

#### Parameters

1. [WorkflowInterface](./WorkflowInterface.md) `$workflow`
2. mixed `...$namedArguments`

---

### uuid()

Provides access to workflow uuid V4 (RFC 4122).

::: tip RETURN
string
:::

https://tools.ietf.org/html/rfc4122

---

### workflow()

Provides access to the WorkflowInterface instance.

::: tip RETURN
[WorkflowInterface](./WorkflowInterface.md)
:::

---

### arguments()

Provides access to the ArgumentsInterface instance.

::: tip RETURN
[ArgumentsInterface](../Parameter/ArgumentsInterface.md)
:::

---

### withStepResponse()

#### Parameters

1. string `$step`
2. [ResponseSuccessInterface](../Response/ResponseSuccessInterface.md) `$response`

::: danger THROWS
- [ArgumentCountException](../../Exceptions/Core/ArgumentCountException.md) 
:::

::: tip RETURN
self
:::

---

### has()

Indicates whether the instance has the given `$step`. Will return `true` if step has ran.

#### Parameters

1. string `$step`

::: tip RETURN
bool
:::

---

### get()

Provides access to the ResponseInterface instance for the given `$step`.

#### Parameters

1. string `$step`

::: tip RETURN
[ResponseInterface](../Response/ResponseInterface.md)
:::

---
