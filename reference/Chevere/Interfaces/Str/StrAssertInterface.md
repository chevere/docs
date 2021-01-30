---
editLink: false
---

# StrAssertInterface

`Chevere\Interfaces\Str\StrAssertInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Str/StrAssertInterface.php)

## Description

Describes the component in charge of string asserting.

## Methods

### __construct()

**Parameters:**

- *string*: string

---

### empty()

Asserts that the string is empty.

::: danger THROWS
- [StrNotEmptyException](../../Exceptions/Str/StrNotEmptyException.md) 
:::

::: tip RETURN
self
:::

---

### notEmpty()

Asserts that the string is not empty.

::: danger THROWS
- [StrEmptyException](../../Exceptions/Str/StrEmptyException.md) 
:::

::: tip RETURN
self
:::

---

### ctypeSpace()

Asserts that the string is ctype space.

::: danger THROWS
- [StrNotCtypeSpaceException](../../Exceptions/Str/StrNotCtypeSpaceException.md) 
:::

::: tip RETURN
self
:::

---

### notCtypeSpace()

Asserts that the string is not ctype space.

::: danger THROWS
- [StrCtypeSpaceException](../../Exceptions/Str/StrCtypeSpaceException.md) 
:::

::: tip RETURN
self
:::

---

### ctypeDigit()

Asserts that the string is ctype digit.

::: danger THROWS
- [StrNotCtypeDigitException](../../Exceptions/Str/StrNotCtypeDigitException.md) 
:::

::: tip RETURN
self
:::

---

### notCtypeDigit()

Asserts that the string is not ctype digit.

::: danger THROWS
- [StrCtypeDigitException](../../Exceptions/Str/StrCtypeDigitException.md) 
:::

::: tip RETURN
self
:::

---

### startsWithCtypeDigit()

Asserts that the string is starts with ctype digit.

::: danger THROWS
- [StrNotStartsWithCtypeDigitException](../../Exceptions/Str/StrNotStartsWithCtypeDigitException.md) 
:::

::: tip RETURN
self
:::

---

### notStartsWithCtypeDigit()

Asserts that the string not starts with ctype digit.

::: danger THROWS
- [StrStartsWithCtypeDigitException](../../Exceptions/Str/StrStartsWithCtypeDigitException.md) 
:::

::: tip RETURN
self
:::

---

### startsWith()

Asserts that the string is starts with `$needle`.

**Parameters:**

- *needle*: string

::: danger THROWS
- [StrNotStartsWithException](../../Exceptions/Str/StrNotStartsWithException.md) 
:::

::: tip RETURN
self
:::

---

### notStartsWith()

Asserts that the string not starts with `$needle`.

**Parameters:**

- *needle*: string

::: danger THROWS
- [StrStartsWithException](../../Exceptions/Str/StrStartsWithException.md) 
:::

::: tip RETURN
self
:::

---

### endsWith()

Asserts that the string ends with `$needle`.

**Parameters:**

- *needle*: string

::: danger THROWS
- [StrNotEndsWithException](../../Exceptions/Str/StrNotEndsWithException.md) 
:::

::: tip RETURN
self
:::

---

### notEndsWith()

Asserts that the string not ends with `$needle`.

**Parameters:**

- *needle*: string

::: danger THROWS
- [StrEndsWithException](../../Exceptions/Str/StrEndsWithException.md) 
:::

::: tip RETURN
self
:::

---

### same()

Asserts that the string is same as `$string`.

**Parameters:**

- *string*: string

::: danger THROWS
- [StrNotSameException](../../Exceptions/Str/StrNotSameException.md) 
:::

::: tip RETURN
self
:::

---

### notSame()

Asserts that the string is not same as `$string`.

**Parameters:**

- *string*: string

::: danger THROWS
- [StrSameException](../../Exceptions/Str/StrSameException.md) 
:::

::: tip RETURN
self
:::

---

### contains()

Asserts that the string contains `$string`.

**Parameters:**

- *string*: string

::: danger THROWS
- [StrNotContainsException](../../Exceptions/Str/StrNotContainsException.md) 
:::

::: tip RETURN
self
:::

---

### notContains()

Asserts that the string not contains `$string`.

**Parameters:**

- *string*: string

::: danger THROWS
- [StrContainsException](../../Exceptions/Str/StrContainsException.md) 
:::

::: tip RETURN
self
:::

---
