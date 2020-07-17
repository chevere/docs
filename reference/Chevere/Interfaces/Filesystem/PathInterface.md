---
editLink: false
---

# PathInterface

`Chevere\Interfaces\Filesystem\PathInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Filesystem/PathInterface.php)

## Description

Describes the component in charge of interact with filesystem paths.

## Methods

### __construct()

#### Parameters

1. string `$absolute`

::: danger THROWS
- [PathDotSlashException](../../Exceptions/Filesystem/PathDotSlashException.md)
- [PathDoubleDotsDashException](../../Exceptions/Filesystem/PathDoubleDotsDashException.md)
- [PathExtraSlashesException](../../Exceptions/Filesystem/PathExtraSlashesException.md)
- [PathNotAbsoluteException](../../Exceptions/Filesystem/PathNotAbsoluteException.md)
:::

---

### absolute()

::: tip RETURN
string
:::

---

### exists()

Indicates whether the path exists.

::: tip RETURN
bool
:::

---

### isDir()

Indicates whether the path is a directory and exists.

::: tip RETURN
bool
:::

---

### isFile()

Indicates whether the path is a file and exists.

::: tip RETURN
bool
:::

---

### chmod()

Wrapper for `\chmod`.

#### Parameters

1. int `$mode`

::: danger THROWS
- [PathIsNotDirectoryException](../../Exceptions/Filesystem/PathIsNotDirectoryException.md)
- [PathUnableToChmodException](../../Exceptions/Filesystem/PathUnableToChmodException.md)
:::

::: tip RETURN
void
:::

---

### isWritable()

Wrapper for `\is_writeable`.

::: danger THROWS
- [PathNotExistsException](../../Exceptions/Filesystem/PathNotExistsException.md)
:::

::: tip RETURN
bool
:::

---

### isReadable()

Wrapper for `\is_readable`.

::: danger THROWS
- [PathNotExistsException](../../Exceptions/Filesystem/PathNotExistsException.md)
:::

::: tip RETURN
bool
:::

---

### getChild()

Get a child instance for the target child path.

#### Parameters

1. string `$path`

::: danger THROWS
- [PathDotSlashException](../../Exceptions/Filesystem/PathDotSlashException.md)
- [PathDoubleDotsDashException](../../Exceptions/Filesystem/PathDoubleDotsDashException.md)
- [PathExtraSlashesException](../../Exceptions/Filesystem/PathExtraSlashesException.md)
- [PathNotAbsoluteException](../../Exceptions/Filesystem/PathNotAbsoluteException.md)
:::

::: tip RETURN
PathInterface
:::

---
