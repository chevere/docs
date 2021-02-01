# Dependent

The `Chevere\Components\Dependent` component is in charge of providing handling for object dependencies that must be injected. The concept is well-known as [dependency injection](https://en.wikipedia.org/wiki/Dependency_injection).

::: tip
A class that expose dependencies required to be provided on instance creation is known as a _dependent_.
:::

## Implementing

[DependentInterface](../reference/Chevere/Interfaces/Dependent/DependentInterface.md) describes the interface for the component in charge of defining a Dependent.

::: tip
⏩ Use [DependentTrait](https://github.com/chevere/chevere/blob/master/src/Chevere/Components/Dependent/Traits/DependentTrait.php) to quickly implement the `DependentInterface`.
:::

```php
use Chevere\Interfaces\Dependent\DependentInterface;
use Chevere\Components\Dependent\Traits\DependentTrait;

class MyDependent implements DependentInterface
{
    use DependentTrait;

    // ...
}
```

## Defining Dependencies

The `getDependencies` method allows to define the [Dependencies](#dependencies) required by Dependent.

```php
use Chevere\Components\Dependent\Dependencies;

public function getDependencies(): DependenciesInterface
    {
        return (new Dependencies())
            ->withPut(
                foo: 'FooType',
                bar: 'BarType',
            );
    }
```

Use typed properties to add type-checking to dependencies.

```php
private FooType $foo;

private BarType $bar;
```

## Accessing Dependencies

The method `dependencies` is used to access [Dependencies](#dependencies) required by Dependent.

```php
$dependent->dependencies();
```

## Passing dependencies

Method `withDependencies` is used to pass dependencies.

```php
/**
 * @var FooType $fooInject
 * @var BarType $barInject
 */
$dependent = (new MyDependent())
    ->withDependencies(
        foo: $fooInject,
        bar: $barInject
    );
```

## Asserting dependencies

The method `assertDependencies` asserts if a Dependent meets all dependencies.

```php
$dependent->assertDependencies();
```

## Dependencies

The Dependencies component is in charge of collecting dependencies.

[DependenciesInterface](../reference/Chevere/Interfaces/Dependent/DependenciesInterface.md) describes the interface for the component in charge of defining Dependencies.

### Creating Dependencies

```php
use Chevere\Components\Dependent\Dependencies;

$dependencies = new Dependencies();
```

### Putting Dependencies

The `withPut` method is used to pass named dependencies.

```php
$dependencies->withPut(foo: 'FooType');
```

### Mappable tools

The `keys` method access all dependency names.

```php
$dependencies->keys(); // ['foo']
```

The `count` method returns the dependencies count.

```php
$dependencies->count(); // 1
```

The `getGenerator` method returns a Generator that can be used to traverse dependencies.

```php
foreach($dependencies->getGenerator() as $name => $className)
{
    // $name = 'foo';
    // $className = 'FooType';
}
```
