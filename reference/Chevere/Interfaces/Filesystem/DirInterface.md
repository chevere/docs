---
editLink: false
---

# DirInterface

`Chevere\Interfaces\Filesystem\DirInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Filesystem/DirInterface.php)

## Methods

### path()

Provides access to the PathInterface instance.

::: tip RETURN
[PathInterface](./PathInterface.md)
:::

---

### create()

Creates the directory.

**Parameters**

1. int `$mode`

::: danger THROWS
[DirUnableToCreateException](../../Exceptions/Filesystem/DirUnableToCreateException.md)
if unable to create the directory
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
[DirUnableToRemoveException](../../Exceptions/Filesystem/DirUnableToRemoveException.md)
if unable to remove the directory
:::
::: danger THROWS
[FileUnableToRemoveException](../../Exceptions/Filesystem/FileUnableToRemoveException.md)
if unable to remove a file in the directory
:::
::: tip RETURN
array
:::

---

### remove()

Removes the directory.

::: danger THROWS
[DirUnableToRemoveException](../../Exceptions/Filesystem/DirUnableToRemoveException.md)
if unable to remove the directory
:::
::: tip RETURN
array
:::

---

### getChild()

Gets a child DirInterface for the added path.

**Parameters**

1. string `$path`

::: tip RETURN
DirInterface
:::

---

