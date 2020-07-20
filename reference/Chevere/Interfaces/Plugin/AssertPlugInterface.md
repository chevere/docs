---
editLink: false
---

# AssertPlugInterface

`Chevere\Interfaces\Plugin\AssertPlugInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Plugin/AssertPlugInterface.php)

## Description

Describes the component in charge of asserting a plug.

## Methods

### __construct()

#### Parameters

1. [PlugInterface](./PlugInterface.md) `$plug`

::: danger THROWS
- [PlugInterfaceException](../../Exceptions/Plugin/PlugInterfaceException.md)
- [PluggableNotExistsException](../../Exceptions/Plugin/PluggableNotExistsException.md)
- [PluggableAnchorsException](../../Exceptions/Plugin/PluggableAnchorsException.md)
- [PluggableAnchorNotExistsException](../../Exceptions/Plugin/PluggableAnchorNotExistsException.md)
:::

---

### plugType()

Provides access to the plug type instance.

::: tip RETURN
[PlugTypeInterface](./PlugTypeInterface.md)
:::

---

### plug()

Provides access to the plug instance.

::: tip RETURN
[PlugInterface](./PlugInterface.md)
:::

---
