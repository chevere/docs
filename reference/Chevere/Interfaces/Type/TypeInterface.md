# TypeInterface

`Chevere\Interfaces\Type\TypeInterface`

[view source](https://github.com/chevere/chevere/blob/master//home/rodolfo/git/chevere/chevere/interfaces/Type/TypeInterface.php)

## Constants

### BOOLEAN

Type `string`

```php
'boolean'
```

### INTEGER

Type `string`

```php
'integer'
```

### FLOAT

Type `string`

```php
'float'
```

### STRING

Type `string`

```php
'string'
```

### ARRAY

Type `string`

```php
'array'
```

### OBJECT

Type `string`

```php
'object'
```

### CALLABLE

Type `string`

```php
'callable'
```

### ITERABLE

Type `string`

```php
'iterable'
```

### RESOURCE

Type `string`

```php
'resource'
```

### NULL

Type `string`

```php
'null'
```

### CLASS_NAME

Type `string`

```php
'className'
```

### INTERFACE_NAME

Type `string`

```php
'interfaceName'
```

### TYPE_VALIDATORS

Type `array`

```php
array (
  'array' => 'is_array',
  'boolean' => 'is_bool',
  'callable' => 'is_callable',
  'float' => 'is_float',
  'integer' => 'is_integer',
  'iterable' => 'is_iterable',
  'null' => 'is_null',
  'object' => 'is_object',
  'resource' => 'is_resource',
  'string' => 'is_string',
  'className' => 'is_object',
  'interfaceName' => 'is_object',
)
```


## Methods

### __construct()

#### Parameters

- string `$type`

---

### primitive()

> Returns the type primitive (array, bool, object, ..., className, interfaceName).

#### Return

string

---

### typeHinting()

> Returns the type hinting.

It will return either the class name, interface, or simply the primitive.

#### Return

string

---

### validate()

> Returns a boolean indicating if $var validates against the type.

#### Parameters

-  `$var`

#### Return

bool

---

### validator()

> Returns the type validator callable.

#### Return

callable

---

