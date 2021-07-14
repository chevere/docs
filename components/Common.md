# Common

The Common component provides general purpose tooling.

## Description

[DescriptionInterface](../reference/Chevere/Interfaces/Common/DescriptionInterface.md) describes the interface for a class which describe itself.

::: tip
Use [DescriptionTrait](https://github.com/Chevereto/chevere/blob/main/src/Chevere/Components/Common/Traits/DescriptionTrait.php) to quickly implement the `DescriptionInterface`.
:::

```php
use Chevere\Interfaces\Common\DescriptionInterface;
use Chevere\Components\Common\Traits\DescriptionTrait;

class MyDescribedClass implements DescriptionInterface
{
    use DescriptionTrait;

    public function __construct()
    {
        $this->description = $this->getDescription();
    }

    public function getDescription(): string
    {
        return 'I do something';
    }
}
```

## To Array

[ToArrayInterface](../reference/Chevere/Interfaces/Common/ToArrayInterface.md) describes the interface for a class providing an array representation.

```php
use Chevere\Interfaces\Common\ToArrayInterface;

class MyToArrayClass implements ToArrayInterface
{
    private array $array;

    public function toArray(): array
    {
        return $this->array;
    }
}
```

## To String

[ToStringInterface](../reference/Chevere/Interfaces/Common/ToStringInterface.md) describes the interface for a class providing a string representation.

```php
use Chevere\Interfaces\Common\ToStringInterface;

class MyToStringClass implements ToStringInterface
{
    private string $string;

    public function toString(): string
    {
        return $this->string;
    }
}
```

`Work in progress`

* Attributes
