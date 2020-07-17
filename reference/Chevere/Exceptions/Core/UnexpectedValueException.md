---
editLink: false
---

# UnexpectedValueException

`Chevere\Exceptions\Core\UnexpectedValueException`

[view source](https://github.com/chevere/chevere/blob/master/exceptions/Core/UnexpectedValueException.php)

## Implements

- [Throwable](https://www.php.net/manual/class.throwable)

## Extends

- [UnexpectedValueException](https://www.php.net/manual/class.unexpectedvalueexception)

## Description

Exception thrown if a value does not match with a set of values. Typically this happens when a function calls another function and expects the return value to be of a certain type or value not including arithmetic or buffer related errors.

## Methods

### __construct()

#### Parameters

1. [MessageInterface](../../Interfaces/Message/MessageInterface.md) `$message`
2. int `$code`
3. [Throwable](https://www.php.net/manual/class.throwable) `$previous`

---

### message()

::: tip RETURN
[MessageInterface](../../Interfaces/Message/MessageInterface.md)
:::

---
