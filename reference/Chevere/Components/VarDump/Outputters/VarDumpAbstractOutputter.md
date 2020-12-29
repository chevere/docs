---
editLink: false
---

# VarDumpAbstractOutputter

`Chevere\Components\VarDump\Outputters\VarDumpAbstractOutputter`

[view source](https://github.com/chevere/chevere/blob/master/VarDump/Outputters/VarDumpAbstractOutputter.php)

## Implements

- [VarDumpOutputterInterface](../../../Interfaces/VarDump/VarDumpOutputterInterface.md)

## Methods

### setUp()

#### Parameters

1. [WriterInterface](../../../Interfaces/Writer/WriterInterface.md) `$writer`
2. array `$backtrace`

::: tip RETURN
void
:::

---

### backtrace()

::: tip RETURN
array
:::

---

### caller()

::: tip RETURN
string
:::

---

### writer()

::: tip RETURN
[WriterInterface](../../../Interfaces/Writer/WriterInterface.md)
:::

---

### tearDown()

Ends the outputter.

::: tip RETURN
void
:::

---

### prepare()

This method is executed before `tearDown()`.

::: tip RETURN
void
:::

---
