---
editLink: false
---

# SpecMakerInterface

`Chevere\Interfaces\Spec\SpecMakerInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Spec/SpecMakerInterface.php)

## Description

Describes the component in charge of creating a routing spec.

## Methods

### __construct()

**Parameters:**

- *specDir*: [DirInterface](../Filesystem/DirInterface.md)
- *outputDir*: [DirInterface](../Filesystem/DirInterface.md)
- *router*: [RouterInterface](../Router/RouterInterface.md)

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
[Ds\Map](https://www.php.net/manual/class.ds\map)
:::

---
