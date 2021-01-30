---
editLink: false
---

# PlugsMapInterface

`Chevere\Interfaces\Pluggable\PlugsMapInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Pluggable/PlugsMapInterface.php)

## Extends

- [Countable](https://www.php.net/manual/class.countable)

## Description

Describes the component in charge of mapping plugs in the file system.

## Methods

### __construct()

**Parameters:**

- *type*: [PlugTypeInterface](./PlugTypeInterface.md)

---

### plugType()

Provides access to the plugs type instance.

::: tip RETURN
[PlugTypeInterface](./PlugTypeInterface.md)
:::

---

### withAdded()

Return an instance with the specified added `$plug`.

**Parameters:**

- *plug*: [PlugInterface](./PlugInterface.md)

::: danger THROWS
- [InvalidArgumentException](../../Exceptions/Core/InvalidArgumentException.md) 
- [OverflowException](../../Exceptions/Core/OverflowException.md) 
:::

::: tip RETURN
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified added `$plug`.

---

### has()

Indicates whether the instance has the given `$plug`.

**Parameters:**

- *plug*: [PlugInterface](./PlugInterface.md)

::: tip RETURN
bool
:::

---

### hasPlugsFor()

Indicates whether the instance has plugs for the given `$pluggable`.

**Parameters:**

- *pluggable*: string

::: tip RETURN
bool
:::

---

### getPlugsQueueTypedFor()

Return the plugs queue typed for the given `$pluggable`.

**Parameters:**

- *pluggable*: string

::: danger THROWS
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip RETURN
[PlugsQueueTypedInterface](./PlugsQueueTypedInterface.md)
:::

---

### getGenerator()

::: tip RETURN
[Generator](https://www.php.net/manual/class.generator)
:::

---
