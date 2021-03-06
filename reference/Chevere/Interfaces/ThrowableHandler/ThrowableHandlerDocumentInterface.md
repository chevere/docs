---
editLink: false
---

# ThrowableHandlerDocumentInterface

`Chevere\Interfaces\ThrowableHandler\ThrowableHandlerDocumentInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/ThrowableHandler/ThrowableHandlerDocumentInterface.php)

## Extends

- [ToStringInterface](../Common/ToStringInterface.md)

## Description

Describes the component in charge of defining a throwable handler document.

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

### __construct

::: warning Parameters
- *throwableHandler*: [ThrowableHandlerInterface](./ThrowableHandlerInterface.md)
:::

---

### withVerbosity

Return an instance with the specified verbosity.

::: warning Parameters
- *verbosity*: int
:::

::: tip Return
static
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified verbosity.

Calling this method will reset the document sections to fit the target verbosity.

---

### verbosity

Provides access to the instance verbosity.

::: tip Return
int
:::

---

### getSectionTitle

Returns the document title section.

::: tip Return
string
:::

---

### getSectionMessage

Returns the document message section.

::: tip Return
string
:::

---

### getSectionChain

Returns the document chain section.

::: tip Return
string
:::

---

### getSectionId

Returns the document id section.

::: tip Return
string
:::

---

### getSectionTime

Returns the document time section.

::: tip Return
string
:::

---

### getSectionStack

Returns the document stack section.

::: tip Return
string
:::

---

### getSectionServer

Returns the document server section.

::: tip Return
string
:::

---

### getContent

Returns a formatted content for a section.

::: warning Parameters
- *content*: string
:::

::: tip Return
string
:::

---

### getTemplate

Returns the template used for translating placeholders tags.

::: tip Return
array
:::

```php
return [
    'self::::SECTION_TITLE' => $this->getSectionTitle(),
];
```

---

### getFormatter

Returns the document formatter.

::: tip Return
[ThrowableHandlerFormatterInterface](./ThrowableHandlerFormatterInterface.md)
:::

---

### toString

Returns a string, representing the object itself or some of its data/properties.

::: tip Return
string
:::

---
