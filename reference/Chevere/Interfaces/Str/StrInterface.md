---
editLink: false
---

# StrInterface

`Chevere\Interfaces\Str\StrInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/Str/StrInterface.php)

## Extends

- [ToStringInterface](../Common/ToStringInterface.md)

## Description

Describes the component in charge of string manipulation.

## Methods

### __construct

::: warning Parameters
- *string*: string
:::

---

### withLowercase

Return an instance with the chars lower cased (UTF-8).

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the chars lower cased.

---

### withUppercase

Return an instance with the chars upper cased (UTF-8).

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the chars upper cased.

---

### withStripWhitespace

Return an instance with the white space stripped.

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the white space stripped.

---

### withStripExtraWhitespace

Return an instance with the extra white space stripped.

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the extra white space stripped.

---

### withStripNonAlphanumerics

Return an instance with the non-alphanumeric chars stripped.

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the non-alphanumeric chars stripped.

---

### withForwardSlashes

Return an instance with the back slashes converted to forward slashes.

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the back slashes converted to forward slashes.

---

### withLeftTail

Return an instance with the specified `$tail` on left.

::: warning Parameters
- *tail*: string
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$tail` on left.

---

### withRightTail

Return an instance with the specified `$tail` on right.

::: warning Parameters
- *tail*: string
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$tail` on right.

---

### withReplaceFirst

Return an instance with the specified `$search` replaced with `$replace` on the first occurrence.

::: warning Parameters
- *search*: string
- *replace*: string
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$search` replaced with `$replace` on the first occurrence.

---

### withReplaceLast

Return an instance with the specified `$search` replaced with `$replace` on the last occurrence.

::: warning Parameters
- *search*: string
- *replace*: string
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$search` replaced with `$replace` on the last occurrence.

---

### withReplaceAll

Return an instance with the specified `$search` replaced with `$replace` on all occurrences.

::: warning Parameters
- *search*: string
- *replace*: string
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$search` replaced with `$replace` on all occurrences.

---

### withStripANSIColors

Return an instance with the ANSI colors stripped.

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the ANSI colors stripped.

---

### toString

Returns a string, representing the object itself or some of its data/properties.

::: tip Return
string
:::

---
