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
- *...steps*: [StepInterface](../../Interfaces/Workflow/StepInterface.md)
:::

---

### count

::: tip Return
int
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
- *...step*: [StepInterface](../../Interfaces/Workflow/StepInterface.md)
:::

::: tip Return
[WorkflowInterface](../../Interfaces/Workflow/WorkflowInterface.md)
:::

---

### withAddedAfter

::: warning Parameters
- *after*: string
- *...step*: [StepInterface](../../Interfaces/Workflow/StepInterface.md)
:::

::: tip Return
[WorkflowInterface](../../Interfaces/Workflow/WorkflowInterface.md)
:::

---

### has

::: warning Parameters
- *step*: string
:::

::: tip Return
bool
:::

---

### get

::: warning Parameters
- *step*: string
:::

::: danger Throws
- [TypeException](../../Exceptions/Core/TypeException.md) 
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip Return
[StepInterface](../../Interfaces/Workflow/StepInterface.md)
:::

---

### dependencies

::: tip Return
[DependenciesInterface](../../Interfaces/Dependent/DependenciesInterface.md)
:::

---

### parameters

::: tip Return
[ParametersInterface](../../Interfaces/Parameter/ParametersInterface.md)
:::

---

### order

::: tip Return
array
:::

---

### hasVar

::: warning Parameters
- *variable*: string
:::

::: tip Return
bool
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

### getGenerator

::: tip Return
[Generator](https://www.php.net/manual/class.generator)
:::

---
