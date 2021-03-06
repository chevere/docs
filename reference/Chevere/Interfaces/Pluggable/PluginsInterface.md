---
editLink: false
---

# PluginsInterface

`Chevere\Interfaces\Pluggable\PluginsInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/Pluggable/PluginsInterface.php)

## Description

Describes the component in charge of the interaction of pluggable and their plugs in the filesystem.

## Methods

### __construct

::: warning Parameters
- *pluggablesToPlugs*: [ClassMapInterface](../ClassMap/ClassMapInterface.md)
:::

---

### clonedClassMap

Provides access to the a the cloned class map instance.

::: tip Return
[ClassMapInterface](../ClassMap/ClassMapInterface.md)
:::

---

### getPlugsQueue

Returns the plugs queue for the given `$pluggableName`.

::: warning Parameters
- *pluggableName*: string
:::

::: danger Throws
- [PluggableNotRegisteredException](../../Exceptions/Pluggable/PluggableNotRegisteredException.md) 
- [PlugsFileNotExistsException](../../Exceptions/Pluggable/PlugsFileNotExistsException.md) 
- [RuntimeException](../../Exceptions/Core/RuntimeException.md) 
:::

::: tip Return
[PlugsQueueInterface](./PlugsQueueInterface.md)
:::

---
