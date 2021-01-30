---
editLink: false
---

# PlugsQueueInterface

`Chevere\Interfaces\Pluggable\PlugsQueueInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Pluggable/PlugsQueueInterface.php)

## Extends

- [ToArrayInterface](../Common/ToArrayInterface.md)

## Description

Describes the component in charge of defining a generic plugs queue.

## Methods

### __construct

::: warning Parameters
- *plugType*: [PlugTypeInterface](./PlugTypeInterface.md)
:::

---

### withAdded

Return an instance with the specified `$plug`.

::: warning Parameters
- *plug*: [PlugInterface](./PlugInterface.md)
:::

::: danger Throws
- ⚠ Unknown type `TypeException` declared in `@throws` tag`
- [OverflowException](../../Exceptions/Core/OverflowException.md) 
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$plug`.

---

### plugType

Provides access to the plug type instance.

::: tip Return
[PlugTypeInterface](./PlugTypeInterface.md)
:::

---

### toArray

```php
return [
    'for' => [0 => 'plugName',],
]
```

::: tip Return
array
:::

---
