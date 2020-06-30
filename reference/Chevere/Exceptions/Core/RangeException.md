---
editLink: false
---

# RangeException

`Chevere\Exceptions\Core\RangeException`

[view source](https://github.com/chevere/chevere/blob/master/exceptions/Core/RangeException.php)

## Implements

- [Throwable](https://www.php.net/manual/class.throwable)

## Extends

- [RangeException](https://www.php.net/manual/class.rangeexception)

## Description

Exception thrown to indicate range errors during program execution. Normally this means there was an arithmetic error other than under/overflow. This is the runtime version of DomainException.

## Methods

### __construct()

**Parameters**

1. [MessageInterface](../../Interfaces/Message/MessageInterface.md) `$message`
2. int `$code`
3. [Throwable](https://www.php.net/manual/class.throwable) `$previous`

---

### message()

::: tip RETURN
[MessageInterface](../../Interfaces/Message/MessageInterface.md)
:::

---

