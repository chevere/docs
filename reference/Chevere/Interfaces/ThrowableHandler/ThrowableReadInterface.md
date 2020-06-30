# ThrowableReadInterface

`Chevere\Interfaces\ThrowableHandler\ThrowableReadInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/ThrowableHandler/ThrowableReadInterface.php)

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

### className()

Provides access to the exception class name.

::: tip RETURN
string
:::


---

### code()

Provides access to the exception code.

::: tip RETURN
int
:::


---

### severity()

Provides access to the exception severity.

::: tip RETURN
int
:::


---

### loggerLevel()

Provides access to the exception logger level.

::: tip RETURN
string
:::


---

### type()

Provides access to the exception type.

::: tip RETURN
string
:::


---

### message()

Provides access to the exception message.

::: tip RETURN
[MessageInterface](../Message/MessageInterface.md)
:::


---

### file()

Provides access to the exception file.

::: tip RETURN
string
:::


---

### line()

Provides access to the exception line.

::: tip RETURN
int
:::


---

### trace()

Provides access to the exception trace.

::: tip RETURN
array
:::


---

