---
editLink: false
---

# ControllerResponseInterface

`Chevere\Interfaces\Controller\ControllerResponseInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Controller/ControllerResponseInterface.php)

## Description

Describes the component in charge of handling the controller response.

## Methods

### __construct()

**Parameters**

1. bool `$isSuccess`
2. array `$data`

---

### isSuccess()

Indicates whether the instance represents a success response.

::: tip RETURN
bool
:::

---

### data()

Provides access to controller response data.

::: tip RETURN
array
:::

---

### withIsSuccess()

Return an instance with the specified success flag.

**Parameters**

1. bool `$isSuccess`

::: tip RETURN
ControllerResponseInterface
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified success flag.

---

### withData()

Return an instance with the specified data.

**Parameters**

1. array `$data`

::: tip RETURN
ControllerResponseInterface
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified data.

---
