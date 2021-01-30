---
editLink: false
---

# RangeException

`Chevere\Exceptions\Core\RangeException`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Exceptions/Core/RangeException.php)

## Implements

- [Stringable](https://www.php.net/manual/class.stringable)
- [Throwable](https://www.php.net/manual/class.throwable)

## Extends

- [RangeException](https://www.php.net/manual/class.rangeexception)

## Description

Exception thrown to indicate range errors during program execution. Normally this means there was an arithmetic error other than under/overflow. This is the runtime version of DomainException.

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
