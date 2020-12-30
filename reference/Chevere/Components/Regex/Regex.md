---
editLink: false
---

# Regex

`Chevere\Components\Regex\Regex`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Components/Regex/Regex.php)

## Implements

- [RegexInterface](../../Interfaces/Regex/RegexInterface.md)
- [ToStringInterface](../../Interfaces/Common/ToStringInterface.md)

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
- [InvalidArgumentException](../../Exceptions/Core/InvalidArgumentException.md) 
:::

---

### toString()

::: tip RETURN
string
:::

---

### toNoDelimiters()

::: tip RETURN
string
:::

---

### toNoDelimitersNoAnchors()

::: tip RETURN
string
:::

---

### match()

#### Parameters

1. string `$string`

::: tip RETURN
array
:::

---

### matchAll()

#### Parameters

1. string `$string`

::: tip RETURN
array
:::

---

### assertRegex()

::: tip RETURN
void
:::

---
