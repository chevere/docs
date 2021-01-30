---
editLink: false
---

# TypeInterface

`Chevere\Interfaces\Type\TypeInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Type/TypeInterface.php)

## Description

Describes the component in charge of dynamic type validation.

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

### __construct

::: warning Parameters
- *type*: string
:::

::: danger Throws
- ⚠ Unknown type `InvalidArgumentException` declared in `@throws` tag`
:::

---

### primitive

Returns the type primitive (array, bool, object, ..., className, interfaceName).

::: tip Return
string
:::

---

### typeHinting

Returns the type hinting.

::: tip Return
string
:::

It will return either the class name, interface, or the primitive.

---

### validate

Returns a boolean indicating if `$var` validates against the type.

::: warning Parameters
- *var*: 
:::

::: tip Return
bool
:::

---

### validator

Returns the validator callable.

::: tip Return
callable
:::

---

### isScalar

Returns a boolean indicating if type is scalar.

::: tip Return
bool
:::

---
