---
editLink: false
---

# ActionExecutedInterface

`Chevere\Interfaces\Action\ActionExecutedInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Action/ActionExecutedInterface.php)

## Description

Describes the component in charge of handling the controller execution outcome.

## Methods

### __construct

::: warning Parameters
- *data*: array
:::

---

### code

Provides access to the controller returned code.

::: tip Return
int
:::

---

### data

Provides access to the controller returned data.

::: tip Return
array
:::

---

### withThrowable

Return an instance with the specified throwable, with its exit code.

::: warning Parameters
- *throwable*: [Throwable](https://www.php.net/manual/class.throwable)
- *code*: int
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified throwable, with its exit code.

---

### hasThrowable

Indicates whether the instance has a `\Throwable`.

::: tip Return
bool
:::

---

### throwable

Provides access to the `\Throwable` instance.

::: tip Return
[Throwable](https://www.php.net/manual/class.throwable)
:::

---
