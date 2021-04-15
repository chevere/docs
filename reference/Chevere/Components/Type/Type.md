---
editLink: false
---

# Type

`Chevere\Components\Type\Type`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Components/Type/Type.php)

## Implements

- [TypeInterface](../../Interfaces/Type/TypeInterface.md)

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

### __construct

::: warning Parameters
- *type*: string
:::

---

### validator

::: tip Return
callable
:::

---

### primitive

::: tip Return
string
:::

---

### typeHinting

::: tip Return
string
:::

---

### validate

::: warning Parameters
- *var*: 
:::

::: tip Return
bool
:::

---

### isScalar

::: tip Return
bool
:::

---
