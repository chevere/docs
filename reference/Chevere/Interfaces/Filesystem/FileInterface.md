---
editLink: false
---

# FileInterface

`Chevere\Interfaces\Filesystem\FileInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Filesystem/FileInterface.php)

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

### path()

Provides access to the PathInterface instance.

::: tip RETURN
[PathInterface](./PathInterface.md)
:::

---

### isPhp()

Returns a boolean indicating whether the file name is a PHP file.

::: tip RETURN
bool
:::

---

### exists()

Returns a boolean indicating whether the file exists.

::: tip RETURN
bool
:::

---

### assertExists()

::: danger THROWS
[FileNotExistsException](../../Exceptions/Filesystem/FileNotExistsException.md)
:::

::: tip RETURN
void
:::

---

### checksum()

Retrieves the file checksum using the CHECKSUM_ALGO algorithm.

::: danger THROWS
[FileNotExistsException](../../Exceptions/Filesystem/FileNotExistsException.md)
:::

::: tip RETURN
string
:::

---

### contents()

Retrieves the file contents.

::: danger THROWS
[FileNotExistsException](../../Exceptions/Filesystem/FileNotExistsException.md)
:::

::: danger THROWS
[FileUnableToGetException](../../Exceptions/Filesystem/FileUnableToGetException.md)
:::

::: tip RETURN
string
:::

---

### remove()

Remove the file.

::: danger THROWS
[FileNotExistsException](../../Exceptions/Filesystem/FileNotExistsException.md)
:::

::: danger THROWS
[FileUnableToRemoveException](../../Exceptions/Filesystem/FileUnableToRemoveException.md)
:::

::: tip RETURN
void
:::

---

### create()

Create the file.

::: danger THROWS
[FileExistsException](../../Exceptions/Filesystem/FileExistsException.md)
:::

::: danger THROWS
[FileUnableToCreateException](../../Exceptions/Filesystem/FileUnableToCreateException.md)
:::

::: tip RETURN
void
:::

---

### put()

Put contents to the file. If the file doesn't exists it will be created.

**Parameters**

1. string `$contents`

::: danger THROWS
[FileNotExistsException](../../Exceptions/Filesystem/FileNotExistsException.md)
:::

::: danger THROWS
[FileUnableToPutException](../../Exceptions/Filesystem/FileUnableToPutException.md)
:::

::: tip RETURN
void
:::

---
