---
editLink: false
---

# SpecMakerInterface

`Chevere\Interfaces\Spec\SpecMakerInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Spec/SpecMakerInterface.php)

## Description

Describes the component in charge of creating a routing spec.

## Methods

### __construct()

#### Parameters

1. [SpecPathInterface](./SpecPathInterface.md) `$specPath`
2. [DirInterface](../Filesystem/DirInterface.md) `$dir`
3. [RouterInterface](../Router/RouterInterface.md) `$router`

::: danger THROWS
- [FilesystemException](../../Exceptions/Filesystem/FilesystemException.md)
- [InvalidArgumentException](../../Exceptions/Core/InvalidArgumentException.md)
:::

---

### specIndex()

Provides access to the generated spec index instance.

::: tip RETURN
[SpecIndexInterface](./SpecIndexInterface.md)
:::

---

### files()

Provides access to the files map instance.

::: tip RETURN
Ds\Map
:::

---
