---
editLink: false
---

# DirInterface

`Chevere\Interfaces\Filesystem\DirInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Filesystem/DirInterface.php)

## Description

Describes the component in charge of interacting with filesystem directories.

## Methods

### __construct()

#### Parameters

1. [PathInterface](./PathInterface.md) `$path`

::: danger THROWS
- [PathIsFileException](../../Exceptions/Filesystem/PathIsFileException.md)
- [DirTailException](../../Exceptions/Filesystem/DirTailException.md)
:::

---

### path()

Provides access to the PathInterface instance.

::: tip RETURN
[PathInterface](./PathInterface.md)
:::

---

### create()

Creates the directory.

#### Parameters

1. int `$mode`

::: danger THROWS
- [DirUnableToCreateException](../../Exceptions/Filesystem/DirUnableToCreateException.md)
:::

::: tip RETURN
void
:::

---

### exists()

Returns a boolean indicating whether the directory exists.

::: tip RETURN
bool
:::

---

### assertExists()

::: tip RETURN
void
:::

---

### removeContents()

Removes the contents from a path without deleting the path.

::: danger THROWS
- [DirUnableToRemoveException](../../Exceptions/Filesystem/DirUnableToRemoveException.md)
if unable to remove the directory
- [FileUnableToRemoveException](../../Exceptions/Filesystem/FileUnableToRemoveException.md)
if unable to remove a file in the directory
:::

::: tip RETURN
array
:::

---

### remove()

Removes the directory.

::: danger THROWS
- [DirUnableToRemoveException](../../Exceptions/Filesystem/DirUnableToRemoveException.md)
if unable to remove the directory
:::

::: tip RETURN
array
:::

---

### getChild()

Gets a child `DirInterface` for the added path.

#### Parameters

1. string `$path`

::: danger THROWS
- [PathInvalidException](../../Exceptions/Filesystem/PathInvalidException.md)
:::

::: tip RETURN
DirInterface
:::

---
