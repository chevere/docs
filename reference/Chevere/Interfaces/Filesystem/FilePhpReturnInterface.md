---
editLink: false
---

# FilePhpReturnInterface

`Chevere\Interfaces\Filesystem\FilePhpReturnInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Filesystem/FilePhpReturnInterface.php)

## Constants

### PHP_RETURN

Type `string`

```php
'<?php return '
```

### PHP_RETURN_CHARS

Type `integer`

```php
13
```

## Methods

### withStrict()

Return an instance with the strict flag.

**Parameters**

1. bool `$strict`

::: tip RETURN
FilePhpReturnInterface
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified the strict flag.

Strict validation refers to match the beginning of the file contents
against FilePhpReturnInterface::PHP_RETURN

---

### filePhp()

Provides access to the FilePhpInterface instance.

::: tip RETURN
[FilePhpInterface](./FilePhpInterface.md)
:::

---

### raw()

Retrieves the file return (as-is).

::: danger THROWS
[FileNotExistsException](../../Exceptions/Filesystem/FileNotExistsException.md)
:::

::: danger THROWS
[FileHandleException](../../Exceptions/Filesystem/FileHandleException.md)
:::

::: danger THROWS
[FileWithoutContentsException](../../Exceptions/Filesystem/FileWithoutContentsException.md)
:::

::: danger THROWS
[FileInvalidContentsException](../../Exceptions/Filesystem/FileInvalidContentsException.md)
:::

::: tip RETURN
void
:::

---

### var()

Retrieves a PHP variable, applying unserialize to objects (if any).

::: danger THROWS
[FileNotExistsException](../../Exceptions/Filesystem/FileNotExistsException.md)
:::

::: danger THROWS
[FileHandleException](../../Exceptions/Filesystem/FileHandleException.md)
:::

::: danger THROWS
[FileWithoutContentsException](../../Exceptions/Filesystem/FileWithoutContentsException.md)
:::

::: danger THROWS
[FileInvalidContentsException](../../Exceptions/Filesystem/FileInvalidContentsException.md)
:::

::: tip RETURN
void
:::

---

### varType()

Same as var, but checking the variable $type.

**Parameters**

1. [TypeInterface](../Type/TypeInterface.md) `$type`

::: danger THROWS
[FileNotExistsException](../../Exceptions/Filesystem/FileNotExistsException.md)
:::

::: danger THROWS
[FileHandleException](../../Exceptions/Filesystem/FileHandleException.md)
:::

::: danger THROWS
[FileWithoutContentsException](../../Exceptions/Filesystem/FileWithoutContentsException.md)
:::

::: danger THROWS
[FileInvalidContentsException](../../Exceptions/Filesystem/FileInvalidContentsException.md)
:::

::: danger THROWS
[FileReturnInvalidTypeException](../../Exceptions/Filesystem/FileReturnInvalidTypeException.md)
:::

::: tip RETURN
void
:::

---

### put()

Put $var into the file using var_export return and strict format.

**Parameters**

1. [VarExportableInterface](../VarExportable/VarExportableInterface.md) `$varExportable`

::: danger THROWS
[FileNotExistsException](../../Exceptions/Filesystem/FileNotExistsException.md)
:::

::: danger THROWS
[FileUnableToPutException](../../Exceptions/Filesystem/FileUnableToPutException.md)
if unable to put the contents in the file
:::

::: tip RETURN
void
:::

---
