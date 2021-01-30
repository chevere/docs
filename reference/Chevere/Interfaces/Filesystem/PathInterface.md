---
editLink: false
---

# PathInterface

`Chevere\Interfaces\Filesystem\PathInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Filesystem/PathInterface.php)

## Extends

- [ToStringInterface](../Common/ToStringInterface.md)

## Description

Describes the component in charge of interact with filesystem paths.

## Methods

### __construct

::: warning Parameters
- *absolute*: string
:::

::: danger Throws
- [PathDotSlashException](../../Exceptions/Filesystem/PathDotSlashException.md) 
- [PathDoubleDotsDashException](../../Exceptions/Filesystem/PathDoubleDotsDashException.md) 
- [PathExtraSlashesException](../../Exceptions/Filesystem/PathExtraSlashesException.md) 
- [PathNotAbsoluteException](../../Exceptions/Filesystem/PathNotAbsoluteException.md) 
:::

---

### toString

::: tip Return
string
:::

---

### assertExists

Asserts whether the path exists.

::: danger Throws
- [PathNotExistsException](../../Exceptions/Filesystem/PathNotExistsException.md) 
:::

::: tip Return
void
:::

---

### exists

Indicates whether the path exists.

::: tip Return
bool
:::

---

### isDir

Indicates whether the path is a directory and exists.

::: tip Return
bool
:::

---

### isFile

Indicates whether the path is a file and exists.

::: tip Return
bool
:::

---

### chmod

Wrapper for `\chmod`.

::: warning Parameters
- *mode*: int
:::

::: danger Throws
- [PathIsNotDirectoryException](../../Exceptions/Filesystem/PathIsNotDirectoryException.md) 
- [PathUnableToChmodException](../../Exceptions/Filesystem/PathUnableToChmodException.md) 
:::

::: tip Return
void
:::

---

### isWritable

Wrapper for `\is_writeable`.

::: danger Throws
- [PathNotExistsException](../../Exceptions/Filesystem/PathNotExistsException.md) 
:::

::: tip Return
bool
:::

---

### isReadable

Wrapper for `\is_readable`.

::: danger Throws
- [PathNotExistsException](../../Exceptions/Filesystem/PathNotExistsException.md) 
:::

::: tip Return
bool
:::

---

### getChild

Get a child instance for the target child path.

::: warning Parameters
- *path*: string
:::

::: danger Throws
- [PathDotSlashException](../../Exceptions/Filesystem/PathDotSlashException.md) 
- [PathDoubleDotsDashException](../../Exceptions/Filesystem/PathDoubleDotsDashException.md) 
- [PathExtraSlashesException](../../Exceptions/Filesystem/PathExtraSlashesException.md) 
- [PathNotAbsoluteException](../../Exceptions/Filesystem/PathNotAbsoluteException.md) 
:::

::: tip Return
self
:::

---
