# TraceFormatterInterface

`Chevere\Interfaces\ThrowableHandler\TraceFormatterInterface`

[view source](https://github.com/chevere/chevere/blob/master//home/rodolfo/git/chevere/chevere/interfaces/ThrowableHandler/TraceFormatterInterface.php)

## Extends

- [ToArrayInterface]()
- [ToStringInterface]()

## Constants

### TAG_ENTRY_FILE

Type `string`

```php
'%file%'
```

### TAG_ENTRY_LINE

Type `string`

```php
'%line%'
```

### TAG_ENTRY_FILE_LINE

Type `string`

```php
'%fileLine%'
```

### TAG_ENTRY_CLASS

Type `string`

```php
'%class%'
```

### TAG_ENTRY_TYPE

Type `string`

```php
'%type%'
```

### TAG_ENTRY_FUNCTION

Type `string`

```php
'%function%'
```

### TAG_ENTRY_CSS_EVEN_CLASS

Type `string`

```php
'%cssEvenClass%'
```

### TAG_ENTRY_POS

Type `string`

```php
'%pos%'
```

### HIGHLIGHT_TAGS

Type `array`

```php
array (
  '%file%' => '_file',
  '%line%' => '_file',
  '%fileLine%' => '_file',
  '%class%' => '_class',
  '%type%' => '_operator',
  '%function%' => '_function',
)
```


## Methods

### __construct()

#### Parameters

- array `$trace`
- [FormatterInterface](./FormatterInterface.md) `$formatter`

---

### toArray()

> Returns an array, representing the object itself or some of its data/properties.

#### Return

array

---

### toString()

> Returns a string, representing the object itself or some of its data/properties.

#### Return

string

---

