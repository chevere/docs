---
editLink: false
---

# FilePhpReturnInterface

`Chevere\Interfaces\Filesystem\FilePhpReturnInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/Filesystem/FilePhpReturnInterface.php)

## Description

Describes the component in charge of interact with `.php` files that return a variable.

```php
<?php return 'Hello World!';
```;

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

### filePhp

Provides access to the FilePhpInterface instance.

::: tip Return
[FilePhpInterface](./FilePhpInterface.md)
:::

---

### raw

Retrieves the file return (as-is).

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

Retrieves a PHP variable, applying unserialize to objects (if any).

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

### varType

Same as `var()`, but checking the variable `$type`.

::: warning Parameters
- *type*: [TypeInterface](../Type/TypeInterface.md)
:::

::: danger Throws
- [FileNotExistsException](../../Exceptions/Filesystem/FileNotExistsException.md) 
- [FileHandleException](../../Exceptions/Filesystem/FileHandleException.md) 
- [FileWithoutContentsException](../../Exceptions/Filesystem/FileWithoutContentsException.md) 
- [FileInvalidContentsException](../../Exceptions/Filesystem/FileInvalidContentsException.md) 
- [FileUnableToGetException](../../Exceptions/Filesystem/FileUnableToGetException.md) 
- [RuntimeException](../../Exceptions/Core/RuntimeException.md) 
- [FileReturnInvalidTypeException](../../Exceptions/Filesystem/FileReturnInvalidTypeException.md) 
:::

::: tip Return
void
:::

---

### put

Put `$var` into the file using var_export return and strict format.

::: warning Parameters
- *varStorable*: [VarStorableInterface](../VarSupport/VarStorableInterface.md)
:::

::: danger Throws
- [FileNotExistsException](../../Exceptions/Filesystem/FileNotExistsException.md) 
- [FileUnableToPutException](../../Exceptions/Filesystem/FileUnableToPutException.md) 
:::

::: tip Return
void
:::

---
