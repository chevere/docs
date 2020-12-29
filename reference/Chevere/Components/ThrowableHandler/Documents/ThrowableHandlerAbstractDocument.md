---
editLink: false
---

# ThrowableHandlerAbstractDocument

`Chevere\Components\ThrowableHandler\Documents\ThrowableHandlerAbstractDocument`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Components/ThrowableHandler/Documents/ThrowableHandlerAbstractDocument.php)

## Implements

- [ThrowableHandlerDocumentInterface](../../../Interfaces/ThrowableHandler/ThrowableHandlerDocumentInterface.md)
- [ToStringInterface](../../../Interfaces/Common/ToStringInterface.md)

## Constants

### SECTION_TITLE

Type `string`

```php
'title'
```

### SECTION_MESSAGE

Type `string`

```php
'message'
```

### SECTION_ID

Type `string`

```php
'id'
```

### SECTION_TIME

Type `string`

```php
'time'
```

### SECTION_STACK

Type `string`

```php
'stack'
```

### SECTION_SERVER

Type `string`

```php
'server'
```

### TAG_TITLE

Type `string`

```php
'%title%'
```

### TAG_MESSAGE

Type `string`

```php
'%message%'
```

### TAG_CODE_WRAP

Type `string`

```php
'%codeWrap%'
```

### TAG_ID

Type `string`

```php
'%id%'
```

### TAG_FILE_LINE

Type `string`

```php
'%fileLine%'
```

### TAG_DATE_TIME_UTC_ATOM

Type `string`

```php
'%dateTimeUtcAtom%'
```

### TAG_TIMESTAMP

Type `string`

```php
'%timestamp%'
```

### TAG_STACK

Type `string`

```php
'%stack%'
```

### TAG_PHP_UNAME

Type `string`

```php
'%phpUname%'
```

### SECTIONS

Type `array`

```php
array (
  0 => 'title',
  1 => 'message',
  2 => 'id',
  3 => 'time',
  4 => 'stack',
  5 => 'server',
)
```

### SECTIONS_VERBOSITY

Type `array`

```php
array (
  'title' => 16,
  'message' => 16,
  'id' => 16,
  'time' => 64,
  'stack' => 128,
  'server' => 64,
)
```

## Methods

### __construct()

#### Parameters

1. [ThrowableHandlerInterface](../../../Interfaces/ThrowableHandler/ThrowableHandlerInterface.md) `$throwableHandler`

---

### getFormatter()

::: tip RETURN
[ThrowableHandlerFormatterInterface](../../../Interfaces/ThrowableHandler/ThrowableHandlerFormatterInterface.md)
:::

---

### withVerbosity()

#### Parameters

1. int `$verbosity`

::: tip RETURN
[ThrowableHandlerDocumentInterface](../../../Interfaces/ThrowableHandler/ThrowableHandlerDocumentInterface.md)
:::

---

### verbosity()

::: tip RETURN
int
:::

---

### toString()

::: tip RETURN
string
:::

---

### getTemplate()

::: tip RETURN
array
:::

---

### getContent()

#### Parameters

1. string `$content`

::: tip RETURN
string
:::

---

### getSectionTitle()

::: tip RETURN
string
:::

---

### getSectionMessage()

::: tip RETURN
string
:::

---

### getSectionId()

::: tip RETURN
string
:::

---

### getSectionTime()

::: tip RETURN
string
:::

---

### getSectionStack()

::: tip RETURN
string
:::

---

### getSectionServer()

::: tip RETURN
string
:::

---

### prepare()

Prepare the document, useful to wrap headers, scripts, etc.

#### Parameters

1. string `$document`

::: tip RETURN
string
:::

---

### getExceptionCode()

::: tip RETURN
string
:::

---

### getStackTrace()

::: tip RETURN
string
:::

---

### handleVerbositySections()

::: tip RETURN
void
:::

---
