---
editLink: false
---

# Workflow

`Chevere\Components\Workflow\Workflow`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Components/Workflow/Workflow.php)

## Implements

- [WorkflowInterface](../../Interfaces/Workflow/WorkflowInterface.md)
- [Countable](https://www.php.net/manual/class.countable)

## Constants

### REGEX_PARAMETER_REFERENCE

Type `string`

```php
'/^\\${([\\w-]*)}$/'
```

### REGEX_STEP_REFERENCE

Type `string`

```php
'/^\\${([\\w-]*)\\:([\\w-]*)}$/'
```

## Methods

### __construct

::: warning Parameters
- *steps*: [StepsInterface](../../Interfaces/Workflow/StepsInterface.md)
:::

---

### steps

::: tip Return
[StepsInterface](../../Interfaces/Workflow/StepsInterface.md)
:::

---

### count

::: tip Return
int
:::

---

### vars

::: tip Return
[Map](../DataStructure/Map.md)
:::

---

### withAdded

::: warning Parameters
- *...steps*: [StepInterface](../../Interfaces/Workflow/StepInterface.md)
:::

::: tip Return
[WorkflowInterface](../../Interfaces/Workflow/WorkflowInterface.md)
:::

---

### withAddedBefore

::: warning Parameters
- *before*: string
- *...steps*: [StepInterface](../../Interfaces/Workflow/StepInterface.md)
:::

::: tip Return
[WorkflowInterface](../../Interfaces/Workflow/WorkflowInterface.md)
:::

---

### withAddedAfter

::: warning Parameters
- *after*: string
- *...steps*: [StepInterface](../../Interfaces/Workflow/StepInterface.md)
:::

::: tip Return
[WorkflowInterface](../../Interfaces/Workflow/WorkflowInterface.md)
:::

---

### parameters

::: tip Return
[ParametersInterface](../../Interfaces/Parameter/ParametersInterface.md)
:::

---

### getVar

::: warning Parameters
- *variable*: string
:::

::: danger Throws
- [TypeException](../../Exceptions/Core/TypeException.md) 
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip Return
array
:::

---

### getProvided

::: warning Parameters
- *step*: string
:::

::: tip Return
[ParametersInterface](../../Interfaces/Parameter/ParametersInterface.md)
:::

---
