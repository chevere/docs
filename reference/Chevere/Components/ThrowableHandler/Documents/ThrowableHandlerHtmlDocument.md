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

### getFormatter

::: tip Return
[ThrowableHandlerFormatterInterface](../../../Interfaces/ThrowableHandler/ThrowableHandlerFormatterInterface.md)
:::

---

### getTemplate

::: tip Return
array
:::

---

### getContent

::: warning Parameters
- *content*: string
:::

::: tip Return
string
:::

---

### getSectionTitle

::: tip Return
string
:::

---

### __construct

::: warning Parameters
- *throwableHandler*: [ThrowableHandlerInterface](../../../Interfaces/ThrowableHandler/ThrowableHandlerInterface.md)
:::

---

### withVerbosity

::: warning Parameters
- *verbosity*: int
:::

::: tip Return
[ThrowableHandlerDocumentInterface](../../../Interfaces/ThrowableHandler/ThrowableHandlerDocumentInterface.md)
:::

---

### verbosity

::: tip Return
int
:::

---

### toString

::: tip Return
string
:::

---

### getSectionMessage

::: tip Return
string
:::

---

### getSectionChain

::: tip Return
string
:::

---

### getSectionId

::: tip Return
string
:::

---

### getSectionTime

::: tip Return
string
:::

---

### getSectionStack

::: tip Return
string
:::

---

### getSectionServer

::: tip Return
string
:::

---
