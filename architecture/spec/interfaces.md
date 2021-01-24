# Interfaces Spec

Interfaces describe the public methods implemented by a given class. In Chevere, all components **must** define their own interface.

::: tip Reference
Check thee [Interfaces Reference](./../../reference/interfaces.md) for learn about all the interfaces available.
:::

## Design

### Uniqueness

Each interface should describe a unique public procedure that **may** be implemented by several classes.

This is related to the [SRP](https://en.wikipedia.org/wiki/Single-responsibility_principle) in the way that each API is different, so the interface.

### Typing

Parameters and return types **must** be typed against an scalar or an interface. This is related to [DIP](https://en.wikipedia.org/wiki/Dependency_inversion_principle) as in Chevere everything is programmed with interfaces.

> 🧔🏾 Parameters and return types **must not** be typed against concrete implementations

### Documenting

Dockblock summary **should** be provided at class level, and for every method.

## Conventions

* Must be named with `Interface` suffix
* Must be located at `Interfaces/<component>/`

### Method naming

#### Accessors

Accessors refers to methods that **access to** an object property.

Accessors **must be nouns** and named as the name of the property it retrieves. For example, the method `something` should be used to retrieve the value of `$this->something`.

```php
public function something(): string;
```

> 🧔🏾 Accessors = nouns

#### Actions

Actions refers to when the object must **do something**. These actions could return _anything_ or just `void`.

A verb **should** be prefixed for any given action. For example, `getSome`, `setValue` or `doStuff`.

> 🧔🏾 Actions = verbs

In the example below, we do the evolution.

```php
public function doTheEvolution(): void;
```

#### Immutables

Immutables refers to methods that **returns an altered copy** of the original object.

The `with` prefix is associated with immutables. For example, `withSomething`, `withoutSomething`, `withAddedStuff`, `withRemovedStuff`, etc.

> 🧔🏾 Immutables = with*

More about immutables at [Immutability](./immutability.md).

#### Conditionals

Conditionals refers to methods that **returns boolean**, usually for object flagging.

The `is` prefix is used in methods returning `bool`.

## Implementing interfaces

```php
use Chevere\Exceptions\Core\Exception;
use Chevere\Exceptions\Str\StrEmptyException;
use Chevere\Components\Message\Message;

interface HelloWorldInterface
{
    /**
     * @param string $name Name to greet
     * @return string Will return `Hello, $name!`
     * @throws StrEmptyException
     */
    public function say(string $name): string;
};
```

```php
use Chevere\Components\Str\StrAssert;

class HelloWorld implements HelloWorldInterface
{
    public function say(string $name): string {
        (new StrAssert($name))->notEmpty();

        return "Hello, $name!";
    }
}
```
