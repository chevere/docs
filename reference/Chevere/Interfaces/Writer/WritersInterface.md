---
editLink: false
---

# WritersInterface

`Chevere\Interfaces\Writer\WritersInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Writer/WritersInterface.php)

## Methods

### with()

Return an instance with the specified $writer for all writers.

**Parameters**

1. [WriterInterface](./WriterInterface.md) `$writer`

::: tip RETURN
WritersInterface
:::
This method MUST retain the state of the current instance, and return
an instance that contains the specified $writer for all writers.

---

### withOut()

Return an instance with the specified out WriterInterface.

**Parameters**

1. [WriterInterface](./WriterInterface.md) `$writer`

::: tip RETURN
WritersInterface
:::
This method MUST retain the state of the current instance, and return
an instance that contains the specified out WriterInterface.

---

### out()

::: tip RETURN
[WriterInterface](./WriterInterface.md)
:::

---

### withError()

Return an instance with the specified error WriterInterface.

**Parameters**

1. [WriterInterface](./WriterInterface.md) `$writer`

::: tip RETURN
WritersInterface
:::
This method MUST retain the state of the current instance, and return
an instance that contains the specified error WriterInterface.

---

### error()

::: tip RETURN
[WriterInterface](./WriterInterface.md)
:::

---

### withDebug()

Return an instance with the specified debug WriterInterface.

**Parameters**

1. [WriterInterface](./WriterInterface.md) `$writer`

::: tip RETURN
WritersInterface
:::
This method MUST retain the state of the current instance, and return
an instance that contains the specified debug WriterInterface.

---

### debug()

::: tip RETURN
[WriterInterface](./WriterInterface.md)
:::

---

### withLog()

Return an instance with the specified log WriterInterface.

**Parameters**

1. [WriterInterface](./WriterInterface.md) `$writer`

::: tip RETURN
WritersInterface
:::
This method MUST retain the state of the current instance, and return
an instance that contains the specified log WriterInterface.

---

### log()

::: tip RETURN
[WriterInterface](./WriterInterface.md)
:::

---

