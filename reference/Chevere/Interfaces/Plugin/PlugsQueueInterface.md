---
editLink: false
---

# PlugsQueueInterface

`Chevere\Interfaces\Plugin\PlugsQueueInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Plugin/PlugsQueueInterface.php)

## Implements

- [ToArrayInterface](../To/ToArrayInterface.md)

## Description

Describes the component in charge of defining a generic plugs queue.

## Methods

### __construct()

#### Parameters

1. [PlugTypeInterface](./PlugTypeInterface.md) `$plugType`

---

### withAdded()

Return an instance with the specified `$plug`.

#### Parameters

1. [PlugInterface](./PlugInterface.md) `$plug`

::: danger THROWS
- [PlugInterfaceException](../../Exceptions/Plugin/PlugInterfaceException.md)
- [OverflowException](../../Exceptions/Core/OverflowException.md)
:::

::: tip RETURN
PlugsQueueInterface
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$plug`.

---

### plugType()

Provides access to the plug type instance.

::: tip RETURN
[PlugTypeInterface](./PlugTypeInterface.md)
:::

---

### toArray()

```php
return [
    'for' => [0 => 'plugName',],
]
```

::: tip RETURN
array
:::

---
