# Type

Namespace `Chevere\Type`

The Type component is in charge of providing a layer for dynamic type handling.

## Creating Type

A Type gets created by passing a `type` [keyword](#type-keywords).

```php
use Chevere\Type\Type;

$type = new Type(Type::STRING);
```

## Type keywords

Available keywords:

- `Type::ARRAY`
- `Type::BOOLEAN`
- `Type::CALLABLE`
- `Type::FLOAT`
- `Type::INTEGER`
- `Type::ITERABLE`
- `Type::NULL`
- `Type::OBJECT`
- `Type::RESOURCE`
- `Type::STRING`

💡 Full-qualified **class names** and **interface names** can be passed as type keyword.

## Primitive & Type-hinting

The return values for methods `primitive` and `typeHinting` is explained in the table below:

| Type          | primitive()     | typeHinting()   |
| ------------- | --------------- | --------------- |
| keyword       | `keyword`       | `keyword`       |
| SomeClass     | `className`     | `SomeClass`     |
| SomeInterface | `interfaceName` | `SomeInterface` |

For [keywords](#type-keywords), the return value of `primitive` and `typeHinting` is same as the keyword.

## Validator

The `validator` method provides access to the callable used to primitive validate the type.

```php
use Chevere\Type\Type;

$type = new Type(Type::INTEGER);
$callable = $type->validator();
// is_int
```

## Validate

The `validate` method allows to validate any `$var` against the declared type.

```php
$boolean = $type->validate($var);
```

## Check if is scalar

The `isScalar` method returns true if the type is of type scalar.

```php
use Chevere\Type\Type;

$integerType = new Type(Type::INTEGER);
$true = $integerType->isScalar();
$objectType = new Type(Type::OBJECT);
$false = $type->isScalar();
```
