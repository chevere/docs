---
editLink: false
---

# PlugsMap

`Chevere\Components\Pluggable\PlugsMap`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Components/Pluggable/PlugsMap.php)

## Implements

- [PlugsMapInterface](../../Interfaces/Pluggable/PlugsMapInterface.md)
- [Countable](https://www.php.net/manual/class.countable)

## Methods

### __construct

::: warning Parameters
- *type*: [PlugTypeInterface](../../Interfaces/Pluggable/PlugTypeInterface.md)
:::

---

### plugType

::: tip Return
[PlugTypeInterface](../../Interfaces/Pluggable/PlugTypeInterface.md)
:::

---

### withAdded

::: warning Parameters
- *plug*: [PlugInterface](../../Interfaces/Pluggable/PlugInterface.md)
:::

::: tip Return
[PlugsMapInterface](../../Interfaces/Pluggable/PlugsMapInterface.md)
:::

---

### count

::: tip Return
int
:::

---

### has

::: warning Parameters
- *plug*: [PlugInterface](../../Interfaces/Pluggable/PlugInterface.md)
:::

::: tip Return
bool
:::

---

### hasPlugsFor

::: warning Parameters
- *pluggable*: string
:::

::: tip Return
bool
:::

---

### getPlugsQueueTypedFor

::: warning Parameters
- *pluggable*: string
:::

::: danger Throws
- [TypeException](../../Exceptions/Core/TypeException.md) 
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip Return
[PlugsQueueTypedInterface](../../Interfaces/Pluggable/PlugsQueueTypedInterface.md)
:::

---

### getGenerator

::: tip Return
[Generator](https://www.php.net/manual/class.generator)
:::

---
