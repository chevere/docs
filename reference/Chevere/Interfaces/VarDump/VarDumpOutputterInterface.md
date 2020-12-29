---
editLink: false
---

# VarDumpOutputterInterface

`Chevere\Interfaces\VarDump\VarDumpOutputterInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/VarDump/VarDumpOutputterInterface.php)

## Description

Describes the component in charge of orchestrating the var dump output processing.

## Methods

### setUp()

This method is executed before `prepare()`.

#### Parameters

1. [WriterInterface](../Writer/WriterInterface.md) `$writer`
2. array `$backtrace`

::: tip RETURN
void
:::

---

### tearDown()

Ends the outputter.

::: tip RETURN
void
:::

---

### backtrace()

Provides access to the instance backtrace.

::: tip RETURN
array
:::

---

### caller()

Provides access to the instance caller.

::: tip RETURN
string
:::

---

### prepare()

This method is executed before `tearDown()`.

::: tip RETURN
void
:::

---
