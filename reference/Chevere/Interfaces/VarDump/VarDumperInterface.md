---
editLink: false
---

# VarDumperInterface

`Chevere\Interfaces\VarDump\VarDumperInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/VarDump/VarDumperInterface.php)

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

::: tip RETURN
[WriterInterface](../Writer/WriterInterface.md)
:::

---

### dumpable()

::: tip RETURN
[VarDumpableInterface](./VarDumpableInterface.md)
:::

---

### formatter()

Provides access to the FormatterInterface instance.

::: tip RETURN
[FormatterInterface](./FormatterInterface.md)
:::

---

### withIndent()

Return an instance with the specified $indent.

**Parameters**

1. int `$indent`

::: tip RETURN
VarDumperInterface
:::
This method MUST retain the state of the current instance, and return
an instance that contains the specified $indent.

---

### indent()

Provides access to the instance $indent.

::: tip RETURN
int
:::

---

### indentString()

Provides access to the instance $indentString.

::: tip RETURN
string
:::

---

### withDepth()

Return an instance with the specified $depth.

**Parameters**

1. int `$depth`

::: tip RETURN
VarDumperInterface
:::
This method MUST retain the state of the current instance, and return
an instance that contains the specified $depth.

---

### depth()

Provides access to the instance $depth.

::: tip RETURN
int
:::

---

### withKnownObjects()

Return an instance with the specified known object IDs.

**Parameters**

1. array `$known`

::: tip RETURN
VarDumperInterface
:::
This method MUST retain the state of the current instance, and return
an instance that contains the specified known object IDs.

---

### known()

::: tip RETURN
array
:::

---

### withProcessor()

Process the var dump operation.

::: tip RETURN
VarDumperInterface
:::

---

