---
editLink: false
---

# Path

`Chevere\Components\Filesystem\Path`

[view source](https://github.com/chevere/chevere/blob/master/Filesystem/Path.php)

## Implements

- [PathInterface](../../Interfaces/Filesystem/PathInterface.md)
- [ToStringInterface](../../Interfaces/Common/ToStringInterface.md)

## Methods

### __construct()

#### Parameters

1. string `$absolute`

---

### toString()

::: tip RETURN
string
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

### isDir()

::: tip RETURN
bool
:::

---

### isFile()

::: tip RETURN
bool
:::

---

### chmod()

#### Parameters

1. int `$mode`

::: tip RETURN
void
:::

---

### isWritable()

::: tip RETURN
bool
:::

---

### isReadable()

::: tip RETURN
bool
:::

---

### getChild()

#### Parameters

1. string `$path`

::: tip RETURN
[PathInterface](../../Interfaces/Filesystem/PathInterface.md)
:::

---

### clearStatCache()

::: tip RETURN
void
:::

---
