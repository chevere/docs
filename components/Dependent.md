# Dependent

The `Chevere\Components\Dependent` namespace provides components for providing handling for object dependencies that must be injected.

The concept is known as [dependency injection](https://en.wikipedia.org/wiki/Dependency_injection).

::: tip
A class that expose dependencies required to be provided on instance creation is known as a _dependent_.
:::

## Implementing

[DependentInterface](../reference/Chevere/Interfaces/Dependent/DependentInterface.md) describes the interface for the component in charge of defining a Dependent.

::: tip
Use [DependentTrait](../reference/Chevere/Components/Dependent/Traits/DependentTrait.md) to implement the `DependentInterface`.
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
    return new Dependencies(
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
$dependent = new MyDependent(
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

Create Dependencies by passing named dependencies on construct, which must be known classes or interface names.

```php
use Chevere\Components\Dependent\Dependencies;

$dependencies = new Dependencies(depends: 'SomeType');
```

### Putting Dependencies

The `withPut` method is used to put named dependencies.

```php
$dependencies->withPut(foo: 'FooType');
```

### Mappable tools

The `keys` method access all dependency names.

```php
$dependencies->keys(); // ['depends', 'foo']
```

The `count` method returns the dependencies count.

```php
$dependencies->count(); // 2
```

The `getGenerator` method returns a Generator that can be used to traverse dependencies.

```php
foreach($dependencies->getGenerator() as $name => $className)
{
    // For first item: 'depends' => 'SomeType'
}
```
