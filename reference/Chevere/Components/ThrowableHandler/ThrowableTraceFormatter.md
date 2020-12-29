---
editLink: false
---

# ThrowableTraceFormatter

`Chevere\Components\ThrowableHandler\ThrowableTraceFormatter`

[view source](https://github.com/chevere/chevere/blob/master/ThrowableHandler/ThrowableTraceFormatter.php)

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

### __construct()

#### Parameters

1. array `$trace`
2. [ThrowableHandlerFormatterInterface](../../Interfaces/ThrowableHandler/ThrowableHandlerFormatterInterface.md) `$formatter`

---

### toArray()

::: tip RETURN
array
:::

---

### toString()

::: tip RETURN
string
:::

---

### getTrTable()

#### Parameters

1. int `$pos`
2. [ThrowableTraceEntryInterface](../../Interfaces/ThrowableHandler/ThrowableTraceEntryInterface.md) `$entry`

::: tip RETURN
array
:::

---

### wrapStringHr()

#### Parameters

1. string `$text`

::: tip RETURN
string
:::

---

### glueString()

#### Parameters

1. array `$array`

::: tip RETURN
void
:::

---