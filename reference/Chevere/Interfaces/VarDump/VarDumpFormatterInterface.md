---
editLink: false
---

# VarDumpFormatterInterface

`Chevere\Interfaces\VarDump\VarDumpFormatterInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/VarDump/VarDumpFormatterInterface.php)

## Description

Describes the component in charge of formatting the var dump strings.

## Methods

### indent()

Get indent for the given `$indent` size.

**Parameters**

1. int `$indent`

::: tip RETURN
string
:::

---

### emphasis()

Get emphasis for the given `$string`.

**Parameters**

1. string `$string`

::: tip RETURN
string
:::

---

### filterEncodedChars()

Get `$string` without encoded chars.

**Parameters**

1. string `$string`

::: tip RETURN
string
:::

---

### highlight()

Get highlighted `$string` identified by `$key`.

**Parameters**

1. string `$key`
2. string `$string`

::: tip RETURN
string
:::

---
