---
editLink: false
---

# ThrowableHandlerConsoleDocument

`Chevere\Components\ThrowableHandler\Documents\ThrowableHandlerConsoleDocument`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Components/ThrowableHandler/Documents/ThrowableHandlerConsoleDocument.php)

## Implements

- [ToStringInterface](../../../Interfaces/Common/ToStringInterface.md)
- [ThrowableHandlerDocumentInterface](../../../Interfaces/ThrowableHandler/ThrowableHandlerDocumentInterface.md)

## Extends

- [ThrowableHandlerDocument](./ThrowableHandlerDocument.md)

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

### SECTION_CHAIN

Type `string`

```php
'chain'
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

### TAG_CHAIN

Type `string`

```php
'%chain%'
```

### SECTIONS

Type `array`

```php
array (
  0 => 'title',
  1 => 'chain',
  2 => 'message',
  3 => 'id',
  4 => 'time',
  5 => 'stack',
  6 => 'server',
)
```

### SECTIONS_VERBOSITY

Type `array`

```php
array (
  'title' => 16,
  'chain' => 16,
  'message' => 16,
  'id' => 16,
  'time' => 64,
  'stack' => 128,
  'server' => 64,
)
```

## Methods

### getFormatter()

::: tip RETURN
[ThrowableHandlerFormatterInterface](../../../Interfaces/ThrowableHandler/ThrowableHandlerFormatterInterface.md)
:::

---

### getSectionTitle()

::: tip RETURN
string
:::

---

### __construct()

#### Parameters

1. [ThrowableHandlerInterface](../../../Interfaces/ThrowableHandler/ThrowableHandlerInterface.md) `$throwableHandler`

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

### getSectionMessage()

::: tip RETURN
string
:::

---

### getSectionChain()

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

### getThrowableReadCode()

#### Parameters

1. [ThrowableReadInterface](../../../Interfaces/ThrowableHandler/ThrowableReadInterface.md) `$throwableRead`

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
