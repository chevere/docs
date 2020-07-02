# Coding Standard

The coding standard exists as good practice for keeping the source cohesive as possible. That way, Chevere removes lots of "ifs" by sticking to its own set of rules.

## Casing

In Chevere, we keep it simple:

* `PascalCase` for classes and interfaces
* `SCREAMING_SNAKE_CASE` for constants
* `camelCase` for everything else

## Code Style

Code style is implemented with [PHP-CS-Fixer](https://github.com/FriendsOfPHP/PHP-CS-Fixer), using a `.php_cs.dist` configuration file. The repository [chevere/code-style](https://github.com/chevere/code-style) is used exclusively to provide this file.

> 😉 Our `.php_cs.dist` file allows you to configure your own `.header` comment file

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

DocBlock content should be **short** as possible, **relevant** and **omit** the obvious.

* Use markdown
* `@throws` must be provided for all known exceptions
* `@param` and `@return` should be avoided

### Logic

Comments in logic are ***very*** **discouraged** and it should be used only in the following cases:

* `@codeCoverage` tags
* Type hinting (for example, in loops)