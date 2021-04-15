---
editLink: false
---

# ThrowableHandlerConsoleDocument

`Chevere\Components\ThrowableHandler\Documents\ThrowableHandlerConsoleDocument`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Components/ThrowableHandler/Documents/ThrowableHandlerConsoleDocument.php)

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

### getFormatter

::: tip Return
[ThrowableHandlerFormatterInterface](../../../Interfaces/ThrowableHandler/ThrowableHandlerFormatterInterface.md)
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
static
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
