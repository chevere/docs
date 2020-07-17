---
editLink: false
---

# VarOutputterInterface

`Chevere\Interfaces\VarDump\VarOutputterInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/VarDump/VarOutputterInterface.php)

## Description

Describes the component in charge of writing information about a variable.

## Methods

### __construct()

#### Parameters

1. [WriterInterface](../Writer/WriterInterface.md) `$writer`
2. array `$debugBacktrace`
3. [VarDumpFormatterInterface](./VarDumpFormatterInterface.md) `$formatter`
4.  `$vars`

---

### process()

Process the var output streaming.

#### Parameters

1. [VarDumpOutputterInterface](./VarDumpOutputterInterface.md) `$outputter`

::: tip RETURN
void
:::

---
