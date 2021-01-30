---
editLink: false
---

# ActionExecutedInterface

`Chevere\Interfaces\Action\ActionExecutedInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Action/ActionExecutedInterface.php)

## Description

Describes the component in charge of handling the controller execution outcome.

## Methods

### __construct()

**Parameters:**

- *data*: array

---

### code()

Provides access to the controller returned code.

::: tip RETURN
int
:::

---

### data()

Provides access to the controller returned data.

::: tip RETURN
array
:::

---

### withThrowable()

Return an instance with the specified throwable, with its exit code.

**Parameters:**

- *throwable*: [Throwable](https://www.php.net/manual/class.throwable)
- *code*: int

::: tip RETURN
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified throwable, with its exit code.

---

### hasThrowable()

Indicates whether the instance has a `\Throwable`.

::: tip RETURN
bool
:::

---

### throwable()

Provides access to the `\Throwable` instance.

::: tip RETURN
[Throwable](https://www.php.net/manual/class.throwable)
:::

---
