---
editLink: false
---

# ThrowableReadInterface

`Chevere\Interfaces\ThrowableHandler\ThrowableReadInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/ThrowableHandler/ThrowableReadInterface.php)

## Description

Describes the component in charge of reading a throwable.

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

::: danger Throws
- [RangeException](../../Exceptions/Core/RangeException.md) If unable to read `$throwable`
:::

---

### className

Provides access to the throwable class name.

::: tip Return
string
:::

---

### code

Provides access to the throwable code.

::: tip Return
string
:::

---

### severity

Provides access to the throwable severity.

::: tip Return
int
:::

---

### loggerLevel

Provides access to the throwable logger level.

::: tip Return
string
:::

---

### type

Provides access to the throwable type.

::: tip Return
string
:::

---

### message

Provides access to the throwable message.

::: tip Return
[MessageInterface](../Message/MessageInterface.md)
:::

---

### file

Provides access to the throwable file.

::: tip Return
string
:::

---

### line

Provides access to the throwable line.

::: tip Return
int
:::

---

### trace

Provides access to the throwable trace.

::: tip Return
array
:::

---

### hasPrevious

Indicates whether the instance has a previous throwable.

::: tip Return
bool
:::

---

### previous

Provides access to previous throwable.

::: danger Throws
- [TypeError](https://www.php.net/manual/class.typeerror) 
:::

::: tip Return
[Throwable](https://www.php.net/manual/class.throwable)
:::

---
