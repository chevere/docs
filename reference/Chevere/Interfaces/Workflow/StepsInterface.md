---
editLink: false
---

# StepsInterface

`Chevere\Interfaces\Workflow\StepsInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/Workflow/StepsInterface.php)

## Extends

- [MappedInterface](../DataStructure/MappedInterface.md)
- [GetIteratorInterface](../DataStructure/GetIteratorInterface.md)
- [KeysInterface](../DataStructure/KeysInterface.md)
- [Countable](https://www.php.net/manual/class.countable)

## Description

Describes the component in charge of defining a collection of steps.

## Methods

### __construct

::: warning Parameters
- *...steps*: [StepInterface](./StepInterface.md)
:::

---

### has

::: warning Parameters
- *name*: string
:::

::: tip Return
bool
:::

---

### get

::: warning Parameters
- *name*: string
:::

::: tip Return
[StepInterface](./StepInterface.md)
:::

---

### dependencies

::: tip Return
[DependenciesInterface](../Dependent/DependenciesInterface.md)
:::

---

### keys

::: tip Return
array
:::

---

### count

::: tip Return
int
:::

---

### withAdded

::: warning Parameters
- *...steps*: [StepInterface](./StepInterface.md)
:::

::: tip Return
StepsInterface
:::

---

### withAddedBefore

::: warning Parameters
- *before*: string
- *...step*: [StepInterface](./StepInterface.md)
:::

::: tip Return
StepsInterface
:::

---

### withAddedAfter

::: warning Parameters
- *after*: string
- *...step*: [StepInterface](./StepInterface.md)
:::

::: tip Return
StepsInterface
:::

---

### getIterator

::: tip Return
[Iterator](https://www.php.net/manual/class.iterator)
:::

---
