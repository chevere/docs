---
editLink: false
---

# ArgumentsInterface

`Chevere\Interfaces\Parameter\ArgumentsInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Parameter/ArgumentsInterface.php)

## Extends

- [ToArrayInterface](../Common/ToArrayInterface.md)

## Description

Describes the component in charge of defining a set of parameters with arguments.

## Methods

### __construct()

#### Parameters

1. [ParametersInterface](./ParametersInterface.md) `$parameters`
2. mixed `$namedArguments`

::: danger THROWS
- ⚠ Unknown type `ArgumentRequiredException` declared in `@throws` tag`
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
- [InvalidArgumentException](../../Exceptions/Core/InvalidArgumentException.md) 
:::

---

### parameters()

Provides access to the parameters instance.

::: tip RETURN
[ParametersInterface](./ParametersInterface.md)
:::

---

### toArray()

Provides access to the controller arguments as array.

::: tip RETURN
array
:::

```php
return [
    'parameterName' => 'argument',
];
```

---

### withArgument()

Return an instance with the specified controller argument.

#### Parameters

1. string `$name`
2.  `$value`

::: danger THROWS
- ⚠ Unknown type `ArgumentValueRegexMatchException` declared in `@throws` tag`
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) If `$name` is not a known controller parameter.
:::

::: tip RETURN
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified controller argument.

---

### has()

Indicates whether the instance has an argument for the parameter `$name`.

#### Parameters

1. string `$name`

::: tip RETURN
bool
:::

---

### get()

Provides access to the argument value for the parameter `$name`.

#### Parameters

1. string `$name`

::: danger THROWS
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip RETURN
void
:::

---

### getBoolean()

Provides access to the argument value for the parameter `$boolean` type-hinted as boolean.

#### Parameters

1. string `$boolean`

::: danger THROWS
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
- [TypeError](https://www.php.net/manual/class.typeerror) 
:::

::: tip RETURN
bool
:::

---

### getString()

Provides access to the argument value for the parameter `$string` type-hinted as string.

#### Parameters

1. string `$string`

::: danger THROWS
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
- [TypeError](https://www.php.net/manual/class.typeerror) 
:::

::: tip RETURN
string
:::

---

### getInteger()

Provides access to the argument value for the parameter `$integer` type-hinted as integer.

#### Parameters

1. string `$integer`

::: danger THROWS
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
- [TypeError](https://www.php.net/manual/class.typeerror) 
:::

::: tip RETURN
int
:::

---

### getFloat()

Provides access to the argument value for the parameter `$float` type-hinted as float.

#### Parameters

1. string `$float`

::: danger THROWS
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
- [TypeError](https://www.php.net/manual/class.typeerror) 
:::

::: tip RETURN
float
:::

---

### getArray()

Provides access to the argument value for the parameter `$array` type-hinted as array.

#### Parameters

1. string `$array`

::: danger THROWS
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
- [TypeError](https://www.php.net/manual/class.typeerror) 
:::

::: tip RETURN
array
:::

---
