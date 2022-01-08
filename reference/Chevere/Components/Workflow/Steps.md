---
editLink: false
---

# Steps

`Chevere\Components\Workflow\Steps`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Components/Workflow/Steps.php)

## Implements

- [StepsInterface](../../Interfaces/Workflow/StepsInterface.md)
- [Countable](https://www.php.net/manual/class.countable)
- [KeysInterface](../../Interfaces/DataStructure/KeysInterface.md)
- [GetIteratorInterface](../../Interfaces/DataStructure/GetIteratorInterface.md)
- [MappedInterface](../../Interfaces/DataStructure/MappedInterface.md)

## Methods

### __construct

::: warning Parameters
- *...steps*: [StepInterface](../../Interfaces/Workflow/StepInterface.md)
:::

---

### keys

::: tip Return
array
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

### getIterator

::: tip Return
[Iterator](https://www.php.net/manual/class.iterator)
:::

---

### dependencies

::: tip Return
[DependenciesInterface](../../Interfaces/Dependent/DependenciesInterface.md)
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

### withAdded

::: warning Parameters
- *...steps*: [StepInterface](../../Interfaces/Workflow/StepInterface.md)
:::

::: tip Return
[StepsInterface](../../Interfaces/Workflow/StepsInterface.md)
:::

---

### withAddedBefore

::: warning Parameters
- *before*: string
- *...step*: [StepInterface](../../Interfaces/Workflow/StepInterface.md)
:::

::: tip Return
[StepsInterface](../../Interfaces/Workflow/StepsInterface.md)
:::

---

### withAddedAfter

::: warning Parameters
- *after*: string
- *...step*: [StepInterface](../../Interfaces/Workflow/StepInterface.md)
:::

::: tip Return
[StepsInterface](../../Interfaces/Workflow/StepsInterface.md)
:::

---

### __clone

::: tip Return
void
:::

---

### count

::: tip Return
int
:::

---
