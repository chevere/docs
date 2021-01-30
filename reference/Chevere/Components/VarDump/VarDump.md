---
editLink: false
---

# VarDump

`Chevere\Components\VarDump\VarDump`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Components/VarDump/VarDump.php)

## Implements

- [VarDumpInterface](../../Interfaces/VarDump/VarDumpInterface.md)

## Methods

### __construct()

**Parameters:**

- *formatter*: [VarDumpFormatterInterface](../../Interfaces/VarDump/VarDumpFormatterInterface.md)
- *outputter*: [VarDumpOutputterInterface](../../Interfaces/VarDump/VarDumpOutputterInterface.md)

---

### withVars()

**Parameters:**

- *...vars*: 

::: tip RETURN
[VarDumpInterface](../../Interfaces/VarDump/VarDumpInterface.md)
:::

---

### withShift()

**Parameters:**

- *shift*: int

::: tip RETURN
[VarDumpInterface](../../Interfaces/VarDump/VarDumpInterface.md)
:::

---

### process()

**Parameters:**

- *writer*: [WriterInterface](../../Interfaces/Writer/WriterInterface.md)

::: tip RETURN
void
:::

---

### vars()

::: tip RETURN
array
:::

---

### shift()

::: tip RETURN
int
:::

---
