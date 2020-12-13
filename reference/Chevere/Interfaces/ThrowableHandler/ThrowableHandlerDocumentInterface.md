---
editLink: false
---

# ThrowableHandlerDocumentInterface

`Chevere\Interfaces\ThrowableHandler\ThrowableHandlerDocumentInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/ThrowableHandler/ThrowableHandlerDocumentInterface.php)

## Extends

- [ToStringInterface](../To/ToStringInterface.md)

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

1. [ThrowableHandlerInterface](./ThrowableHandlerInterface.md) `$throwableHandler`

---

### withVerbosity()

Return an instance with the specified verbosity.

#### Parameters

1. int `$verbosity`

::: tip RETURN
ThrowableHandlerDocumentInterface
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified verbosity.

Calling this method will reset the document sections to fit the target verbosity.

---

### verbosity()

Provides access to the instance verbosity.

::: tip RETURN
int
:::

---

### getSectionTitle()

Returns the document title section.

::: tip RETURN
string
:::

---

### getSectionMessage()

Returns the document message section.

::: tip RETURN
string
:::

---

### getSectionId()

Returns the document id section.

::: tip RETURN
string
:::

---

### getSectionTime()

Returns the document time section.

::: tip RETURN
string
:::

---

### getSectionStack()

Returns the document stack section.

::: tip RETURN
string
:::

---

### getSectionServer()

Returns the document server section.

::: tip RETURN
string
:::

---

### getTemplate()

Returns the template used for translating placeholders tags.

::: tip RETURN
array
:::

```php
return [
    'self::::SECTION_TITLE' => $this->getSectionTitle(),
];
```

---

### getFormatter()

Returns the document formatter.

::: tip RETURN
[ThrowableHandlerFormatterInterface](./ThrowableHandlerFormatterInterface.md)
:::

---

### toString()

Returns a string, representing the object itself or some of its data/properties.

::: tip RETURN
string
:::

---