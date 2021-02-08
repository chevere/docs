---
editLink: false
---

# StrAssertInterface

`Chevere\Interfaces\Str\StrAssertInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/Str/StrAssertInterface.php)

## Description

Describes the component in charge of string asserting.

## Methods

### __construct

::: warning Parameters
- *string*: string
:::

---

### empty

Asserts that the string is empty.

::: danger Throws
- [StrNotEmptyException](../../Exceptions/Str/StrNotEmptyException.md) 
:::

::: tip Return
self
:::

---

### notEmpty

Asserts that the string is not empty.

::: danger Throws
- [StrEmptyException](../../Exceptions/Str/StrEmptyException.md) 
:::

::: tip Return
self
:::

---

### ctypeSpace

Asserts that the string is ctype space.

::: danger Throws
- [StrNotCtypeSpaceException](../../Exceptions/Str/StrNotCtypeSpaceException.md) 
:::

::: tip Return
self
:::

---

### notCtypeSpace

Asserts that the string is not ctype space.

::: danger Throws
- [StrCtypeSpaceException](../../Exceptions/Str/StrCtypeSpaceException.md) 
:::

::: tip Return
self
:::

---

### ctypeDigit

Asserts that the string is ctype digit.

::: danger Throws
- [StrNotCtypeDigitException](../../Exceptions/Str/StrNotCtypeDigitException.md) 
:::

::: tip Return
self
:::

---

### notCtypeDigit

Asserts that the string is not ctype digit.

::: danger Throws
- [StrCtypeDigitException](../../Exceptions/Str/StrCtypeDigitException.md) 
:::

::: tip Return
self
:::

---

### startsWithCtypeDigit

Asserts that the string is starts with ctype digit.

::: danger Throws
- [StrNotStartsWithCtypeDigitException](../../Exceptions/Str/StrNotStartsWithCtypeDigitException.md) 
:::

::: tip Return
self
:::

---

### notStartsWithCtypeDigit

Asserts that the string not starts with ctype digit.

::: danger Throws
- [StrStartsWithCtypeDigitException](../../Exceptions/Str/StrStartsWithCtypeDigitException.md) 
:::

::: tip Return
self
:::

---

### startsWith

Asserts that the string is starts with `$needle`.

::: warning Parameters
- *needle*: string
:::

::: danger Throws
- [StrNotStartsWithException](../../Exceptions/Str/StrNotStartsWithException.md) 
:::

::: tip Return
self
:::

---

### notStartsWith

Asserts that the string not starts with `$needle`.

::: warning Parameters
- *needle*: string
:::

::: danger Throws
- [StrStartsWithException](../../Exceptions/Str/StrStartsWithException.md) 
:::

::: tip Return
self
:::

---

### endsWith

Asserts that the string ends with `$needle`.

::: warning Parameters
- *needle*: string
:::

::: danger Throws
- [StrNotEndsWithException](../../Exceptions/Str/StrNotEndsWithException.md) 
:::

::: tip Return
self
:::

---

### notEndsWith

Asserts that the string not ends with `$needle`.

::: warning Parameters
- *needle*: string
:::

::: danger Throws
- [StrEndsWithException](../../Exceptions/Str/StrEndsWithException.md) 
:::

::: tip Return
self
:::

---

### same

Asserts that the string is same as `$string`.

::: warning Parameters
- *string*: string
:::

::: danger Throws
- [StrNotSameException](../../Exceptions/Str/StrNotSameException.md) 
:::

::: tip Return
self
:::

---

### notSame

Asserts that the string is not same as `$string`.

::: warning Parameters
- *string*: string
:::

::: danger Throws
- [StrSameException](../../Exceptions/Str/StrSameException.md) 
:::

::: tip Return
self
:::

---

### contains

Asserts that the string contains `$string`.

::: warning Parameters
- *string*: string
:::

::: danger Throws
- [StrNotContainsException](../../Exceptions/Str/StrNotContainsException.md) 
:::

::: tip Return
self
:::

---

### notContains

Asserts that the string not contains `$string`.

::: warning Parameters
- *string*: string
:::

::: danger Throws
- [StrContainsException](../../Exceptions/Str/StrContainsException.md) 
:::

::: tip Return
self
:::

---
