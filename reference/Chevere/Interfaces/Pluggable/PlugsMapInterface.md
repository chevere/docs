---
editLink: false
---

# PlugsMapInterface

`Chevere\Interfaces\Pluggable\PlugsMapInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/Pluggable/PlugsMapInterface.php)

## Extends

- [Countable](https://www.php.net/manual/class.countable)

## Description

Describes the component in charge of mapping plugs in the file system.

## Methods

### __construct

::: warning Parameters
- *type*: [PlugTypeInterface](./PlugTypeInterface.md)
:::

---

### plugType

Provides access to the plugs type instance.

::: tip Return
[PlugTypeInterface](./PlugTypeInterface.md)
:::

---

### withAdded

Return an instance with the specified added `$plug`.

::: warning Parameters
- *plug*: [PlugInterface](./PlugInterface.md)
:::

::: danger Throws
- [InvalidArgumentException](../../Exceptions/Core/InvalidArgumentException.md) 
- [OverflowException](../../Exceptions/Core/OverflowException.md) 
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified added `$plug`.

---

### has

Indicates whether the instance has the given `$plug`.

::: warning Parameters
- *plug*: [PlugInterface](./PlugInterface.md)
:::

::: tip Return
bool
:::

---

### hasPlugsFor

Indicates whether the instance has plugs for the given `$pluggable`.

::: warning Parameters
- *pluggable*: string
:::

::: tip Return
bool
:::

---

### getPlugsQueueTypedFor

Return the plugs queue typed for the given `$pluggable`.

::: warning Parameters
- *pluggable*: string
:::

::: danger Throws
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip Return
[PlugsQueueTypedInterface](./PlugsQueueTypedInterface.md)
:::

---

### getGenerator

::: tip Return
[Generator](https://www.php.net/manual/class.generator)
:::

---
