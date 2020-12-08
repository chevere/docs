---
editLink: false
---

# PluginsInterface

`Chevere\Interfaces\Plugin\PluginsInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Plugin/PluginsInterface.php)

## Description

Describes the component in charge of the interaction of pluggable and their plugs in the filesystem.

## Methods

### __construct()

#### Parameters

1. [ClassMapInterface](../ClassMap/ClassMapInterface.md) `$pluggablesToPlugs`

---

### clonedClassMap()

Provides access to the a the cloned class map instance.

::: tip RETURN
[ClassMapInterface](../ClassMap/ClassMapInterface.md)
:::

---

### getPlugsQueue()

Returns the plugs queue for the given `$pluggableName`.

#### Parameters

1. string `$pluggableName`

::: danger THROWS
- [PluggableNotRegisteredException](../../Exceptions/Plugin/PluggableNotRegisteredException.md) 
- [PlugsFileNotExistsException](../../Exceptions/Plugin/PlugsFileNotExistsException.md) 
- [RuntimeException](../../Exceptions/Core/RuntimeException.md) 
- [PlugsQueueInterfaceException](../../Exceptions/Plugin/PlugsQueueInterfaceException.md) 
:::

::: tip RETURN
[PlugsQueueInterface](./PlugsQueueInterface.md)
:::

---
