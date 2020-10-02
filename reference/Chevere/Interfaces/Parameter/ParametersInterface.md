---
editLink: false
---

# ParametersInterface

`Chevere\Interfaces\Parameter\ParametersInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Parameter/ParametersInterface.php)

## Implements

- [Countable](https://www.php.net/manual/class.countable)

## Description

Describes the component in charge of collecting objects implementing `ParameterInterface`.

## Methods

### getGenerator()

::: tip RETURN
[Generator](https://www.php.net/manual/class.generator)
:::

---

### toArray()

Provides access to the array representation of this instance.

::: tip RETURN
array
:::

```php
return [
    'name' => $parameter,
];
```

---

### withAdded()

Return an instance with the specified `$parameter` instance added.

#### Parameters

1. [ParameterInterface](./ParameterInterface.md) `$parameter`

::: danger THROWS
- [OverflowException](../../Exceptions/Core/OverflowException.md)
:::

::: tip RETURN
ParametersInterface
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$parameter` instance added.

---

### withModify()

Return an instance with the specified `$parameter` modifying an already added parameter.

#### Parameters

1. [ParameterInterface](./ParameterInterface.md) `$parameter`

::: danger THROWS
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md)
:::

::: tip RETURN
ParametersInterface
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$parameter` modifying an already added parameter.

---

### has()

Indicates whether the instance has a parameter by name `$parameter`.

#### Parameters

1. string `$parameter`

::: tip RETURN
bool
:::

---

### get()

#### Parameters

1. string `$parameter`

::: danger THROWS
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md)
:::

::: tip RETURN
[ParameterInterface](./ParameterInterface.md)
:::

---
