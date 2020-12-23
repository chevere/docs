---
editLink: false
---

# PlugsQueueInterfaceException

`Chevere\Exceptions\Pluggable\PlugsQueueInterfaceException`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Exceptions/Pluggable/PlugsQueueInterfaceException.php)

## Implements

- [Throwable](https://www.php.net/manual/class.throwable)
- [Stringable](https://www.php.net/manual/class.stringable)

## Extends

- [Exception](../Core/Exception.md)

## Description

Exception thrown when an object doesn't implements the PlugsQueueInterface.

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