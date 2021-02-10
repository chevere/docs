---
editLink: false
---

# VarDumpableInterface

`Chevere\Interfaces\VarDump\VarDumpableInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/VarDump/VarDumpableInterface.php)

## Description

Describes the component in charge of handling dumpable variables.

## Methods

### __construct

::: warning Parameters
- *var*: 
:::

::: danger Throws
- [LogicException](../../Exceptions/Core/LogicException.md) if unable to process `$var` type.
:::

---

### var

Provides access to the variable.

::: tip Return
void
:::

---

### type

Provides access to the variable type.

::: tip Return
string
:::

---

### processorName

Provides access to the processor name used for handling.

::: tip Return
string
:::

---
