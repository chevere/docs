---
editLink: false
---

# WorkflowInterface

`Chevere\Interfaces\Workflow\WorkflowInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/Workflow/WorkflowInterface.php)

## Extends

- [Countable](https://www.php.net/manual/class.countable)

## Description

Describes the component in charge of defining a collection of chained tasks.

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
- *...steps*: [StepInterface](./StepInterface.md)
:::

---

### withAdded

Return an instance with the specified `$step`.

::: warning Parameters
- *...steps*: [StepInterface](./StepInterface.md)
:::

::: danger Throws
- [OverflowException](../../Exceptions/Core/OverflowException.md) 
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$step`.

---

### withAddedBefore

Return an instance with the specified `$step` added before `$before`.

::: warning Parameters
- *before*: string
- *...step*: [StepInterface](./StepInterface.md)
:::

::: danger Throws
- [OverflowException](../../Exceptions/Core/OverflowException.md) 
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$step` added before `$before`.

---

### withAddedAfter

Return an instance with the specified `$step` added after `$after`.

::: warning Parameters
- *after*: string
- *...step*: [StepInterface](./StepInterface.md)
:::

::: danger Throws
- [OverflowException](../../Exceptions/Core/OverflowException.md) 
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$step` added after `$after`.

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

::: tip Return
[StepInterface](./StepInterface.md)
:::

---

### dependencies

::: tip Return
[DependenciesInterface](../Dependent/DependenciesInterface.md)
:::

---

### parameters

::: tip Return
[ParametersInterface](../Parameter/ParametersInterface.md)
:::

---

### order

::: tip Return
array
:::

---

### hasVar

::: warning Parameters
- *var*: string
:::

::: tip Return
bool
:::

---

### getVar

Provides access to the `$var` mapping for job variables.

::: warning Parameters
- *var*: string
:::

::: tip Return
array
:::

Case `${foo}` (workflow parameters):

```php
return ['foo'];
```

Case `${step:var}` (named step responses):

```php
return ['step', 'var'];
```

---

### getExpected

Provides access to the expected return arguments for the given `$step`.

::: warning Parameters
- *step*: string
:::

::: tip Return
array
:::

---

### getGenerator

::: tip Return
[Generator](https://www.php.net/manual/class.generator)
:::

---
