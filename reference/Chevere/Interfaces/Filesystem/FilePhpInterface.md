---
editLink: false
---

# FilePhpInterface

`Chevere\Interfaces\Filesystem\FilePhpInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Filesystem/FilePhpInterface.php)

## Description

Describes the component in charge of interact with `.php` files.

## Methods

### __construct()

#### Parameters

1. [FileInterface](./FileInterface.md) `$file`

::: danger THROWS
- [FileNotPhpException](../../Exceptions/Filesystem/FileNotPhpException.md)
:::

---

### file()

Provides access to the FileInterface instance.

::: tip RETURN
[FileInterface](./FileInterface.md)
:::

---

### cache()

Applies OPCache.

::: danger THROWS
- ⚠ Unknown type `FileNotExistsException` declared in `@throws` tag`
- [RuntimeException](../../Exceptions/Core/RuntimeException.md)
If OPCache is disabled.
:::

::: tip RETURN
void
:::

---

### flush()

Flushes OPCache.

::: danger THROWS
- [RuntimeException](../../Exceptions/Core/RuntimeException.md)
If OPCache is disabled.
:::

::: tip RETURN
void
:::

---
