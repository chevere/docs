---
editLink: false
---

# ControllerParametersInterface

`Chevere\Interfaces\Controller\ControllerParametersInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Controller/ControllerParametersInterface.php)

## Implements

- [DsMapInterface](../DataStructures/DsMapInterface.md)
- [Countable](https://www.php.net/manual/class.countable)

## Methods

### map()

::: tip RETURN
Ds\Map
:::

---

### withParameter()

Return an instance with the specified Controller Parameter.

**Parameters**

1. [ControllerParameterInterface](./ControllerParameterInterface.md) `$controllerParameter`

::: tip RETURN
ControllerParametersInterface
:::
This method MUST retain the state of the current instance, and return
an instance that contains the specified Controller Parameter.

---

### hasParameterName()

**Parameters**

1. string `$name`

::: tip RETURN
bool
:::

---

### get()

**Parameters**

1. string `$name`

::: tip RETURN
[ControllerParameterInterface](./ControllerParameterInterface.md)
:::

---

### keys()

::: tip RETURN
array
:::

---

