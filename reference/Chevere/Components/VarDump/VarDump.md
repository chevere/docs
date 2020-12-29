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

#### Parameters

1. [VarDumpFormatterInterface](../../Interfaces/VarDump/VarDumpFormatterInterface.md) `$formatter`
2. [VarDumpOutputterInterface](../../Interfaces/VarDump/VarDumpOutputterInterface.md) `$outputter`

---

### withVars()

#### Parameters

1.  `...$vars`

::: tip RETURN
[VarDumpInterface](../../Interfaces/VarDump/VarDumpInterface.md)
:::

---

### withShift()

#### Parameters

1. int `$shift`

::: tip RETURN
[VarDumpInterface](../../Interfaces/VarDump/VarDumpInterface.md)
:::

---

### process()

#### Parameters

1. [WriterInterface](../../Interfaces/Writer/WriterInterface.md) `$writer`

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

### setDebugBacktrace()

::: tip RETURN
void
:::

---
