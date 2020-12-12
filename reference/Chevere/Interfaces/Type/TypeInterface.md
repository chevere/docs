---
editLink: false
---

# TypeInterface

`Chevere\Interfaces\Type\TypeInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Type/TypeInterface.php)

## Description

Describes the component in charge of dynamic type validation.

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

1. string `$type`

::: danger THROWS
- [TypeNotFoundException](../../Exceptions/Type/TypeNotFoundException.md) if the type doesn't exists
:::

---

### primitive()

Returns the type primitive (array, bool, object, ..., className, interfaceName).

::: tip RETURN
string
:::

---

### typeHinting()

Returns the type hinting.

::: tip RETURN
string
:::

It will return either the class name, interface, or the primitive.

---

### validate()

Returns a boolean indicating if `$var` validates against the type.

#### Parameters

1.  `$var`

::: tip RETURN
bool
:::

---

### validator()

Returns the validator callable.

::: tip RETURN
callable
:::

---

### isScalar()

Returns a boolean indicating if type is scalar.

::: tip RETURN
bool
:::

---
