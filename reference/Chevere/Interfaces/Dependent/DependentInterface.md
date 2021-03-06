---
editLink: false
---

# DependentInterface

`Chevere\Interfaces\Dependent\DependentInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/Dependent/DependentInterface.php)

## Description

Describes the component in charge of defining a class with explicit dependencies.

## Methods

### withDependencies

Dependencies must be passed on construct for this interface.

::: warning Parameters
- *...namedDependency*: object
:::

::: tip Return
void
:::

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

### getDependencies

Declares required dependencies as class name -> property name.

::: tip Return
[DependenciesInterface](./DependenciesInterface.md)
:::

---

### assertDependencies

Asserts that the instance meets all dependencies.

::: danger Throws
- [LogicException](../../Exceptions/Core/LogicException.md) 
:::

::: tip Return
void
:::

---

### dependencies

Provides access to the dependencies instance.

::: tip Return
[DependenciesInterface](./DependenciesInterface.md)
:::

---
