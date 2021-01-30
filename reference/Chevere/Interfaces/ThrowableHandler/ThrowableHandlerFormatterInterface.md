---
editLink: false
---

# ThrowableHandlerFormatterInterface

`Chevere\Interfaces\ThrowableHandler\ThrowableHandlerFormatterInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/ThrowableHandler/ThrowableHandlerFormatterInterface.php)

## Description

Describes the component in charge of formatting a throwable handler document.

## Methods

### varDumpFormatter

Provides access to the VarDumpFormatterInterface instance.

::: tip Return
[VarDumpFormatterInterface](../VarDump/VarDumpFormatterInterface.md)
:::

---

### getVarDumpFormatter

Get a new object implementing the VarDumpFormatterInterface.

::: tip Return
[VarDumpFormatterInterface](../VarDump/VarDumpFormatterInterface.md)
:::

---

### getTraceEntryTemplate

Returns the template used for each trace entry.

::: tip Return
string
:::

---

### getHr

Returns formatted horizontal rule.

::: tip Return
string
:::

---

### getLineBreak

Returns formatted line break.

::: tip Return
string
:::

---

### wrapLink

Returns `$value` formatted as wrapped link.

::: warning Parameters
- *value*: string
:::

::: tip Return
string
:::

---

### wrapSectionTitle

Returns `$value` formatted as section title.

::: warning Parameters
- *value*: string
:::

::: tip Return
string
:::

---

### wrapTitle

Returns `$value` formatted as title.

::: warning Parameters
- *value*: string
:::

::: tip Return
string
:::

---
