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

#### Parameters

1. [PlugTypeInterface](../../Interfaces/Pluggable/PlugTypeInterface.md) `$type`

---

### plugType()

::: tip RETURN
[PlugTypeInterface](../../Interfaces/Pluggable/PlugTypeInterface.md)
:::

---

### withAdded()

#### Parameters

1. [PlugInterface](../../Interfaces/Pluggable/PlugInterface.md) `$plug`

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

#### Parameters

1. [PlugInterface](../../Interfaces/Pluggable/PlugInterface.md) `$plug`

::: tip RETURN
bool
:::

---

### hasPlugsFor()

#### Parameters

1. string `$pluggable`

::: tip RETURN
bool
:::

---

### getPlugsQueueTypedFor()

#### Parameters

1. string `$pluggable`

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

### assertUnique()

#### Parameters

1. [PlugInterface](../../Interfaces/Pluggable/PlugInterface.md) `$plug`

::: tip RETURN
void
:::

---
