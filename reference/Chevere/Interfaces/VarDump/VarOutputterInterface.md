---
editLink: false
---

# VarOutputterInterface

`Chevere\Interfaces\VarDump\VarOutputterInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/VarDump/VarOutputterInterface.php)

## Description

Describes the component in charge of writing information about a variable.

## Methods

### __construct()

**Parameters:**

- *writer*: [WriterInterface](../Writer/WriterInterface.md)
- *debugBacktrace*: array
- *formatter*: [VarDumpFormatterInterface](./VarDumpFormatterInterface.md)
- *...vars*: 

---

### process()

Process the var output streaming.

**Parameters:**

- *outputter*: [VarDumpOutputterInterface](./VarDumpOutputterInterface.md)

::: tip RETURN
void
:::

---
