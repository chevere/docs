---
editLink: false
---

# WorkflowResponse

`Chevere\Components\Workflow\WorkflowResponse`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Components/Workflow/WorkflowResponse.php)

## Implements

- [WorkflowResponseInterface](../../Interfaces/Workflow/WorkflowResponseInterface.md)
- [AttributesInterface](../../Interfaces/Common/AttributesInterface.md)
- [ResponseInterface](../../Interfaces/Response/ResponseInterface.md)

## Methods

### withWorkflowMessage

::: warning Parameters
- *workflowMessage*: [WorkflowMessageInterface](../../Interfaces/Workflow/WorkflowMessageInterface.md)
:::

::: tip Return
self
:::

---

### workflowMessage

::: tip Return
[WorkflowMessageInterface](../../Interfaces/Workflow/WorkflowMessageInterface.md)
:::

---

### __construct

::: warning Parameters
- *...namedData*: mixed
:::

---

### withStatus

::: warning Parameters
- *code*: int
:::

::: tip Return
static
:::

---

### withData

::: warning Parameters
- *...namedData*: mixed
:::

::: tip Return
static
:::

---

### uuid

::: tip Return
string
:::

---

### token

::: tip Return
string
:::

---

### data

::: tip Return
array
:::

---

### status

::: tip Return
int
:::

---

### withAddedAttribute

::: warning Parameters
- *...attributes*: string
:::

::: tip Return
static
:::

---

### withoutAttribute

::: warning Parameters
- *...attributes*: string
:::

::: tip Return
static
:::

---

### hasAttribute

::: warning Parameters
- *...attributes*: string
:::

::: tip Return
bool
:::

---

### attributes

::: tip Return
[Ds\Set](https://www.php.net/manual/class.ds\set)
:::

---
