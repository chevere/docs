---
editLink: false
---

# File

`Chevere\Components\Filesystem\File`

[view source](https://github.com/chevere/chevere/blob/master/Filesystem/File.php)

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

### __construct()

#### Parameters

1. [PathInterface](../../Interfaces/Filesystem/PathInterface.md) `$path`

---

### path()

::: tip RETURN
[PathInterface](../../Interfaces/Filesystem/PathInterface.md)
:::

---

### isPhp()

::: tip RETURN
bool
:::

---

### exists()

::: tip RETURN
bool
:::

---

### assertExists()

::: tip RETURN
void
:::

---

### getChecksum()

::: tip RETURN
string
:::

---

### getSize()

::: tip RETURN
int
:::

---

### contents()

::: danger THROWS
- [FileNotExistsException](../../Exceptions/Filesystem/FileNotExistsException.md) 
- [FileUnableToGetException](../../Exceptions/Filesystem/FileUnableToGetException.md) 
:::

::: tip RETURN
string
:::

---

### remove()

::: tip RETURN
void
:::

---

### create()

::: tip RETURN
void
:::

---

### put()

#### Parameters

1. string `$contents`

::: tip RETURN
void
:::

---

### createPath()

::: tip RETURN
void
:::

---

### assertIsNotDir()

::: tip RETURN
void
:::

---
