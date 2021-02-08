---
editLink: false
---

# ThrowableTraceEntryInterface

`Chevere\Interfaces\ThrowableHandler\ThrowableTraceEntryInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/ThrowableHandler/ThrowableTraceEntryInterface.php)

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

### __construct

::: warning Parameters
- *entry*: array
:::

::: danger Throws
- [InvalidArgumentException](../../Exceptions/Core/InvalidArgumentException.md) 
:::

---

### file

Provides access to the filename.

::: tip Return
string
:::

---

### line

Provides access to the line.

::: tip Return
int
:::

---

### fileLine

Provides access to the file plus line.

::: tip Return
string
:::

```php
return 'path_to_file:1';
```

---

### function

Provides access to the function.

::: tip Return
string
:::

---

### class

Provides access to the class (if any).

::: tip Return
string
:::

---

### type

Provides access to the type, either `::` or '->'.

::: tip Return
string
:::

---

### args

Provides access the arguments array.

::: tip Return
array
:::

---
