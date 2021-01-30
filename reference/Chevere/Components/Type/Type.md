---
editLink: false
---

# Type

`Chevere\Components\Type\Type`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Components/Type/Type.php)

## Implements

- [TypeInterface](../../Interfaces/Type/TypeInterface.md)

## Constants

### BOOL

Type `string`

```php
'bool'
```

### INT

Type `string`

```php
'int'
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

### PRIMITIVE_CLASS_NAME

Type `string`

```php
'className'
```

### PRIMITIVE_INTERFACE_NAME

Type `string`

```php
'interfaceName'
```

### TYPE_VALIDATORS

Type `array`

```php
array (
  'array' => 'is_array',
  'bool' => 'is_bool',
  'callable' => 'is_callable',
  'float' => 'is_float',
  'int' => 'is_integer',
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

**Parameters:**

- *type*: string

---

### validator()

::: tip RETURN
callable
:::

---

### primitive()

::: tip RETURN
string
:::

---

### typeHinting()

::: tip RETURN
string
:::

---

### validate()

**Parameters:**

- *var*: 

::: tip RETURN
bool
:::

---

### isScalar()

::: tip RETURN
bool
:::

---
