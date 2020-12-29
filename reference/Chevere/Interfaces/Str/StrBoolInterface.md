---
editLink: false
---

# StrBoolInterface

`Chevere\Interfaces\Str\StrBoolInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Str/StrBoolInterface.php)

## Description

Describes the component in charge of string conditionals.

## Methods

### __construct()

#### Parameters

1. string `$string`

---

### empty()

Indicates whether the string is empty.

::: tip RETURN
bool
:::

---

### ctypeSpace()

Indicates whether the string is ctype space.

::: tip RETURN
bool
:::

---

### ctypeDigit()

Indicates whether the string is ctype digit.

::: tip RETURN
bool
:::

---

### startsWithCtypeDigit()

Indicates whether the string starts with ctype digit.

::: tip RETURN
bool
:::

---

### startsWith()

Indicates whether the string starts with `$needle`.

#### Parameters

1. string `$needle`

::: tip RETURN
bool
:::

---

### endsWith()

Indicates whether the string ends with `$needle`.

#### Parameters

1. string `$needle`

::: tip RETURN
bool
:::

---

### same()

Indicates whether the string is the same as `$needle`.

#### Parameters

1. string `$string`

::: tip RETURN
bool
:::

---
