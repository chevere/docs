---
editLink: false
---

# Workflow

`Chevere\Components\Workflow\Workflow`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Components/Workflow/Workflow.php)

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

### __construct()

#### Parameters

1. string `$name`

---

### name()

::: tip RETURN
string
:::

---

### count()

::: tip RETURN
int
:::

---

### withAdded()

#### Parameters

1. [StepInterface](../../Interfaces/Workflow/StepInterface.md) `...$step`

::: tip RETURN
[WorkflowInterface](../../Interfaces/Workflow/WorkflowInterface.md)
:::

---

### withAddedBefore()

#### Parameters

1. string `$before`
2. [StepInterface](../../Interfaces/Workflow/StepInterface.md) `...$step`

::: tip RETURN
[WorkflowInterface](../../Interfaces/Workflow/WorkflowInterface.md)
:::

---

### withAddedAfter()

#### Parameters

1. string `$after`
2. [StepInterface](../../Interfaces/Workflow/StepInterface.md) `...$step`

::: tip RETURN
[WorkflowInterface](../../Interfaces/Workflow/WorkflowInterface.md)
:::

---

### has()

#### Parameters

1. string `$step`

::: tip RETURN
bool
:::

---

### get()

#### Parameters

1. string `$step`

::: danger THROWS
- [TypeException](../../Exceptions/Core/TypeException.md) 
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip RETURN
[StepInterface](../../Interfaces/Workflow/StepInterface.md)
:::

---

### parameters()

::: tip RETURN
[ParametersInterface](../../Interfaces/Parameter/ParametersInterface.md)
:::

---

### order()

::: tip RETURN
array
:::

---

### hasVar()

#### Parameters

1. string `$variable`

::: tip RETURN
bool
:::

---

### getVar()

#### Parameters

1. string `$variable`

::: danger THROWS
- [TypeException](../../Exceptions/Core/TypeException.md) 
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip RETURN
array
:::

---

### getExpected()

#### Parameters

1. string `$step`

::: danger THROWS
- [TypeException](../../Exceptions/Core/TypeException.md) 
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip RETURN
array
:::

---

### getGenerator()

::: tip RETURN
[Generator](https://www.php.net/manual/class.generator)
:::

---

### assertNoOverflow()

#### Parameters

1. string `$step`

::: tip RETURN
void
:::

---

### setParameters()

#### Parameters

1. string `$name`
2. [StepInterface](../../Interfaces/Workflow/StepInterface.md) `$step`

::: tip RETURN
void
:::

---

### assertHasStepByName()

#### Parameters

1. string `$step`

::: tip RETURN
void
:::

---

### getPosByName()

#### Parameters

1. string `$step`

::: tip RETURN
int
:::

---

### putParameter()

#### Parameters

1. string `$name`
2. [ParameterInterface](../../Interfaces/Parameter/ParameterInterface.md) `$parameter`

::: tip RETURN
void
:::

---

### assertStepExists()

#### Parameters

1. string `$step`
2. array `$matches`

::: tip RETURN
void
:::

---
