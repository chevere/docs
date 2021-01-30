---
editLink: false
---

# WritersInterface

`Chevere\Interfaces\Writer\WritersInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Writer/WritersInterface.php)

## Methods

### __construct()

::: danger THROWS
- [LogicException](../../Exceptions/Core/LogicException.md) 
:::

---

### with()

Return an instance with the specified $writer for all writers.

**Parameters:**

- *writer*: [WriterInterface](./WriterInterface.md)

::: tip RETURN
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified $writer for all writers.

---

### withOut()

Return an instance with the specified out WriterInterface.

**Parameters:**

- *writer*: [WriterInterface](./WriterInterface.md)

::: tip RETURN
self
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

**Parameters:**

- *writer*: [WriterInterface](./WriterInterface.md)

::: tip RETURN
self
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

**Parameters:**

- *writer*: [WriterInterface](./WriterInterface.md)

::: tip RETURN
self
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

**Parameters:**

- *writer*: [WriterInterface](./WriterInterface.md)

::: tip RETURN
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified log WriterInterface.

---

### log()

::: tip RETURN
[WriterInterface](./WriterInterface.md)
:::

---
