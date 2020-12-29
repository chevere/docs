---
editLink: false
---

# ThrowableHandlerFormatterInterface

`Chevere\Interfaces\ThrowableHandler\ThrowableHandlerFormatterInterface`

[view source](https://github.com/chevere/chevere/blob/master/ThrowableHandler/ThrowableHandlerFormatterInterface.php)

## Description

Describes the component in charge of formatting a throwable handler document.

## Methods

### varDumpFormatter()

Provides access to the VarDumpFormatterInterface instance.

::: tip RETURN
[VarDumpFormatterInterface](../VarDump/VarDumpFormatterInterface.md)
:::

---

### getVarDumpFormatter()

Get a new object implementing the VarDumpFormatterInterface.

::: tip RETURN
[VarDumpFormatterInterface](../VarDump/VarDumpFormatterInterface.md)
:::

---

### getTraceEntryTemplate()

Returns the template used for each trace entry.

::: tip RETURN
string
:::

---

### getHr()

Returns formatted horizontal rule.

::: tip RETURN
string
:::

---

### getLineBreak()

Returns formatted line break.

::: tip RETURN
string
:::

---

### wrapLink()

Returns `$value` formatted as wrapped link.

#### Parameters

1. string `$value`

::: tip RETURN
string
:::

---

### wrapSectionTitle()

Returns `$value` formatted as section title.

#### Parameters

1. string `$value`

::: tip RETURN
string
:::

---

### wrapTitle()

Returns `$value` formatted as title.

#### Parameters

1. string `$value`

::: tip RETURN
string
:::

---
