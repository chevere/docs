---
editLink: false
---

# ThrowableHandlerInterface

`Chevere\Interfaces\ThrowableHandler\ThrowableHandlerInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/ThrowableHandler/ThrowableHandlerInterface.php)

## Description

Describes the component in charge of handling throwables.

## Methods

### __construct

::: warning Parameters
- *throwableRead*: [ThrowableReadInterface](./ThrowableReadInterface.md)
:::

::: danger Throws
- [RuntimeException](../../Exceptions/Core/RuntimeException.md) 
:::

---

### withIsDebug

Return an instance with the specified `$debug` flag.

::: warning Parameters
- *isDebug*: bool
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$debug` flag.

---

### isDebug

Indicates whether the instance has `debug=true`.

::: tip Return
bool
:::

---

### dateTimeUtc

Provides access to the date time UTC.

::: tip Return
[DateTimeInterface](https://www.php.net/manual/class.datetimeinterface)
:::

---

### throwableRead

Provides access to the `$throwableRead` instance.

::: tip Return
[ThrowableReadInterface](./ThrowableReadInterface.md)
:::

---

### id

Provides access to the handler unique id.

::: tip Return
string
:::

---
