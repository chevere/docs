---
editLink: false
---

# ThrowableTraceEntryInterface

`Chevere\Interfaces\ThrowableHandler\ThrowableTraceEntryInterface`

[view source](https://github.com/chevere/chevere/blob/master/ThrowableHandler/ThrowableTraceEntryInterface.php)

## Description

Describes the component in charge of describing a throwable trace entry captured from `debug_backtrace()`.

## Constants

### KEYS

Type `array`

```php
array (
  0 => 'file',
  1 => 'line',
  2 => 'function',
  3 => 'class',
  4 => 'type',
)
```

### MUST_HAVE_KEYS

Type `array`

```php
array (
  0 => 'function',
)
```

## Methods

### __construct()

#### Parameters

1. array `$entry`

::: danger THROWS
- [InvalidArgumentException](../../Exceptions/Core/InvalidArgumentException.md) 
:::

---

### file()

Provides access to the filename.

::: tip RETURN
string
:::

---

### line()

Provides access to the line.

::: tip RETURN
int
:::

---

### fileLine()

Provides access to the file plus line.

::: tip RETURN
string
:::

```php
return 'path_to_file:1';
```

---

### function()

Provides access to the function.

::: tip RETURN
string
:::

---

### class()

Provides access to the class (if any).

::: tip RETURN
string
:::

---

### type()

Provides access to the type, either `::` or '->'.

::: tip RETURN
string
:::

---

### args()

Provides access the arguments array.

::: tip RETURN
array
:::

---
