---
editLink: false
---

# VarDumperInterface

`Chevere\Interfaces\VarDump\VarDumperInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/VarDump/VarDumperInterface.php)

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

### __construct()

#### Parameters

1. [WriterInterface](../Writer/WriterInterface.md) `$writer`
2. [VarDumpFormatterInterface](./VarDumpFormatterInterface.md) `$formatter`
3. [VarDumpableInterface](./VarDumpableInterface.md) `$dumpable`

---

### writer()

Provides access to the `$writer` instance.

::: tip RETURN
[WriterInterface](../Writer/WriterInterface.md)
:::

---

### formatter()

Provides access to the `$formatter` instance.

::: tip RETURN
[VarDumpFormatterInterface](./VarDumpFormatterInterface.md)
:::

---

### dumpable()

Provides access to the `$dumpable` instance.

::: tip RETURN
[VarDumpableInterface](./VarDumpableInterface.md)
:::

---

### withIndent()

Return an instance with the specified `$indent`.

#### Parameters

1. int `$indent`

::: tip RETURN
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$indent`.

---

### indent()

Provides access to the instance indent value.

::: tip RETURN
int
:::

---

### indentString()

Provides access to the instance indent string.

::: tip RETURN
string
:::

---

### withDepth()

Return an instance with the specified `$depth`.

#### Parameters

1. int `$depth`

::: tip RETURN
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$depth`.

---

### depth()

Provides access to the instance `$depth`.

::: tip RETURN
int
:::

---

### withKnownObjects()

Return an instance with the specified `$known` object IDs.

#### Parameters

1. [Ds\Set](https://www.php.net/manual/class.ds\set) `$known`

::: tip RETURN
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$known` object IDs.

---

### known()

Provides access to the known object ids.

::: tip RETURN
[Ds\Set](https://www.php.net/manual/class.ds\set)
:::

---

### withProcess()

Process the dump.

::: tip RETURN
self
:::

---
