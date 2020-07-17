---
editLink: false
---

# ThrowableHandlerInterface

`Chevere\Interfaces\ThrowableHandler\ThrowableHandlerInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/ThrowableHandler/ThrowableHandlerInterface.php)

## Description

Describes the component in charge of handling throwables.

## Methods

### __construct()

#### Parameters

1. [ThrowableReadInterface](./ThrowableReadInterface.md) `$throwableRead`

::: danger THROWS
- [RuntimeException](../../Exceptions/Core/RuntimeException.md)
:::

---

### withIsDebug()

Return an instance with the specified `$debug` flag.

#### Parameters

1. bool `$isDebug`

::: tip RETURN
ThrowableHandlerInterface
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
DateTimeInterface
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
