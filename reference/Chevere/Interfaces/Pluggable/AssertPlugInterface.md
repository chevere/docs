---
editLink: false
---

# AssertPlugInterface

`Chevere\Interfaces\Pluggable\AssertPlugInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Pluggable/AssertPlugInterface.php)

## Description

Describes the component in charge of asserting a plug.

## Methods

### __construct()

#### Parameters

1. [PlugInterface](./PlugInterface.md) `$plug`

::: danger THROWS
- [TypeException](../../Exceptions/Core/TypeException.md) 
- ⚠ Unknown type `LogicException` declared in `@throws` tag`
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
