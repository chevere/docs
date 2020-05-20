# Conventions
- [Conventions](#conventions)
  - [Casing](#casing)
  - [General](#general)
    - [Strict types](#strict-types)
    - [Use imports](#use-imports)
  - [Classes](#classes)
    - [Method naming](#method-naming)
      - [Getters](#getters)
      - [Immutables](#immutables)
      - [General actions](#general-actions)

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

### Use imports

The `use` keyword at the top of the document **must** be used to import all the dependencies. Fully-qualified imports should be avoided in favor of imports and aliases.

```php
use Chevere\Components\Message\Message;

new Message('Prefer importing');
```

```php
new Chevere\Components\Message\Message('Instead of fully-qualified');
```

## Classes

Components **must**:

* Have one single responsibility
* Be declared as `final` (prefer composition when possibble)
* Implement [interfaces](./interfaces.md)
* Declare only private or protected properties
* Use nouns for class properties
* Implement immutability
* Avoid code commenting

### Method naming

#### Getters

Getters refers to methods that **access to** an object property.

Getters **must** be named as the name of the property it retrieves. For example, a public method `string` should be used to retrieve the value of `$this->string`.

> 👍 Getters are nouns just like class properties.

```php
public function string(): string;
```

#### Immutables

Immmutable refers to methods that **returns an altered copy** of the original object.

The `with` prefix **must** be used in methods that set something in the object. In the example below the `withString` method sets the value of `$this->string`.

```php
public function withString(string $string): MyInterface;
```

The `without` prefix **must** be used in methods that remove something from the object. In the example below the `withoutString` method unset `$this->string`.

```php
public function withoutString(): MyInterface
```

The `withAdded` and `withoutAdded` prefixes **must** be used in methods working with multiple added values. In the example below the `withAddedString` method will add `$string` at the given position while `withoutAddedString` will remove it.

```php
public function withAddedString(int $pos, string $string): MyInterface;

public function withoutAddedString(int $pos): MyInterface;
```

#### General actions

General actions refers to when we ask the object _to do something_. These actions could return something or just `void`.

A verb **should** be prefixed for any given action. For example, `getSome`, `setValue` or `doStuff`.

> ⚡ The use of a verb indicates that an action will be performed rather than just read a property.

