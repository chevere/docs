---
editLink: false
---

# PathInterface

`Chevere\Interfaces\Filesystem\PathInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Filesystem/PathInterface.php)

## Methods

### absolute()

::: tip RETURN
string
:::

---

### exists()

Returns a boolean indicating whether the path exists.

::: tip RETURN
bool
:::

---

### isDir()

Returns a boolean indicating whether the path is a directory and exists.

::: tip RETURN
bool
:::

---

### isFile()

Returns a boolean indicating whether the path is a file and exists.

::: tip RETURN
bool
:::

---

### chmod()

Wrapper for \chmod.

**Parameters**

1. int `$mode`

::: danger THROWS ⚠
Unknown type `PathIsNotDirectoryException`
:::

::: danger THROWS ⚠
Unknown type `PathUnableToChmodException`
:::

::: tip RETURN
void
:::

---

### isWritable()

Wrapper for \is_writeable.

::: danger THROWS ⚠
Unknown type `PathIsNotDirectoryException`
:::

::: tip RETURN
bool
:::

---

### isReadable()

Wrapper for \is_writeable.

::: danger THROWS ⚠
Unknown type `PathIsNotDirectoryException`
:::

::: tip RETURN
bool
:::

---

### getChild()

Get a child path as a PathInterface

**Parameters**

1. string `$child`

::: tip RETURN
PathInterface
:::

---
