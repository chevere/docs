# DocumentInterface

`Chevere\Interfaces\ThrowableHandler\DocumentInterface`

[view source](https://github.com/chevere/chevere/blob/master//home/rodolfo/git/chevere/chevere/interfaces/ThrowableHandler/DocumentInterface.php)

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

- [ThrowableHandlerInterface](./ThrowableHandlerInterface.md) `$exceptionHandler`

---

### withVerbosity()

> Return an instance with the specified verbosity.

This method MUST retain the state of the current instance, and return
an instance that contains the specified verbosity.

Calling this method will reset the document sections to fit the target verbosity.

#### Parameters

- int `$verbosity`

#### Return

DocumentInterface

---

### verbosity()

> Provides access to the instance verbosity.

#### Return

int

---

### getSectionTitle()

> Returns the document title section.

#### Return

string

---

### getSectionMessage()

> Returns the document message section.

#### Return

string

---

### getSectionId()

> Returns the document id section.

#### Return

string

---

### getSectionTime()

> Returns the document time section.

#### Return

string

---

### getSectionStack()

> Returns the document stack section.

#### Return

string

---

### getSectionServer()

> Returns the document server section.

#### Return

string

---

### toString()

#### Return

string

---

### getTemplate()

#### Return

array

---

### getFormatter()

#### Return

[FormatterInterface](./FormatterInterface.md)

---

