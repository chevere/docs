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

1. mixed `$namedDependency`

Each named argument value will be assigned to a property of the
same name.

```php
class Dependent Implements DependentInterface
{
     private FooType $foo;
     private BatType $bar;
     // ...
}

new Dependent(foo: $fooInstance, bar: $barInstance);
```

---

### getDependencies()

Declares required dependencies as class name -> property name.

::: tip RETURN
[ClassMapInterface](../ClassMap/ClassMapInterface.md)
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
