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

**Parameters:**

- *name*: string

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

**Parameters:**

- *...step*: [StepInterface](../../Interfaces/Workflow/StepInterface.md)

::: tip RETURN
[WorkflowInterface](../../Interfaces/Workflow/WorkflowInterface.md)
:::

---

### withAddedBefore()

**Parameters:**

- *before*: string
- *...step*: [StepInterface](../../Interfaces/Workflow/StepInterface.md)

::: tip RETURN
[WorkflowInterface](../../Interfaces/Workflow/WorkflowInterface.md)
:::

---

### withAddedAfter()

**Parameters:**

- *after*: string
- *...step*: [StepInterface](../../Interfaces/Workflow/StepInterface.md)

::: tip RETURN
[WorkflowInterface](../../Interfaces/Workflow/WorkflowInterface.md)
:::

---

### has()

**Parameters:**

- *step*: string

::: tip RETURN
bool
:::

---

### get()

**Parameters:**

- *step*: string

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

**Parameters:**

- *variable*: string

::: tip RETURN
bool
:::

---

### getVar()

**Parameters:**

- *variable*: string

::: danger THROWS
- [TypeException](../../Exceptions/Core/TypeException.md) 
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip RETURN
array
:::

---

### getExpected()

**Parameters:**

- *step*: string

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
