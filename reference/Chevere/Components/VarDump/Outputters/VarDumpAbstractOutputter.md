---
editLink: false
---

# VarDumpAbstractOutputter

`Chevere\Components\VarDump\Outputters\VarDumpAbstractOutputter`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Components/VarDump/Outputters/VarDumpAbstractOutputter.php)

## Implements

- [VarDumpOutputterInterface](../../../Interfaces/VarDump/VarDumpOutputterInterface.md)

## Methods

### writeCallerFile

::: warning Parameters
- *formatter*: [VarDumpFormatterInterface](../../../Interfaces/VarDump/VarDumpFormatterInterface.md)
:::

::: tip Return
void
:::

---

### setUp

::: warning Parameters
- *writer*: [WriterInterface](../../../Interfaces/Writer/WriterInterface.md)
- *backtrace*: array
:::

::: tip Return
void
:::

---

### backtrace

::: tip Return
array
:::

---

### caller

::: tip Return
string
:::

---

### tearDown

Ends the outputter.

::: tip Return
void
:::

---

### prepare

This method is executed before `tearDown()`.

::: tip Return
void
:::

---
