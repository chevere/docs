---
editLink: false
---

# AssertPathFormatInterface

`Chevere\Interfaces\Filesystem\AssertPathFormatInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Filesystem/AssertPathFormatInterface.php)

## Description

Describes the component in charge of asserting filesystem path format.

## Methods

### __construct()

#### Parameters

1. string `$path`

::: danger THROWS
- [PathNotAbsoluteException](../../Exceptions/Filesystem/PathNotAbsoluteException.md)
- [PathDoubleDotsDashException](../../Exceptions/Filesystem/PathDoubleDotsDashException.md)
- [PathDotSlashException](../../Exceptions/Filesystem/PathDotSlashException.md)
- [PathExtraSlashesException](../../Exceptions/Filesystem/PathExtraSlashesException.md)
:::

---

### path()

::: tip RETURN
string
:::

---
