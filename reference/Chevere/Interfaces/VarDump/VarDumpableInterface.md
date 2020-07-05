---
editLink: false
---

# VarDumpableInterface

`Chevere\Interfaces\VarDump\VarDumpableInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/VarDump/VarDumpableInterface.php)

## Description

Describes the component in charge of handling dumpable variables.

## Methods

### __construct()

**Parameters**

1.  `$var`

::: danger THROWS
- [LogicException](../../Exceptions/Core/LogicException.md)
if unable to process `$var` type.
:::

---

### var()

Provides access to the variable.

::: tip RETURN
void
:::

---

### type()

Provides access to the variable type.

::: tip RETURN
string
:::

---

### processorName()

Provides access to the processor name used for handling.

::: tip RETURN
string
:::

---
