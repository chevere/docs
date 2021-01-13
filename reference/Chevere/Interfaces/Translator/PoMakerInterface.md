---
editLink: false
---

# PoMakerInterface

`Chevere\Interfaces\Translator\PoMakerInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Translator/PoMakerInterface.php)

## Description

Describes the component in charge of providing a `.po` maker.

## Methods

### __construct()

#### Parameters

1. string `$locale`
2. string `$domain`

---

### withScannerFor()

#### Parameters

1. [DirInterface](../Filesystem/DirInterface.md) `$sourceDir`

::: danger THROWS
- [DirNotExistsException](../../Exceptions/Filesystem/DirNotExistsException.md) 
- [InvalidArgumentException](../../Exceptions/Core/InvalidArgumentException.md) 
- [LogicException](../../Exceptions/Core/LogicException.md) 
:::

::: tip RETURN
self
:::

---

### makeAt()

#### Parameters

1. [DirInterface](../Filesystem/DirInterface.md) `$targetDir`

::: danger THROWS
- [BadMethodCallException](https://www.php.net/manual/class.badmethodcallexception) If called without scanner.
- ⚠ Unknown type `DirUnableToCreateException` declared in `@throws` tag`
- ⚠ Unknown type `FileUnableToRemoveException` declared in `@throws` tag`
- [LogicException](../../Exceptions/Core/LogicException.md) If unable to create the translation file.
:::

::: tip RETURN
void
:::

---
