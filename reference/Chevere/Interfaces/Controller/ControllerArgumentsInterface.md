---
editLink: false
---

# ControllerArgumentsInterface

`Chevere\Interfaces\Controller\ControllerArgumentsInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Controller/ControllerArgumentsInterface.php)

## Implements

- [ToArrayInterface](../To/ToArrayInterface.md)

## Description

Describes the component in charge of handling controller arguments.

## Methods

### __construct()

**Parameters**

1. [ControllerParametersInterface](./ControllerParametersInterface.md) `$parameters`
2. array `$arguments`

::: danger THROWS
- [ControllerArgumentRequiredException](../../Exceptions/Controller/ControllerArgumentRequiredException.md)
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md)
- [ControllerArgumentRegexMatchException](../../Exceptions/Controller/ControllerArgumentRegexMatchException.md)
:::

---

### toArray()

Provides access to the controller arguments as array.

::: tip RETURN
array
:::

```php
return [
    'parameter_name' => 'argument',
];
```

---

### withArgument()

Return an instance with the specified controller argument.

**Parameters**

1. string `$name`
2. string `$value`

::: danger THROWS
- [ControllerArgumentRegexMatchException](../../Exceptions/Controller/ControllerArgumentRegexMatchException.md)
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md)
If `$name` is not a known controller parameter.
:::

::: tip RETURN
ControllerArgumentsInterface
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified controller argument.

---

### has()

Indicates whether the instance has an argument for the parameter `$name`.

**Parameters**

1. string `$name`

::: tip RETURN
bool
:::

---

### get()

Provides access to the argument value for the parameter `$name`.

**Parameters**

1. string `$name`

::: danger THROWS
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md)
:::

::: tip RETURN
void
:::

---
