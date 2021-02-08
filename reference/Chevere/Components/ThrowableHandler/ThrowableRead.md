---
editLink: false
---

# ThrowableRead

`Chevere\Components\ThrowableHandler\ThrowableRead`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Components/ThrowableHandler/ThrowableRead.php)

## Implements

- [ThrowableReadInterface](../../Interfaces/ThrowableHandler/ThrowableReadInterface.md)

## Constants

### DEFAULT_ERROR_TYPE

Type `integer`

```php
1
```

### ERROR_TYPES

Type `array`

```php
array (
  1 => 'Fatal error',
  2 => 'Warning',
  4 => 'Parse error',
  8 => 'Notice',
  16 => 'Core error',
  32 => 'Core warning',
  64 => 'Compile error',
  128 => 'Compile warning',
  256 => 'Fatal error',
  512 => 'Warning',
  1024 => 'Notice',
  2048 => 'Strict standards',
  4096 => 'Recoverable error',
  8192 => 'Deprecated',
  16384 => 'Deprecated',
)
```

### ERROR_LEVELS

Type `array`

```php
array (
  1 => 'critical',
  2 => 'warning',
  4 => 'alert',
  8 => 'notice',
  16 => 'critical',
  32 => 'warning',
  64 => 'alert',
  128 => 'warning',
  256 => 'error',
  512 => 'warning',
  1024 => 'notice',
  2048 => 'notice',
  4096 => 'error',
  8192 => 'notice',
  16384 => 'notice',
)
```

## Methods

### __construct

::: warning Parameters
- *throwable*: [Throwable](https://www.php.net/manual/class.throwable)
:::

---

### className

::: tip Return
string
:::

---

### code

::: tip Return
string
:::

---

### severity

::: tip Return
int
:::

---

### loggerLevel

::: tip Return
string
:::

---

### type

::: tip Return
string
:::

---

### message

::: tip Return
[MessageInterface](../../Interfaces/Message/MessageInterface.md)
:::

---

### file

::: tip Return
string
:::

---

### line

::: tip Return
int
:::

---

### trace

::: tip Return
array
:::

---

### hasPrevious

::: tip Return
bool
:::

---

### previous

::: tip Return
[Throwable](https://www.php.net/manual/class.throwable)
:::

---
