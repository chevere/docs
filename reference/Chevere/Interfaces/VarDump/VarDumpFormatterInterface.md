---
editLink: false
---

# VarDumpFormatterInterface

`Chevere\Interfaces\VarDump\VarDumpFormatterInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/VarDump/VarDumpFormatterInterface.php)

## Description

Describes the component in charge of formatting the var dump strings.

## Methods

### indent()

Get indent for the given `$indent` size.

**Parameters:**

- *indent*: int

::: tip RETURN
string
:::

---

### emphasis()

Get emphasis for the given `$string`.

**Parameters:**

- *string*: string

::: tip RETURN
string
:::

---

### filterEncodedChars()

Get `$string` without encoded chars.

**Parameters:**

- *string*: string

::: tip RETURN
string
:::

---

### highlight()

Get highlighted `$string` identified by `$key`.

**Parameters:**

- *key*: string
- *string*: string

::: tip RETURN
string
:::

---
