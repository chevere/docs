# Type

The Type component is in charge of providing a layer for dynamic type handling.

[TypeInterface](../reference/Chevere/Interfaces/Type/TypeInterface.md) describes the component in charge of defining a type.

## Creating a Type

A Type gets created by passing a `$type` keyword.

```php
use Chevere\Components\Type\Type;

new Type(Type::STRING);
```

### Keywords

Available keywords are (relative to `Chevere\Components\Type` namespace):

- `Type::BOOLEAN`
- `Type::INTEGER`
- `Type::FLOAT`
- `Type::STRING`
- `Type::ARRAY`
- `Type::OBJECT`
- `Type::CALLABLE`
- `Type::ITERABLE`
- `Type::RESOURCE`
- `Type::NULL`

Note that **class names** and **interface names** can be also passed as type keyword.

## Primitive & Type-hinting

The return values for methods `primitive` and `typeHinting` is explained in the table below:

| Type          | primitive()     | typeHinting()   |
| ------------- | --------------- | --------------- |
| *keyword      | `*keyword`      | `*keyword*`     |
| SomeClass     | `className`     | `ClassName`     |
| SomeInterface | `interfaceName` | `SomeInterface` |

For [keywords](#keywords), the return value of `primitive` and `typeHinting` is same as the actual keyword.

## Validate

The `validate` method allows to validate any `$var` against the declared type.

```php
use Chevere\Interfaces\Type\TypeInterface;

/**
 * @var mixed $mixed
 * @var TypeInterface $type
 * @var bool $validate
 */
$validate = $type->validate($mixed);
```
