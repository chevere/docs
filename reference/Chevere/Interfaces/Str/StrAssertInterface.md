---
editLink: false
---

# StrAssertInterface

`Chevere\Interfaces\Str\StrAssertInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Str/StrAssertInterface.php)

## Methods

### __construct()

**Parameters**

1. string `$string`

---

### empty()

::: danger THROWS
[StrNotEmptyException](../../Exceptions/Str/StrNotEmptyException.md)
:::

::: tip RETURN
StrAssertInterface
:::

---

### notEmpty()

::: danger THROWS
[StrEmptyException](../../Exceptions/Str/StrEmptyException.md)
:::

::: tip RETURN
StrAssertInterface
:::

---

### ctypeSpace()

::: danger THROWS
[StrNotCtypeSpaceException](../../Exceptions/Str/StrNotCtypeSpaceException.md)
:::

::: tip RETURN
StrAssertInterface
:::

---

### notCtypeSpace()

::: danger THROWS
[StrCtypeSpaceException](../../Exceptions/Str/StrCtypeSpaceException.md)
:::

::: tip RETURN
StrAssertInterface
:::

---

### ctypeDigit()

::: danger THROWS
[StrNotCtypeDigitException](../../Exceptions/Str/StrNotCtypeDigitException.md)
:::

::: tip RETURN
StrAssertInterface
:::

---

### notCtypeDigit()

::: danger THROWS
[StrCtypeDigitException](../../Exceptions/Str/StrCtypeDigitException.md)
:::

::: tip RETURN
StrAssertInterface
:::

---

### startsWithCtypeDigit()

::: danger THROWS
[StrNotStartsWithCtypeDigitException](../../Exceptions/Str/StrNotStartsWithCtypeDigitException.md)
:::

::: tip RETURN
StrAssertInterface
:::

---

### notStartsWithCtypeDigit()

::: danger THROWS
[StrStartsWithCtypeDigitException](../../Exceptions/Str/StrStartsWithCtypeDigitException.md)
:::

::: tip RETURN
StrAssertInterface
:::

---

### startsWith()

**Parameters**

1. string `$needle`

::: danger THROWS
[StrNotStartsWithException](../../Exceptions/Str/StrNotStartsWithException.md)
:::

::: tip RETURN
StrAssertInterface
:::

---

### notStartsWith()

**Parameters**

1. string `$needle`

::: danger THROWS
[StrStartsWithException](../../Exceptions/Str/StrStartsWithException.md)
:::

::: tip RETURN
StrAssertInterface
:::

---

### endsWith()

**Parameters**

1. string `$needle`

::: danger THROWS
[StrNotEndsWithException](../../Exceptions/Str/StrNotEndsWithException.md)
:::

::: tip RETURN
StrAssertInterface
:::

---

### notEndsWith()

**Parameters**

1. string `$needle`

::: danger THROWS
[StrEndsWithException](../../Exceptions/Str/StrEndsWithException.md)
:::

::: tip RETURN
StrAssertInterface
:::

---

### same()

**Parameters**

1. string `$string`

::: danger THROWS
[StrNotSameException](../../Exceptions/Str/StrNotSameException.md)
:::

::: tip RETURN
StrAssertInterface
:::

---

### notSame()

**Parameters**

1. string `$string`

::: danger THROWS
[StrSameException](../../Exceptions/Str/StrSameException.md)
:::

::: tip RETURN
StrAssertInterface
:::

---

### contains()

**Parameters**

1. string `$string`

::: danger THROWS
[StrNotContainsException](../../Exceptions/Str/StrNotContainsException.md)
:::

::: tip RETURN
StrAssertInterface
:::

---

### notContains()

**Parameters**

1. string `$string`

::: danger THROWS
[StrContainsException](../../Exceptions/Str/StrContainsException.md)
:::

::: tip RETURN
StrAssertInterface
:::

---
