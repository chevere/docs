---
editLink: false
---

# FilePhpReturnInterface

`Chevere\Interfaces\Filesystem\FilePhpReturnInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Filesystem/FilePhpReturnInterface.php)

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

### withStrict()

Return an instance with the strict flag.

#### Parameters

1. bool `$strict`

::: tip RETURN
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified the strict flag.

Strict validation refers to match the beginning of the file contents
against `FilePhpReturnInterface::PHP_RETURN`

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

Retrieves a PHP variable, applying unserialize to objects (if any).

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

### varType()

Same as `var()`, but checking the variable `$type`.

#### Parameters

1. [TypeInterface](../Type/TypeInterface.md) `$type`

::: danger THROWS
- [FileNotExistsException](../../Exceptions/Filesystem/FileNotExistsException.md) 
- [FileHandleException](../../Exceptions/Filesystem/FileHandleException.md) 
- [FileWithoutContentsException](../../Exceptions/Filesystem/FileWithoutContentsException.md) 
- [FileInvalidContentsException](../../Exceptions/Filesystem/FileInvalidContentsException.md) 
- [FileUnableToGetException](../../Exceptions/Filesystem/FileUnableToGetException.md) 
- [RuntimeException](../../Exceptions/Core/RuntimeException.md) 
- [FileReturnInvalidTypeException](../../Exceptions/Filesystem/FileReturnInvalidTypeException.md) 
:::

::: tip RETURN
void
:::

---

### put()

Put `$var` into the file using var_export return and strict format.

#### Parameters

1. [VarStorableInterface](../VarStorable/VarStorableInterface.md) `$varStorable`

::: danger THROWS
- [FileNotExistsException](../../Exceptions/Filesystem/FileNotExistsException.md) 
- [FileUnableToPutException](../../Exceptions/Filesystem/FileUnableToPutException.md) 
:::

::: tip RETURN
void
:::

---
