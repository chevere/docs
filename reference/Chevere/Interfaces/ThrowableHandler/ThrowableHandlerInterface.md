---
editLink: false
---

# ThrowableHandlerInterface

`Chevere\Interfaces\ThrowableHandler\ThrowableHandlerInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/ThrowableHandler/ThrowableHandlerInterface.php)

## Description

Describes the component in charge of handling throwables.

## Methods

### __construct()

**Parameters:**

- *throwableRead*: [ThrowableReadInterface](./ThrowableReadInterface.md)

::: danger THROWS
- [RuntimeException](../../Exceptions/Core/RuntimeException.md) 
:::

---

### withIsDebug()

Return an instance with the specified `$debug` flag.

**Parameters:**

- *isDebug*: bool

::: tip RETURN
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$debug` flag.

---

### isDebug()

Indicates whether the instance has `debug=true`.

::: tip RETURN
bool
:::

---

### dateTimeUtc()

Provides access to the date time UTC.

::: tip RETURN
[DateTimeInterface](https://www.php.net/manual/class.datetimeinterface)
:::

---

### throwableRead()

Provides access to the `$throwableRead` instance.

::: tip RETURN
[ThrowableReadInterface](./ThrowableReadInterface.md)
:::

---

### id()

Provides access to the handler unique id.

::: tip RETURN
string
:::

---
