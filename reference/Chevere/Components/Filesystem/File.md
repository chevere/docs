---
editLink: false
---

# File

`Chevere\Components\Filesystem\File`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Components/Filesystem/File.php)

## Implements

- [FileInterface](../../Interfaces/Filesystem/FileInterface.md)

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
- *path*: [PathInterface](../../Interfaces/Filesystem/PathInterface.md)
:::

---

### path

::: tip Return
[PathInterface](../../Interfaces/Filesystem/PathInterface.md)
:::

---

### isPhp

::: tip Return
bool
:::

---

### exists

::: tip Return
bool
:::

---

### assertExists

::: tip Return
void
:::

---

### getChecksum

::: tip Return
string
:::

---

### getSize

::: tip Return
int
:::

---

### contents

::: danger Throws
- [FileNotExistsException](../../Exceptions/Filesystem/FileNotExistsException.md) 
- [FileUnableToGetException](../../Exceptions/Filesystem/FileUnableToGetException.md) 
:::

::: tip Return
string
:::

---

### remove

::: tip Return
void
:::

---

### removeIfExists

::: tip Return
void
:::

---

### create

::: tip Return
void
:::

---

### put

::: warning Parameters
- *contents*: string
:::

::: tip Return
void
:::

---
