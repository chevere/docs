---
editLink: false
---

# VarDumpFormatterInterface

`Chevere\Interfaces\VarDump\VarDumpFormatterInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/VarDump/VarDumpFormatterInterface.php)

## Description

Describes the component in charge of formatting the var dump strings.

## Methods

### indent

Get indent for the given `$indent` size.

::: warning Parameters
- *indent*: int
:::

::: tip Return
string
:::

---

### emphasis

Get emphasis for the given `$string`.

::: warning Parameters
- *string*: string
:::

::: tip Return
string
:::

---

### filterEncodedChars

Get `$string` without encoded chars.

::: warning Parameters
- *string*: string
:::

::: tip Return
string
:::

---

### highlight

Get highlighted `$string` identified by `$key`.

::: warning Parameters
- *key*: string
- *string*: string
:::

::: tip Return
string
:::

---
