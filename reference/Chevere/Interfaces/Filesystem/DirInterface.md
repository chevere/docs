---
editLink: false
---

# DirInterface

`Chevere\Interfaces\Filesystem\DirInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Filesystem/DirInterface.php)

## Description

Describes the component in charge of interacting with filesystem directories.

## Methods

### __construct

::: warning Parameters
- *path*: [PathInterface](./PathInterface.md)
:::

::: danger Throws
- [PathIsFileException](../../Exceptions/Filesystem/PathIsFileException.md) 
- [PathTailException](../../Exceptions/Filesystem/PathTailException.md) 
:::

---

### path

Provides access to the PathInterface instance.

::: tip Return
[PathInterface](./PathInterface.md)
:::

---

### create

Creates the directory.

::: warning Parameters
- *mode*: int
:::

::: danger Throws
- [DirUnableToCreateException](../../Exceptions/Filesystem/DirUnableToCreateException.md) 
:::

::: tip Return
void
:::

---

### createIfNotExists

Creates the directory if it doesn't exists.

::: warning Parameters
- *mode*: int
:::

::: danger Throws
- [DirUnableToCreateException](../../Exceptions/Filesystem/DirUnableToCreateException.md) 
:::

::: tip Return
void
:::

---

### exists

Returns a boolean indicating whether the directory exists.

::: tip Return
bool
:::

---

### assertExists

::: danger Throws
- [DirNotExistsException](../../Exceptions/Filesystem/DirNotExistsException.md) 
:::

::: tip Return
void
:::

---

### removeContents

Removes the contents from a path without deleting the path.

::: danger Throws
- [DirUnableToRemoveException](../../Exceptions/Filesystem/DirUnableToRemoveException.md) if unable to remove the directory
- [FileUnableToRemoveException](../../Exceptions/Filesystem/FileUnableToRemoveException.md) if unable to remove a file in the directory
:::

::: tip Return
array
:::

---

### remove

Removes the directory.

::: danger Throws
- [DirUnableToRemoveException](../../Exceptions/Filesystem/DirUnableToRemoveException.md) if unable to remove the directory
:::

::: tip Return
array
:::

---

### getChild

Gets a child `DirInterface` for the added path.

::: warning Parameters
- *path*: string
:::

::: danger Throws
- [PathInvalidException](../../Exceptions/Filesystem/PathInvalidException.md) 
:::

::: tip Return
self
:::

---
