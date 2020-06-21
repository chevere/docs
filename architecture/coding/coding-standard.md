# Coding Standard

The coding standard exists as good practice for keeping the source cohesive as possible. That way, Chevere removes lots of "ifs" by sticking to its own set of rules.

## Casing

In Chevere, we keep it simple:

* `PascalCase` for classes and interfaces
* `SCREAMING_SNAKE_CASE` for constants
* `camelCase` for everything else

## Code Style

Code style is defined at [`.php_cs.dist`]()

> 😘 You can use it to let your IDE automatically format on save

### Use Imports

The `use` keyword at the top of the document **must** be used to import all the dependencies. Fully-qualified imports should be avoided in favor of imports and aliases.

```php
use Chevere\Components\Message\Message;

new Message('Prefer to import');
```

```php
new Chevere\Components\Message\Message('...Instead of fully-qualified');
```

## Typing

### Strict Types

To declare strict types is a **must**.

```php
declare(strict_types=1);
```

### Type Hinting

* All parameters, properties and return expressions **should** be type hinted
* Objects **should** be typed against its interface

## Comments

### DocBlocks

DocBlock comments in signatures should be **short** as possible, **relevant** and **omit** the obvious.

* `@param` and `@return` should be used only if is required to provide more context
* `@throws` must be provided for all applicable exceptions

### Logic

Comments in logic are **discouraged** and it should be used only in the following cases:

* `@codeCoverage` tags
* Type hinting (for example, in a loop)
* Warn about a critical situation