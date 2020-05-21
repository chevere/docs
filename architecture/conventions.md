# Conventions
- [Conventions](#conventions)
  - [Introductions](#introductions)
  - [Casing](#casing)
  - [General](#general)
    - [Strict types](#strict-types)
    - [Code Style](#code-style)
    - [Use imports](#use-imports)
  - [Components](#components)

## Introductions

Conventions exists as good practice for keeping the source cohesive as possible. That way, Chevere removes lots of "ifs" by sticking to its own standards.

## Casing

In Chevere, we keep it simple:

* `PascalCase` for classes and interfaces
* `SCREAMING_SNAKE_CASE` for constants
* `camelCase` for everything else

## General

### Strict types

To declare strict types is a **must**.

```php
declare(strict_types=1);
```

### Code Style

Code style is defined at `.php_cs.dist`

> 😘 You can use it to let your IDE automatically format on save

### Use imports

The `use` keyword at the top of the document **must** be used to import all the dependencies. Fully-qualified imports should be avoided in favor of imports and aliases.

```php
use Chevere\Components\Message\Message;

new Message('Prefer to import');
```

```php
new Chevere\Components\Message\Message('...Instead of fully-qualified');
```

## Components

All components must follow the [Interfaces](./interfaces.md), [Exceptions](./exceptions.md) and [Tests](./tests.md) spec. On top of that, components have the following conventions.

Components **must**:

* Have one single responsibility
* Avoid code comments as possible
* Name properties as nouns
* Declare private/protected properties only
* Prefer composition when possible

Components **should**:

* Prefer to implement immutability
* Provide their own namespaced exceptions
* Prefer to use data structures and `Generators` instead of `array`