# VarDumperInterface

`Chevere\Interfaces\VarDump\VarDumperInterface`

[view source](https://github.com/chevere/chevere/blob/master//home/rodolfo/git/chevere/chevere/interfaces/VarDump/VarDumperInterface.php)

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
  'boolean' => 'Chevere\\Components\\VarDump\\Processors\\BooleanProcessor',
  'array' => 'Chevere\\Components\\VarDump\\Processors\\ArrayProcessor',
  'object' => 'Chevere\\Components\\VarDump\\Processors\\ObjectProcessor',
  'integer' => 'Chevere\\Components\\VarDump\\Processors\\IntegerProcessor',
  'string' => 'Chevere\\Components\\VarDump\\Processors\\StringProcessor',
  'float' => 'Chevere\\Components\\VarDump\\Processors\\FloatProcessor',
  'null' => 'Chevere\\Components\\VarDump\\Processors\\NullProcessor',
  'resource' => 'Chevere\\Components\\VarDump\\Processors\\ResourceProcessor',
)
```


## Methods

### writer()

#### Return

[WriterInterface](../Writer/WriterInterface.md)

---

### dumpable()

#### Return

[VarDumpableInterface](./VarDumpableInterface.md)

---

### formatter()

> Provides access to the FormatterInterface instance.

#### Return

[FormatterInterface](./FormatterInterface.md)

---

### withIndent()

> Return an instance with the specified $indent.

This method MUST retain the state of the current instance, and return
an instance that contains the specified $indent.

#### Parameters

- int `$indent`

#### Return

VarDumperInterface

---

### indent()

> Provides access to the instance $indent.

#### Return

int

---

### indentString()

> Provides access to the instance $indentString.

#### Return

string

---

### withDepth()

> Return an instance with the specified $depth.

This method MUST retain the state of the current instance, and return
an instance that contains the specified $depth.

#### Parameters

- int `$depth`

#### Return

VarDumperInterface

---

### depth()

> Provides access to the instance $depth.

#### Return

int

---

### withKnownObjects()

> Return an instance with the specified known object IDs.

This method MUST retain the state of the current instance, and return
an instance that contains the specified known object IDs.

#### Parameters

- array `$known`

#### Return

VarDumperInterface

---

### known()

#### Return

array

---

### withProcessor()

> Process the var dump operation.

#### Return

VarDumperInterface

---

