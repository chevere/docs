---
editLink: false
---

# BootstrapInterface

`Chevere\Interfaces\Bootstrap\BootstrapInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Bootstrap/BootstrapInterface.php)

## Methods

### __construct()

**Parameters**

1. [DirInterface](../Filesystem/DirInterface.md) `$dir`
::: danger THROWS
[BootstrapDirException](../../Exceptions/Bootstrap/BootstrapDirException.md)
:::

---

### time()

Provides access to the time() registered on instance creation.

::: tip RETURN
int
:::

---

### hrTime()

Provides access to the hrtime(true) registered on instance creation.

::: tip RETURN
int
:::

---

### dir()

Provides access to the dir used on instance creation.

::: tip RETURN
[DirInterface](../Filesystem/DirInterface.md)
:::

---

