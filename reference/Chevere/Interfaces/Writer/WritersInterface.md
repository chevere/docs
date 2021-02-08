---
editLink: false
---

# WritersInterface

`Chevere\Interfaces\Writer\WritersInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/Writer/WritersInterface.php)

## Methods

### __construct

::: danger Throws
- [LogicException](../../Exceptions/Core/LogicException.md) 
:::

---

### with

Return an instance with the specified $writer for all writers.

::: warning Parameters
- *writer*: [WriterInterface](./WriterInterface.md)
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified $writer for all writers.

---

### withOutput

Return an instance with the specified out WriterInterface.

::: warning Parameters
- *writer*: [WriterInterface](./WriterInterface.md)
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified out WriterInterface.

---

### output

::: tip Return
[WriterInterface](./WriterInterface.md)
:::

---

### withError

Return an instance with the specified error WriterInterface.

::: warning Parameters
- *writer*: [WriterInterface](./WriterInterface.md)
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified error WriterInterface.

---

### error

::: tip Return
[WriterInterface](./WriterInterface.md)
:::

---

### withDebug

Return an instance with the specified debug WriterInterface.

::: warning Parameters
- *writer*: [WriterInterface](./WriterInterface.md)
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified debug WriterInterface.

---

### debug

::: tip Return
[WriterInterface](./WriterInterface.md)
:::

---

### withLog

Return an instance with the specified log WriterInterface.

::: warning Parameters
- *writer*: [WriterInterface](./WriterInterface.md)
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified log WriterInterface.

---

### log

::: tip Return
[WriterInterface](./WriterInterface.md)
:::

---
