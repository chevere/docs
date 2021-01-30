---
editLink: false
---

# LogicException

`Chevere\Exceptions\Core\LogicException`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Exceptions/Core/LogicException.php)

## Implements

- [Throwable](https://www.php.net/manual/class.throwable)
- [Stringable](https://www.php.net/manual/class.stringable)

## Extends

- [LogicException](https://www.php.net/manual/class.logicexception)

## Description

Exception that represents error in the program logic. This kind of exception should lead directly to a fix in your code.

## Methods

### __construct()

**Parameters:**

- *message*: [MessageInterface](../../Interfaces/Message/MessageInterface.md)
- *code*: int
- *previous*: [Throwable](https://www.php.net/manual/class.throwable)

---

### message()

::: tip RETURN
[MessageInterface](../../Interfaces/Message/MessageInterface.md)
:::

---
