---
editLink: false
---

# FileInterface

`Chevere\Interfaces\Filesystem\FileInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/Filesystem/FileInterface.php)

## Description

Describes the component in charge of interacting with filesystem files.

## Constants

### CHECKSUM_ALGO

Type `string`

```php
'sha256'
```

### CHECKSUM_LENGTH

Type `integer`

```php
64
```

## Methods

### __construct

::: warning Parameters
- *path*: [PathInterface](./PathInterface.md)
:::

::: danger Throws
- [PathIsDirException](../../Exceptions/Filesystem/PathIsDirException.md) 
:::

---

### path

Provides access to the PathInterface instance.

::: tip Return
[PathInterface](./PathInterface.md)
:::

---

### isPhp

Returns a boolean indicating whether the file name is a PHP file.

::: tip Return
bool
:::

---

### exists

Returns a boolean indicating whether the file exists.

::: tip Return
bool
:::

---

### assertExists

::: danger Throws
- [FileNotExistsException](../../Exceptions/Filesystem/FileNotExistsException.md) 
:::

::: tip Return
void
:::

---

### getChecksum

Retrieves the file checksum using the CHECKSUM_ALGO algorithm.

::: danger Throws
- [FileNotExistsException](../../Exceptions/Filesystem/FileNotExistsException.md) 
:::

::: tip Return
string
:::

---

### getSize

Retrieves the file size using `filesize`.

::: danger Throws
- [FileNotExistsException](../../Exceptions/Filesystem/FileNotExistsException.md) 
:::

::: tip Return
int
:::

---

### contents

Retrieves the file contents.

::: danger Throws
- [FileNotExistsException](../../Exceptions/Filesystem/FileNotExistsException.md) 
- [FileUnableToGetException](../../Exceptions/Filesystem/FileUnableToGetException.md) 
:::

::: tip Return
string
:::

---

### remove

Remove the file.

::: danger Throws
- [FileNotExistsException](../../Exceptions/Filesystem/FileNotExistsException.md) 
- [FileUnableToRemoveException](../../Exceptions/Filesystem/FileUnableToRemoveException.md) 
:::

::: tip Return
void
:::

---

### removeIfExists

::: danger Throws
- [FileUnableToRemoveException](../../Exceptions/Filesystem/FileUnableToRemoveException.md) 
:::

::: tip Return
void
:::

---

### create

Create the file.

::: danger Throws
- [FileExistsException](../../Exceptions/Filesystem/FileExistsException.md) 
- [FileUnableToCreateException](../../Exceptions/Filesystem/FileUnableToCreateException.md) 
:::

::: tip Return
void
:::

---

### put

Put contents to the file. If the file doesn't exists it will be created.

::: warning Parameters
- *contents*: string
:::

::: danger Throws
- [FileNotExistsException](../../Exceptions/Filesystem/FileNotExistsException.md) 
- [FileUnableToPutException](../../Exceptions/Filesystem/FileUnableToPutException.md) 
:::

::: tip Return
void
:::

---
