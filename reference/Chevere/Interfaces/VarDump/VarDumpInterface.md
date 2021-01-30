---
editLink: false
---

# VarDumpInterface

`Chevere\Interfaces\VarDump\VarDumpInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/VarDump/VarDumpInterface.php)

## Description

Describes the component in charge of providing a `\var_dump()` replacement.

## Methods

### __construct()

**Parameters:**

- *formatter*: [VarDumpFormatterInterface](./VarDumpFormatterInterface.md)
- *outputter*: [VarDumpOutputterInterface](./VarDumpOutputterInterface.md)

---

### withVars()

Return an instance with the specified `$vars`.

**Parameters:**

- *...vars*: 

::: tip RETURN
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$vars`.

---

### withShift()

Return an instance with the specified `$shift` traces shifted.

**Parameters:**

- *shift*: int

::: tip RETURN
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$shift` traces shifted.

This method removes `$shift` traces from `\debug_backtrace()`

---

### process()

Process the dump writing

**Parameters:**

- *writer*: [WriterInterface](../Writer/WriterInterface.md)

::: tip RETURN
void
:::

---

### vars()

Provides access to the instance vars.

::: tip RETURN
array
:::

---

### shift()

Provides access to the shift value.

::: tip RETURN
int
:::

---
