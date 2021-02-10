---
editLink: false
---

# SpecMakerInterface

`Chevere\Interfaces\Spec\SpecMakerInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/Spec/SpecMakerInterface.php)

## Description

Describes the component in charge of creating a routing spec.

## Methods

### __construct

::: warning Parameters
- *specDir*: [DirInterface](../Filesystem/DirInterface.md)
- *outputDir*: [DirInterface](../Filesystem/DirInterface.md)
- *router*: [RouterInterface](../Router/RouterInterface.md)
:::

::: danger Throws
- [FilesystemException](../../Exceptions/Filesystem/FilesystemException.md) 
- [InvalidArgumentException](../../Exceptions/Core/InvalidArgumentException.md) 
:::

---

### specIndex

Provides access to the generated spec index instance.

::: tip Return
[SpecIndexInterface](./SpecIndexInterface.md)
:::

---

### files

Provides access to the files map instance.

::: tip Return
[Ds\Map](https://www.php.net/manual/class.ds\map)
:::

---
