---
editLink: false
---

# VarDumper

`Chevere\Components\VarDump\VarDumper`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Components/VarDump/VarDumper.php)

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
  'bool' => 'Chevere\\Components\\VarDump\\Processors\\VarDumpBooleanProcessor',
  'array' => 'Chevere\\Components\\VarDump\\Processors\\VarDumpArrayProcessor',
  'object' => 'Chevere\\Components\\VarDump\\Processors\\VarDumpObjectProcessor',
  'int' => 'Chevere\\Components\\VarDump\\Processors\\VarDumpIntegerProcessor',
  'string' => 'Chevere\\Components\\VarDump\\Processors\\VarDumpStringProcessor',
  'float' => 'Chevere\\Components\\VarDump\\Processors\\VarDumpFloatProcessor',
  'null' => 'Chevere\\Components\\VarDump\\Processors\\VarDumpNullProcessor',
  'resource' => 'Chevere\\Components\\VarDump\\Processors\\VarDumpResourceProcessor',
)
```

## Methods

### __construct()

**Parameters:**

- *writer*: [WriterInterface](../../Interfaces/Writer/WriterInterface.md)
- *formatter*: [VarDumpFormatterInterface](../../Interfaces/VarDump/VarDumpFormatterInterface.md)
- *dumpable*: [VarDumpableInterface](../../Interfaces/VarDump/VarDumpableInterface.md)

---

### writer()

::: tip RETURN
[WriterInterface](../../Interfaces/Writer/WriterInterface.md)
:::

---

### formatter()

::: tip RETURN
[VarDumpFormatterInterface](../../Interfaces/VarDump/VarDumpFormatterInterface.md)
:::

---

### dumpable()

::: tip RETURN
[VarDumpableInterface](../../Interfaces/VarDump/VarDumpableInterface.md)
:::

---

### withIndent()

**Parameters:**

- *indent*: int

::: tip RETURN
[VarDumperInterface](../../Interfaces/VarDump/VarDumperInterface.md)
:::

---

### indent()

::: tip RETURN
int
:::

---

### indentString()

::: tip RETURN
string
:::

---

### withDepth()

**Parameters:**

- *depth*: int

::: tip RETURN
[VarDumperInterface](../../Interfaces/VarDump/VarDumperInterface.md)
:::

---

### depth()

::: tip RETURN
int
:::

---

### withKnownObjects()

**Parameters:**

- *known*: [Ds\Set](https://www.php.net/manual/class.ds\set)

::: tip RETURN
[VarDumperInterface](../../Interfaces/VarDump/VarDumperInterface.md)
:::

---

### known()

::: tip RETURN
[Ds\Set](https://www.php.net/manual/class.ds\set)
:::

---

### withProcess()

::: tip RETURN
[VarDumperInterface](../../Interfaces/VarDump/VarDumperInterface.md)
:::

---
