---
editLink: false
---

# DependentInterface

`Chevere\Interfaces\Dependent\DependentInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Dependent/DependentInterface.php)

## Description

Describes the component in charge of defining a class with explicit dependencies.

## Methods

### __construct()

Dependencies must be passed on construct for this interface.

#### Parameters

1. object `...$namedDependency`

Each named argument value will be assigned to a property of the
same name.

```php
class Dependent Implements DependentInterface
{
     private FooType $foo;
     private BarType $bar;
     // ...
}

new Dependent(foo: $fooInstance, bar: $barInstance);
```

---

### getDependencies()

Declares required dependencies as class name -> property name.

::: tip RETURN
[DependenciesInterface](./DependenciesInterface.md)
:::

---

### assertDependencies()

Asserts that the instance meets all dependencies.

::: danger THROWS
- [LogicException](../../Exceptions/Core/LogicException.md) 
:::

::: tip RETURN
void
:::

---

### dependencies()

Provides access to the dependencies instance.

::: tip RETURN
[DependenciesInterface](./DependenciesInterface.md)
:::

---
