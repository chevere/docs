---
editLink: false
---

# Type

`Chevere\Components\Type\Type`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Components/Type/Type.php)

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

### __construct()

#### Parameters

1. string `$type`

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

#### Parameters

1.  `$var`

::: tip RETURN
bool
:::

---

### isScalar()

::: tip RETURN
bool
:::

---

### isAbleToValidateObjects()

::: tip RETURN
bool
:::

---

### validateObject()

#### Parameters

1. object `$object`

::: tip RETURN
bool
:::

---

### isClassName()

#### Parameters

1. string `$objectClass`

::: tip RETURN
bool
:::

---

### isInterfaceImplemented()

#### Parameters

1. object `$object`

::: tip RETURN
bool
:::

---

### setPrimitive()

::: tip RETURN
void
:::

---

### assertHasPrimitive()

::: tip RETURN
void
:::

---
