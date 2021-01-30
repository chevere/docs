---
editLink: false
---

# VarDumpOutputterInterface

`Chevere\Interfaces\VarDump\VarDumpOutputterInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/VarDump/VarDumpOutputterInterface.php)

## Description

Describes the component in charge of orchestrating the var dump output processing.

## Methods

### setUp

This method is executed before `prepare()`.

::: warning Parameters
- *writer*: [WriterInterface](../Writer/WriterInterface.md)
- *backtrace*: array
:::

::: tip Return
void
:::

---

### tearDown

Ends the outputter.

::: tip Return
void
:::

---

### backtrace

Provides access to the instance backtrace.

::: tip Return
array
:::

---

### caller

Provides access to the instance caller.

::: tip Return
string
:::

---

### prepare

This method is executed before `tearDown()`.

::: tip Return
void
:::

---
