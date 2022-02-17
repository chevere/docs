# Type

`🚧 OUTDATED DOCS`

The [Type](../reference/Chevere/Components/Type/Type.md) component is in charge of providing a layer for dynamic type handling.

## Creating a Type

A Type gets created by passing a `type` [keyword](#type-keywords).

```php
use Chevere\Type\Type;

$type = new Type(Type::STRING);
```

## Type keywords

Available keywords:

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

::: tip
Full-qualified **class names** and **interface names** can be passed as type keyword.
:::

## Primitive & Type-hinting

The return values for methods `primitive` and `typeHinting` is explained in the table below:

| Type          | primitive()     | typeHinting()   |
| ------------- | --------------- | --------------- |
| keyword       | `keyword`       | `keyword`       |
| SomeClass     | `className`     | `SomeClass`     |
| SomeInterface | `interfaceName` | `SomeInterface` |

For [keywords](#keywords), the return value of `primitive` and `typeHinting` is same as the keyword.

## Validate

The `validate` method allows to validate any `$var` against the declared type.

```php
use Chevere\Type\Interfaces\TypeInterface;

/**
 * @var bool $validate
 */
$validate = $type->validate(var: $var);
```
