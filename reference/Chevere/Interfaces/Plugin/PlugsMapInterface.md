# PlugsMapInterface

`Chevere\Interfaces\Plugin\PlugsMapInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Plugin/PlugsMapInterface.php)

## Implements

- Countable
## Methods

### type()

::: tip RETURN
[PlugTypeInterface](./PlugTypeInterface.md)
:::


---

### withAdded()

**Parameters**

1. [AssertPlugInterface](./AssertPlugInterface.md) `$assertPlug`

::: tip RETURN
PlugsMapInterface
:::


---

### has()

**Parameters**

1. [PlugInterface](./PlugInterface.md) `$plug`

::: tip RETURN
bool
:::


---

### hasPlugsFor()

**Parameters**

1. string `$pluggable`

::: tip RETURN
bool
:::


---

### getPlugsFor()

**Parameters**

1. string `$pluggable`

::: tip RETURN
[PlugsQueueTypedInterface](./PlugsQueueTypedInterface.md)
:::


---

