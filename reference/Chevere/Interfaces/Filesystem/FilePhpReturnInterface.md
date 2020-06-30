# FilePhpReturnInterface

`Chevere\Interfaces\Filesystem\FilePhpReturnInterface`

[view source](https://github.com/chevere/chevere/blob/master//home/rodolfo/git/chevere/chevere/interfaces/Filesystem/FilePhpReturnInterface.php)

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

> Return an instance with the strict flag.

This method MUST retain the state of the current instance, and return
an instance that contains the specified the strict flag.

Strict validation refers to match the beginning of the file contents
against FilePhpReturnInterface::PHP_RETURN

#### Parameters

- bool `$strict`

#### Return

FilePhpReturnInterface

---

### filePhp()

> Provides access to the FilePhpInterface instance.

#### Return

[FilePhpInterface](./FilePhpInterface.md)

---

### raw()

> Retrieves the file return (as-is).

#### Return

void

---

### var()

> Retrieves a PHP variable, applying unserialize to objects (if any).

#### Return

void

---

### varType()

> Same as var, but checking the variable $type.

#### Parameters

- [TypeInterface](../Type/TypeInterface.md) `$type`

#### Return

void

---

### put()

> Put $var into the file using var_export return and strict format.

#### Parameters

- [VarExportableInterface](../VarExportable/VarExportableInterface.md) `$varExportable`

#### Return

void

---

