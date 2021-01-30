---
editLink: false
---

# PlugsMap

`Chevere\Components\Pluggable\PlugsMap`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Components/Pluggable/PlugsMap.php)

## Implements

- [PlugsMapInterface](../../Interfaces/Pluggable/PlugsMapInterface.md)
- [Countable](https://www.php.net/manual/class.countable)

## Methods

### __construct()

**Parameters:**

- *type*: [PlugTypeInterface](../../Interfaces/Pluggable/PlugTypeInterface.md)

---

### plugType()

::: tip RETURN
[PlugTypeInterface](../../Interfaces/Pluggable/PlugTypeInterface.md)
:::

---

### withAdded()

**Parameters:**

- *plug*: [PlugInterface](../../Interfaces/Pluggable/PlugInterface.md)

::: tip RETURN
[PlugsMapInterface](../../Interfaces/Pluggable/PlugsMapInterface.md)
:::

---

### count()

::: tip RETURN
int
:::

---

### has()

**Parameters:**

- *plug*: [PlugInterface](../../Interfaces/Pluggable/PlugInterface.md)

::: tip RETURN
bool
:::

---

### hasPlugsFor()

**Parameters:**

- *pluggable*: string

::: tip RETURN
bool
:::

---

### getPlugsQueueTypedFor()

**Parameters:**

- *pluggable*: string

::: danger THROWS
- [TypeException](../../Exceptions/Core/TypeException.md) 
- [OutOfBoundsException](../../Exceptions/Core/OutOfBoundsException.md) 
:::

::: tip RETURN
[PlugsQueueTypedInterface](../../Interfaces/Pluggable/PlugsQueueTypedInterface.md)
:::

---

### getGenerator()

::: tip RETURN
[Generator](https://www.php.net/manual/class.generator)
:::

---
