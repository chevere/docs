# VarDumpInterface

`Chevere\Interfaces\VarDump\VarDumpInterface`

[view source](https://github.com/chevere/chevere/blob/master//home/rodolfo/git/chevere/chevere/interfaces/VarDump/VarDumpInterface.php)

## Methods

### __construct()

#### Parameters

- [FormatterInterface](./FormatterInterface.md) `$formatter`
- [OutputterInterface](./OutputterInterface.md) `$outputter`

---

### withVars()

> Return an instance with the specified vars.

This method MUST retain the state of the current instance, and return
an instance that contains the specified vars.

#### Parameters

-  `$vars`

#### Return

VarDumpInterface

---

### withShift()

> Return an instance with the specified shift.

This method MUST retain the state of the current instance, and return
an instance that contains the specified shift.

Shift removes $shift traces from debug_backtrace()

#### Parameters

- int `$shift`

#### Return

VarDumpInterface

---

### process()

> Process the dump writing

#### Parameters

- [WriterInterface](../Writer/WriterInterface.md) `$writer`

#### Return

void

---

### vars()

#### Return

array

---

### shift()

#### Return

int

---

