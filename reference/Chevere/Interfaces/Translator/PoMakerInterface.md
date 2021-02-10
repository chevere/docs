---
editLink: false
---

# PoMakerInterface

`Chevere\Interfaces\Translator\PoMakerInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/Translator/PoMakerInterface.php)

## Description

Describes the component in charge of providing a `.po` maker.

## Methods

### __construct

::: warning Parameters
- *locale*: string
- *domain*: string
:::

---

### withScanFor

::: warning Parameters
- *sourceDir*: [DirInterface](../Filesystem/DirInterface.md)
:::

::: danger Throws
- [DirNotExistsException](../../Exceptions/Filesystem/DirNotExistsException.md) 
- [InvalidArgumentException](../../Exceptions/Core/InvalidArgumentException.md) 
- [LogicException](../../Exceptions/Core/LogicException.md) 
:::

::: tip Return
self
:::

---

### make

::: warning Parameters
- *targetDir*: [DirInterface](../Filesystem/DirInterface.md)
:::

::: danger Throws
- [BadMethodCallException](https://www.php.net/manual/class.badmethodcallexception) If called without scanner.
- ⚠ Unknown type `DirUnableToCreateException` declared in `@throws` tag`
- ⚠ Unknown type `FileUnableToRemoveException` declared in `@throws` tag`
- [LogicException](../../Exceptions/Core/LogicException.md) If unable to create the translation file.
:::

::: tip Return
void
:::

---
