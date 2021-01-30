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

### __construct

::: warning Parameters
- *pattern*: string
:::

::: danger Throws
- [InvalidArgumentException](../../Exceptions/Core/InvalidArgumentException.md) 
:::

---

### toString

::: tip Return
string
:::

---

### toNoDelimiters

::: tip Return
string
:::

---

### toNoDelimitersNoAnchors

::: tip Return
string
:::

---

### match

::: warning Parameters
- *string*: string
:::

::: tip Return
array
:::

---

### matchAll

::: warning Parameters
- *string*: string
:::

::: tip Return
array
:::

---
