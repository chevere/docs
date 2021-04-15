---
editLink: false
---

# VarDumper

`Chevere\Components\VarDump\VarDumper`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Components/VarDump/VarDumper.php)

## Implements

- [VarDumperInterface](../../Interfaces/VarDump/VarDumperInterface.md)

## Constants

### FILE

Type `string`

```php
'_file'
```

### CLASS_REG

Type `string`

```php
'_class'
```

### CLASS_ANON

Type `string`

```php
'class@anonymous'
```

### OPERATOR

Type `string`

```php
'_operator'
```

### FUNCTION

Type `string`

```php
'_function'
```

### MODIFIERS

Type `string`

```php
'_modifiers'
```

### VARIABLE

Type `string`

```php
'_variable'
```

### EMPHASIS

Type `string`

```php
'_emphasis'
```

### PROCESSORS

Type `array`

```php
array (
  'boolean' => 'Chevere\\Components\\VarDump\\Processors\\VarDumpBooleanProcessor',
  'array' => 'Chevere\\Components\\VarDump\\Processors\\VarDumpArrayProcessor',
  'object' => 'Chevere\\Components\\VarDump\\Processors\\VarDumpObjectProcessor',
  'integer' => 'Chevere\\Components\\VarDump\\Processors\\VarDumpIntegerProcessor',
  'string' => 'Chevere\\Components\\VarDump\\Processors\\VarDumpStringProcessor',
  'float' => 'Chevere\\Components\\VarDump\\Processors\\VarDumpFloatProcessor',
  'null' => 'Chevere\\Components\\VarDump\\Processors\\VarDumpNullProcessor',
  'resource' => 'Chevere\\Components\\VarDump\\Processors\\VarDumpResourceProcessor',
)
```

## Methods

### __construct

::: warning Parameters
- *writer*: [WriterInterface](../../Interfaces/Writer/WriterInterface.md)
- *formatter*: [VarDumpFormatterInterface](../../Interfaces/VarDump/VarDumpFormatterInterface.md)
- *dumpable*: [VarDumpableInterface](../../Interfaces/VarDump/VarDumpableInterface.md)
:::

---

### writer

::: tip Return
[WriterInterface](../../Interfaces/Writer/WriterInterface.md)
:::

---

### formatter

::: tip Return
[VarDumpFormatterInterface](../../Interfaces/VarDump/VarDumpFormatterInterface.md)
:::

---

### dumpable

::: tip Return
[VarDumpableInterface](../../Interfaces/VarDump/VarDumpableInterface.md)
:::

---

### withIndent

::: warning Parameters
- *indent*: int
:::

::: tip Return
[VarDumperInterface](../../Interfaces/VarDump/VarDumperInterface.md)
:::

---

### indent

::: tip Return
int
:::

---

### indentString

::: tip Return
string
:::

---

### withDepth

::: warning Parameters
- *depth*: int
:::

::: tip Return
[VarDumperInterface](../../Interfaces/VarDump/VarDumperInterface.md)
:::

---

### depth

::: tip Return
int
:::

---

### withKnownObjects

::: warning Parameters
- *known*: [Ds\Set](https://www.php.net/manual/class.ds\set)
:::

::: tip Return
[VarDumperInterface](../../Interfaces/VarDump/VarDumperInterface.md)
:::

---

### known

::: tip Return
[Ds\Set](https://www.php.net/manual/class.ds\set)
:::

---

### withProcess

::: tip Return
[VarDumperInterface](../../Interfaces/VarDump/VarDumperInterface.md)
:::

---
