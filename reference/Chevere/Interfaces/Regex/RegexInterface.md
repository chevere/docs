---
editLink: false
---

# RegexInterface

`Chevere\Interfaces\Regex\RegexInterface`

[view source](https://github.com/chevere/chevere/blob/master/Regex/RegexInterface.php)

## Extends

- [ToStringInterface](../Common/ToStringInterface.md)

## Description

Describes the component in charge of interacting with PCRE - Perl Compatible Regular Expressions.

## Constants

### ERRORS

Type `array`

```php
array (
  0 => 'PREG_NO_ERROR',
  1 => 'PREG_INTERNAL_ERROR',
  2 => 'PREG_BACKTRACK_LIMIT_ERROR',
  3 => 'PREG_RECURSION_LIMIT_ERROR',
  4 => 'PREG_BAD_UTF8_ERROR',
  5 => 'PREG_BAD_UTF8_OFFSET_ERROR',
  6 => 'PREG_JIT_STACKLIMIT_ERROR',
)
```

## Methods

### __construct()

#### Parameters

1. string `$pattern`

::: danger THROWS
- [RegexInvalidException](../../Exceptions/Regex/RegexInvalidException.md) 
:::

---

### toNoDelimiters()

Provides access to the the regex string without delimiters.

::: tip RETURN
string
:::

---

### toNoDelimitersNoAnchors()

Provides access to the regex string without delimiters and without anchors (`^`, `$`).

::: tip RETURN
string
:::

---

### match()

Matches string.

#### Parameters

1. string `$string`

::: danger THROWS
- [RuntimeException](../../Exceptions/Core/RuntimeException.md) 
:::

::: tip RETURN
array
:::

---

### matchAll()

Matches all string.

#### Parameters

1. string `$string`

::: danger THROWS
- [RuntimeException](../../Exceptions/Core/RuntimeException.md) 
:::

::: tip RETURN
array
:::

---

### toString()

Returns a string, representing the object itself or some of its data/properties.

::: tip RETURN
string
:::

---
