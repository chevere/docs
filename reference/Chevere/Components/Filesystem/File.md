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

### __construct()

**Parameters:**

- *path*: [PathInterface](../../Interfaces/Filesystem/PathInterface.md)

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

### removeIfExists()

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

**Parameters:**

- *contents*: string

::: tip RETURN
void
:::

---
