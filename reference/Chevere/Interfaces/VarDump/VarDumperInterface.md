---
editLink: false
---

# VarDumperInterface

`Chevere\Interfaces\VarDump\VarDumperInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/VarDump/VarDumperInterface.php)

## Description

Describes the component in charge of handling variable dumping process.

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

### __construct

::: warning Parameters
- *writer*: [WriterInterface](../Writer/WriterInterface.md)
- *formatter*: [VarDumpFormatterInterface](./VarDumpFormatterInterface.md)
- *dumpable*: [VarDumpableInterface](./VarDumpableInterface.md)
:::

---

### writer

Provides access to the `$writer` instance.

::: tip Return
[WriterInterface](../Writer/WriterInterface.md)
:::

---

### formatter

Provides access to the `$formatter` instance.

::: tip Return
[VarDumpFormatterInterface](./VarDumpFormatterInterface.md)
:::

---

### dumpable

Provides access to the `$dumpable` instance.

::: tip Return
[VarDumpableInterface](./VarDumpableInterface.md)
:::

---

### withIndent

Return an instance with the specified `$indent`.

::: warning Parameters
- *indent*: int
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$indent`.

---

### indent

Provides access to the instance indent value.

::: tip Return
int
:::

---

### indentString

Provides access to the instance indent string.

::: tip Return
string
:::

---

### withDepth

Return an instance with the specified `$depth`.

::: warning Parameters
- *depth*: int
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$depth`.

---

### depth

Provides access to the instance `$depth`.

::: tip Return
int
:::

---

### withKnownObjects

Return an instance with the specified `$known` object IDs.

::: warning Parameters
- *known*: [Ds\Set](https://www.php.net/manual/class.ds\set)
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$known` object IDs.

---

### known

Provides access to the known object ids.

::: tip Return
[Ds\Set](https://www.php.net/manual/class.ds\set)
:::

---

### withProcess

Process the dump.

::: tip Return
self
:::

---
