# Interfaces
- [Interfaces](#interfaces)
  - [Introduction](#introduction)
  - [Design decisions](#design-decisions)
    - [Typing](#typing)
    - [Documenting](#documenting)
  - [Conventions](#conventions)
  - [Implementing interfaces](#implementing-interfaces)

## Introduction

Interfaces describe the public methods implemented by a given class. In Chevere, all components *must* define their own interfaces.

> 👍 Chevere interfaces are located at [Chevere\Interfaces]() namespace.

## Design decisions

### Typing

Parameters and return types **must** be typed against an scalar or an interface. This is related to [DIP](https://en.wikipedia.org/wiki/Dependency_inversion_principle) as in Chevere everything is programmed with interfaces.

> 🧔 Parameters and return types **must not** be typed against concrete implementations

### Documenting

Documentation for public method parameters, return and thrown exceptions **must** be on the interface. Classes implementing interfaces will automatically inherith the documentation.

> 🧐 Concrete implementations **should** contain next-to zero comments

## Conventions

* Must be named with `Interface` suffix

## Implementing interfaces

```php
<?php

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
<?php

use Chevere\Components\Str\StrAssert;

class HelloWorld implements HelloWorldInterface
{
    public function say(string $name): string {
        (new StrAssert($name))->notEmpty();

        return "Hello, $name!";
    }
}
```