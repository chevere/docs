---
editLink: false
---

# FilePhpReturn

`Chevere\Components\Filesystem\FilePhpReturn`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Components/Filesystem/FilePhpReturn.php)

## Implements

- [FilePhpReturnInterface](../../Interfaces/Filesystem/FilePhpReturnInterface.md)

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

### __construct

::: warning Parameters
- *filePhp*: [FilePhpInterface](../../Interfaces/Filesystem/FilePhpInterface.md)
:::

---

### withStrict

::: warning Parameters
- *strict*: bool
:::

::: tip Return
[FilePhpReturnInterface](../../Interfaces/Filesystem/FilePhpReturnInterface.md)
:::

---

### filePhp

::: tip Return
[FilePhpInterface](../../Interfaces/Filesystem/FilePhpInterface.md)
:::

---

### raw

::: danger Throws
- [FileNotExistsException](../../Exceptions/Filesystem/FileNotExistsException.md) 
- [FileHandleException](../../Exceptions/Filesystem/FileHandleException.md) 
- [FileWithoutContentsException](../../Exceptions/Filesystem/FileWithoutContentsException.md) 
- [FileInvalidContentsException](../../Exceptions/Filesystem/FileInvalidContentsException.md) 
- [FileUnableToGetException](../../Exceptions/Filesystem/FileUnableToGetException.md) 
- [RuntimeException](../../Exceptions/Core/RuntimeException.md) 
:::

::: tip Return
void
:::

---

### var

::: tip Return
void
:::

---

### varType

::: warning Parameters
- *type*: [TypeInterface](../../Interfaces/Type/TypeInterface.md)
:::

::: tip Return
void
:::

---

### put

::: warning Parameters
- *varStorable*: [VarStorableInterface](../../Interfaces/VarStorable/VarStorableInterface.md)
:::

::: tip Return
void
:::

---
