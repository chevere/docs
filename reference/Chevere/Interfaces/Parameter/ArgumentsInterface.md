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

### __construct

::: warning Parameters
- *parameters*: [ParametersInterface](./ParametersInterface.md)
- *...namedArguments*: mixed
:::

::: danger Throws
- ⚠ Unknown type `ArgumentRequiredException` declared in `@throws` tag`
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
- [InvalidArgumentException](../../Exceptions/Core/InvalidArgumentException.md) 
:::

---

### parameters

Provides access to the parameters instance.

::: tip Return
[ParametersInterface](./ParametersInterface.md)
:::

---

### toArray

Provides access to the controller arguments as array.

::: tip Return
array
:::

```php
return [
    'parameterName' => 'argument',
];
```

---

### withArgument

Return an instance with the specified controller argument.

::: warning Parameters
- *name*: string
- *value*: 
:::

::: danger Throws
- ⚠ Unknown type `ArgumentValueRegexMatchException` declared in `@throws` tag`
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) If `$name` is not a known controller parameter.
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified controller argument.

---

### has

Indicates whether the instance has an argument for the parameter `$name`.

::: warning Parameters
- *name*: string
:::

::: tip Return
bool
:::

---

### get

Provides access to the argument value for the parameter `$name`.

::: warning Parameters
- *name*: string
:::

::: danger Throws
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip Return
void
:::

---

### getBoolean

Provides access to the argument value for the parameter `$boolean` type-hinted as boolean.

::: warning Parameters
- *name*: string
:::

::: danger Throws
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
- [TypeError](https://www.php.net/manual/class.typeerror) 
:::

::: tip Return
bool
:::

---

### getString

Provides access to the argument value for the parameter `$string` type-hinted as string.

::: warning Parameters
- *name*: string
:::

::: danger Throws
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
- [TypeError](https://www.php.net/manual/class.typeerror) 
:::

::: tip Return
string
:::

---

### getInteger

Provides access to the argument value for the parameter `$integer` type-hinted as integer.

::: warning Parameters
- *name*: string
:::

::: danger Throws
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
- [TypeError](https://www.php.net/manual/class.typeerror) 
:::

::: tip Return
int
:::

---

### getFloat

Provides access to the argument value for the parameter `$float` type-hinted as float.

::: warning Parameters
- *name*: string
:::

::: danger Throws
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
- [TypeError](https://www.php.net/manual/class.typeerror) 
:::

::: tip Return
float
:::

---

### getArray

Provides access to the argument value for the parameter `$array` type-hinted as array.

::: warning Parameters
- *name*: string
:::

::: danger Throws
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
- [TypeError](https://www.php.net/manual/class.typeerror) 
:::

::: tip Return
array
:::

---
