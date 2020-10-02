---
editLink: false
---

# WorkflowInterface

`Chevere\Interfaces\Workflow\WorkflowInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Workflow/WorkflowInterface.php)

## Implements

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

### __construct()

#### Parameters

1. string `$name`

---

### name()

Provides access to the instance name.

::: tip RETURN
string
:::

---

### withAdded()

Return an instance with the specified `$task`.

#### Parameters

1. string `$step`
2. [TaskInterface](./TaskInterface.md) `$task`

::: danger THROWS
- [OverflowException](../../Exceptions/Core/OverflowException.md)
:::

::: tip RETURN
WorkflowInterface
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$task`.

---

### withAddedBefore()

Return an instance with the specified `$task` added before `$before`.

#### Parameters

1. string `$before`
2. string `$step`
3. [TaskInterface](./TaskInterface.md) `$task`

::: danger THROWS
- [OverflowException](../../Exceptions/Core/OverflowException.md)
:::

::: tip RETURN
WorkflowInterface
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$task` added before `$before`.

---

### withAddedAfter()

Return an instance with the specified `$task` added after `$after`.

#### Parameters

1. string `$after`
2. string `$step`
3. [TaskInterface](./TaskInterface.md) `$task`

::: danger THROWS
- [OverflowException](../../Exceptions/Core/OverflowException.md)
:::

::: tip RETURN
WorkflowInterface
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$task` added after `$after`.

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

::: tip RETURN
[TaskInterface](./TaskInterface.md)
:::

---

### parameters()

::: tip RETURN
[ParametersInterface](../Parameter/ParametersInterface.md)
:::

---

### order()

::: tip RETURN
array
:::

---

### hasVar()

#### Parameters

1. string `$var`

::: tip RETURN
bool
:::

---

### getVar()

Provides access to the `$var` mapping for job variables.

#### Parameters

1. string `$var`

::: tip RETURN
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

### getExpected()

Provides access to the expected return arguments.

#### Parameters

1. string `$step`

::: tip RETURN
array
:::

---

### getGenerator()

::: tip RETURN
[Generator](https://www.php.net/manual/class.generator)
:::

---
