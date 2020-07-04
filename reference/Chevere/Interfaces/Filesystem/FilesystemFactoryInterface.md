---
editLink: false
---

# FilesystemFactoryInterface

`Chevere\Interfaces\Filesystem\FilesystemFactoryInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Filesystem/FilesystemFactoryInterface.php)

## Description

Describes the component in charge of creating filesystem objects.

## Methods

### __construct()

---

### getDirFromString()

**Parameters**

1. string `$path`

::: danger THROWS
- ⚠ Unknown type `FilesystemFactoryException` declared in `@throws` tag`
:::

::: tip RETURN
[DirInterface](./DirInterface.md)
:::

---

### getFileFromString()

**Parameters**

1. string `$path`

::: danger THROWS
- ⚠ Unknown type `FilesystemFactoryException` declared in `@throws` tag`
:::

::: tip RETURN
[FileInterface](./FileInterface.md)
:::

---

### getFilePhpFromString()

**Parameters**

1. string `$path`

::: danger THROWS
- ⚠ Unknown type `FilesystemFactoryException` declared in `@throws` tag`
:::

::: tip RETURN
[FilePhpInterface](./FilePhpInterface.md)
:::

---

### getFilePhpReturnFromString()

**Parameters**

1. string `$path`

::: danger THROWS
- ⚠ Unknown type `FilesystemFactoryException` declared in `@throws` tag`
:::

::: tip RETURN
[FilePhpReturn](../../Components/Filesystem/FilePhpReturn.md)
:::

---
