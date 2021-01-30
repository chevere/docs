---
editLink: false
---

# FilePhpReturn

`Chevere\Components\Filesystem\FilePhpReturn`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Components/Filesystem/FilePhpReturn.php)

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

**Parameters:**

- *filePhp*: [FilePhpInterface](../../Interfaces/Filesystem/FilePhpInterface.md)

---

### withStrict()

**Parameters:**

- *strict*: bool

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

**Parameters:**

- *type*: [TypeInterface](../../Interfaces/Type/TypeInterface.md)

::: tip RETURN
void
:::

---

### put()

**Parameters:**

- *varStorable*: [VarStorableInterface](../../Interfaces/VarStorable/VarStorableInterface.md)

::: tip RETURN
void
:::

---
