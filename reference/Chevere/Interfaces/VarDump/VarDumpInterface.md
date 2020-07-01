---
editLink: false
---

# VarDumpInterface

`Chevere\Interfaces\VarDump\VarDumpInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/VarDump/VarDumpInterface.php)

## Methods

### __construct()

**Parameters**

1. [FormatterInterface](./FormatterInterface.md) `$formatter`
2. [OutputterInterface](./OutputterInterface.md) `$outputter`

---

### withVars()

Return an instance with the specified vars.

**Parameters**

1.  `$vars`

::: tip RETURN
VarDumpInterface
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified vars.

---

### withShift()

Return an instance with the specified shift.

**Parameters**

1. int `$shift`

::: tip RETURN
VarDumpInterface
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified shift.

Shift removes $shift traces from debug_backtrace()

---

### process()

Process the dump writing

**Parameters**

1. [WriterInterface](../Writer/WriterInterface.md) `$writer`

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
