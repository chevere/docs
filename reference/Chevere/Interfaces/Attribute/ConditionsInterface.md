---
editLink: false
---

# ConditionsInterface

`Chevere\Interfaces\Attribute\ConditionsInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Attribute/ConditionsInterface.php)

## Implements

- [DsMapInterface](../DataStructures/DsMapInterface.md)
- [Countable](https://www.php.net/manual/class.countable)

## Description

Describes the component in charge of collecting objects implementing `ConditionInterface`.

## Methods

### withAdded()

Return an instance with the specified `$condition` added.

#### Parameters

1. [ConditionInterface](./ConditionInterface.md) `$condition`

::: danger THROWS
- ⚠ Unknown type `OverflowException` declared in `@throws` tag`
:::

::: tip RETURN
ConditionsInterface
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$condition` added.

---

### withModify()

Return an instance with the specified `$condition` modifying an already added condition.

#### Parameters

1. [ConditionInterface](./ConditionInterface.md) `$condition`

::: danger THROWS
- ⚠ Unknown type `OutOfBoundsException` declared in `@throws` tag`
:::

::: tip RETURN
ConditionsInterface
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$condition` modifying an already added condition.

---

### contains()

Indicates whether the instance has the given `$name`.

#### Parameters

1. string `$name`

::: tip RETURN
bool
:::

---

### get()

#### Parameters

1. string `$name`

::: danger THROWS
- ⚠ Unknown type `OutOfRangeException` declared in `@throws` tag`
:::

::: tip RETURN
[ConditionInterface](./ConditionInterface.md)
:::

---

### getGenerator()

::: tip RETURN
[Generator](https://www.php.net/manual/class.generator)
:::

---

### keys()

Provides access to the map keys.

::: tip RETURN
array
:::

---

### mapCopy()

Provides a deep copy of the internal map.

::: tip RETURN
Ds\Map
:::

---
