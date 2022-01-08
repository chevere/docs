---
editLink: false
---

# FilePhpInterface

`Chevere\Interfaces\Filesystem\FilePhpInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/Filesystem/FilePhpInterface.php)

## Description

Describes the component in charge of interact with `.php` files.

## Methods

### __construct

::: warning Parameters
- *file*: [FileInterface](./FileInterface.md)
:::

::: danger Throws
- [FileNotPhpException](../../Exceptions/Filesystem/FileNotPhpException.md) 
:::

---

### file

Provides access to the FileInterface instance.

::: tip Return
[FileInterface](./FileInterface.md)
:::

---

### cache

Applies OPCache.

::: danger Throws
- [FileNotExistsException](../../Exceptions/Filesystem/FileNotExistsException.md) 
- [RuntimeException](../../Exceptions/Core/RuntimeException.md) If OPCache is not enabled.
:::

::: tip Return
void
:::

---

### flush

Flushes OPCache.

::: danger Throws
- [RuntimeException](../../Exceptions/Core/RuntimeException.md) If OPCache is not enabled.
:::

::: tip Return
void
:::

---
