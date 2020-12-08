---
editLink: false
---

# RoutingDescriptorsMakerInterface

`Chevere\Interfaces\Routing\RoutingDescriptorsMakerInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Routing/RoutingDescriptorsMakerInterface.php)

## Description

Describes the component in charge of generating routing descriptors from a given directory.

## Constants

### ROUTE_NAME_BASENAME

Type `string`

```php
'RouteName.php'
```

## Methods

### __construct()

#### Parameters

1. [DirInterface](../Filesystem/DirInterface.md) `$dir`

::: danger THROWS
- [LogicException](../../Exceptions/Core/LogicException.md) 
:::

---

### descriptors()

Provides access to the generated routing descriptors.

::: tip RETURN
[RoutingDescriptorsInterface](./RoutingDescriptorsInterface.md)
:::

---
