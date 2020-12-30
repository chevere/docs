---
editLink: false
---

# ThrowableHandlerHtmlDocument

`Chevere\Components\ThrowableHandler\Documents\ThrowableHandlerHtmlDocument`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Components/ThrowableHandler/Documents/ThrowableHandlerHtmlDocument.php)

## Implements

- [ToStringInterface](../../../Interfaces/Common/ToStringInterface.md)
- [ThrowableHandlerDocumentInterface](../../../Interfaces/ThrowableHandler/ThrowableHandlerDocumentInterface.md)

## Extends

- [ThrowableHandlerDocument](./ThrowableHandlerDocument.md)

## Constants

### NO_DEBUG_TITLE_PLAIN

Type `string`

```php
'Something went wrong'
```

### NO_DEBUG_CONTENT_HTML

Type `string`

```php
'<p>Please try again later. If the problem persist don\'t hesitate to contact the system administrator.</p>'
```

### HTML_TEMPLATE

Type `string`

```php
'<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><style>%css%</style></head><body class="%bodyClass%">%body%</body></html>'
```

### BODY_DEBUG_0_HTML

Type `string`

```php
'<main class="user-select-none"><div>%content%</div></main>'
```

### BODY_DEBUG_1_HTML

Type `string`

```php
'<main class="main--stack"><div>%content%</div></main>'
```

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

### prepare()

#### Parameters

1. string `$document`

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
