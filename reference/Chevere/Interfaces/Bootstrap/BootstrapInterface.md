---
editLink: false
---

# BootstrapInterface

`Chevere\Interfaces\Bootstrap\BootstrapInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Bootstrap/BootstrapInterface.php)

## Description

Describes a bootstrap providing access to its directory and time-related properties.

## Methods

### __construct()

**Parameters**

1. [DirInterface](../Filesystem/DirInterface.md) `$dir`

::: danger THROWS
- [DirNotExistsException](../../Exceptions/Filesystem/DirNotExistsException.md)
- [DirNotWritableException](../../Exceptions/Filesystem/DirNotWritableException.md)
:::

---

### time()

Provides access to the time registered on instance creation.

::: tip RETURN
int
:::

---

### hrTime()

Provides access to the high-resolution time on instance creation.

::: tip RETURN
int
:::

---

### dir()

Provides access to dir.

::: tip RETURN
[DirInterface](../Filesystem/DirInterface.md)
:::

---
