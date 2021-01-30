---
editLink: false
---

# ThrowableTraceFormatterInterface

`Chevere\Interfaces\ThrowableHandler\ThrowableTraceFormatterInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/ThrowableHandler/ThrowableTraceFormatterInterface.php)

## Extends

- [ToArrayInterface](../Common/ToArrayInterface.md)
- [ToStringInterface](../Common/ToStringInterface.md)

## Description

Describes the component in charge of formatting a throwable trace entry.

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

**Parameters:**

- *trace*: array
- *formatter*: [ThrowableHandlerFormatterInterface](./ThrowableHandlerFormatterInterface.md)

---

### toArray()

Returns an array, representing the object itself or some of its data/properties.

::: tip RETURN
array
:::

---

### toString()

Returns a string, representing the object itself or some of its data/properties.

::: tip RETURN
string
:::

---
