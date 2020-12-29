---
editLink: false
---

# FilePhpReturn

`Chevere\Components\Filesystem\FilePhpReturn`

[view source](https://github.com/chevere/chevere/blob/master/Filesystem/FilePhpReturn.php)

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

### __construct()

#### Parameters

1. [FilePhpInterface](../../Interfaces/Filesystem/FilePhpInterface.md) `$filePhp`

---

### withStrict()

#### Parameters

1. bool `$strict`

::: tip RETURN
[FilePhpReturnInterface](../../Interfaces/Filesystem/FilePhpReturnInterface.md)
:::

---

### filePhp()

::: tip RETURN
[FilePhpInterface](../../Interfaces/Filesystem/FilePhpInterface.md)
:::

---

### raw()

::: danger THROWS
- [FileNotExistsException](../../Exceptions/Filesystem/FileNotExistsException.md) 
- [FileHandleException](../../Exceptions/Filesystem/FileHandleException.md) 
- [FileWithoutContentsException](../../Exceptions/Filesystem/FileWithoutContentsException.md) 
- [FileInvalidContentsException](../../Exceptions/Filesystem/FileInvalidContentsException.md) 
- [FileUnableToGetException](../../Exceptions/Filesystem/FileUnableToGetException.md) 
- [RuntimeException](../../Exceptions/Core/RuntimeException.md) 
:::

::: tip RETURN
void
:::

---

### var()

::: tip RETURN
void
:::

---

### varType()

#### Parameters

1. [TypeInterface](../../Interfaces/Type/TypeInterface.md) `$type`

::: tip RETURN
void
:::

---

### put()

#### Parameters

1. [VarStorableInterface](../../Interfaces/VarStorable/VarStorableInterface.md) `$varStorable`

::: tip RETURN
void
:::

---

### getReturnVar()

#### Parameters

1.  `$var`

::: tip RETURN
void
:::

---

### assert()

::: tip RETURN
void
:::

---

### assertStrict()

::: tip RETURN
void
:::

---

### assertNonStrict()

::: danger THROWS
- [FileNotExistsException](../../Exceptions/Filesystem/FileNotExistsException.md) 
- [FileUnableToGetException](../../Exceptions/Filesystem/FileUnableToGetException.md) 
- [FileWithoutContentsException](../../Exceptions/Filesystem/FileWithoutContentsException.md) 
- [FileInvalidContentsException](../../Exceptions/Filesystem/FileInvalidContentsException.md) 
:::

::: tip RETURN
void
:::

---

### getFileReturnVar()

#### Parameters

1.  `$var`

::: tip RETURN
void
:::

---
