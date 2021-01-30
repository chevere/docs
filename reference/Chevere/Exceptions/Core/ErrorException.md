---
editLink: false
---

# ErrorException

`Chevere\Exceptions\Core\ErrorException`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Exceptions/Core/ErrorException.php)

## Implements

- [Throwable](https://www.php.net/manual/class.throwable)
- [Stringable](https://www.php.net/manual/class.stringable)

## Extends

- [ErrorException](https://www.php.net/manual/class.errorexception)

## Description

Extends \ErrorException with Message support.

## Methods

### __construct()

**Parameters:**

- *message*: [MessageInterface](../../Interfaces/Message/MessageInterface.md)
- *code*: int
- *severity*: int
- *filename*: string
- *lineno*: int
- *previous*: [Throwable](https://www.php.net/manual/class.throwable)

---

### message()

::: tip RETURN
[MessageInterface](../../Interfaces/Message/MessageInterface.md)
:::

---
