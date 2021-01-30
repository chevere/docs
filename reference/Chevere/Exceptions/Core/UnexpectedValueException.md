---
editLink: false
---

# UnexpectedValueException

`Chevere\Exceptions\Core\UnexpectedValueException`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Exceptions/Core/UnexpectedValueException.php)

## Implements

- [Stringable](https://www.php.net/manual/class.stringable)
- [Throwable](https://www.php.net/manual/class.throwable)

## Extends

- [UnexpectedValueException](https://www.php.net/manual/class.unexpectedvalueexception)

## Description

Exception thrown if a value does not match with a set of values. Typically this happens when a function calls another function and expects the return value to be of a certain type or value not including arithmetic or buffer related errors.

## Methods

### __construct

::: warning Parameters
- *message*: [MessageInterface](../../Interfaces/Message/MessageInterface.md)
- *code*: int
- *previous*: [Throwable](https://www.php.net/manual/class.throwable)
:::

---

### message

::: tip Return
[MessageInterface](../../Interfaces/Message/MessageInterface.md)
:::

---
