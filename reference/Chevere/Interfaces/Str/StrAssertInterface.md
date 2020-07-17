---
editLink: false
---

# StrAssertInterface

`Chevere\Interfaces\Str\StrAssertInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Str/StrAssertInterface.php)

## Description

Describes the component in charge of string asserting.

## Methods

### __construct()

#### Parameters

1. string `$string`

---

### empty()

Asserts that the string is empty.

::: danger THROWS
- [StrNotEmptyException](../../Exceptions/Str/StrNotEmptyException.md)
:::

::: tip RETURN
StrAssertInterface
:::

---

### notEmpty()

Asserts that the string is not empty.

::: danger THROWS
- [StrEmptyException](../../Exceptions/Str/StrEmptyException.md)
:::

::: tip RETURN
StrAssertInterface
:::

---

### ctypeSpace()

Asserts that the string is ctype space.

::: danger THROWS
- [StrNotCtypeSpaceException](../../Exceptions/Str/StrNotCtypeSpaceException.md)
:::

::: tip RETURN
StrAssertInterface
:::

---

### notCtypeSpace()

Asserts that the string is not ctype space.

::: danger THROWS
- [StrCtypeSpaceException](../../Exceptions/Str/StrCtypeSpaceException.md)
:::

::: tip RETURN
StrAssertInterface
:::

---

### ctypeDigit()

Asserts that the string is ctype digit.

::: danger THROWS
- [StrNotCtypeDigitException](../../Exceptions/Str/StrNotCtypeDigitException.md)
:::

::: tip RETURN
StrAssertInterface
:::

---

### notCtypeDigit()

Asserts that the string is not ctype digit.

::: danger THROWS
- [StrCtypeDigitException](../../Exceptions/Str/StrCtypeDigitException.md)
:::

::: tip RETURN
StrAssertInterface
:::

---

### startsWithCtypeDigit()

Asserts that the string is starts with ctype digit.

::: danger THROWS
- [StrNotStartsWithCtypeDigitException](../../Exceptions/Str/StrNotStartsWithCtypeDigitException.md)
:::

::: tip RETURN
StrAssertInterface
:::

---

### notStartsWithCtypeDigit()

Asserts that the string not starts with ctype digit.

::: danger THROWS
- [StrStartsWithCtypeDigitException](../../Exceptions/Str/StrStartsWithCtypeDigitException.md)
:::

::: tip RETURN
StrAssertInterface
:::

---

### startsWith()

Asserts that the string is starts with `$needle`.

#### Parameters

1. string `$needle`

::: danger THROWS
- [StrNotStartsWithException](../../Exceptions/Str/StrNotStartsWithException.md)
:::

::: tip RETURN
StrAssertInterface
:::

---

### notStartsWith()

Asserts that the string not starts with `$needle`.

#### Parameters

1. string `$needle`

::: danger THROWS
- [StrStartsWithException](../../Exceptions/Str/StrStartsWithException.md)
:::

::: tip RETURN
StrAssertInterface
:::

---

### endsWith()

Asserts that the string ends with `$needle`.

#### Parameters

1. string `$needle`

::: danger THROWS
- [StrNotEndsWithException](../../Exceptions/Str/StrNotEndsWithException.md)
:::

::: tip RETURN
StrAssertInterface
:::

---

### notEndsWith()

Asserts that the string not ends with `$needle`.

#### Parameters

1. string `$needle`

::: danger THROWS
- [StrEndsWithException](../../Exceptions/Str/StrEndsWithException.md)
:::

::: tip RETURN
StrAssertInterface
:::

---

### same()

Asserts that the string is same as `$string`.

#### Parameters

1. string `$string`

::: danger THROWS
- [StrNotSameException](../../Exceptions/Str/StrNotSameException.md)
:::

::: tip RETURN
StrAssertInterface
:::

---

### notSame()

Asserts that the string is not same as `$string`.

#### Parameters

1. string `$string`

::: danger THROWS
- [StrSameException](../../Exceptions/Str/StrSameException.md)
:::

::: tip RETURN
StrAssertInterface
:::

---

### contains()

Asserts that the string contains `$string`.

#### Parameters

1. string `$string`

::: danger THROWS
- [StrNotContainsException](../../Exceptions/Str/StrNotContainsException.md)
:::

::: tip RETURN
StrAssertInterface
:::

---

### notContains()

Asserts that the string not contains `$string`.

#### Parameters

1. string `$string`

::: danger THROWS
- [StrContainsException](../../Exceptions/Str/StrContainsException.md)
:::

::: tip RETURN
StrAssertInterface
:::

---
