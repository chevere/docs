---
editLink: false
---

# ThrowableTraceFormatter

`Chevere\Components\ThrowableHandler\ThrowableTraceFormatter`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Components/ThrowableHandler/ThrowableTraceFormatter.php)

## Implements

- [ThrowableTraceFormatterInterface](../../Interfaces/ThrowableHandler/ThrowableTraceFormatterInterface.md)
- [ToStringInterface](../../Interfaces/Common/ToStringInterface.md)
- [ToArrayInterface](../../Interfaces/Common/ToArrayInterface.md)

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

### __construct

::: warning Parameters
- *trace*: array
- *formatter*: [ThrowableHandlerFormatterInterface](../../Interfaces/ThrowableHandler/ThrowableHandlerFormatterInterface.md)
:::

---

### toArray

::: tip Return
array
:::

---

### toString

::: tip Return
string
:::

---
