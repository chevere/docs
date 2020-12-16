# Coding Standard

The coding standard exists as good practice for keeping the source cohesive as possible. That way, Chevere removes lots of "ifs" by sticking to its own set of rules.

## Casing

* `PascalCase` for classes and interfaces
* `SCREAMING_SNAKE_CASE` for constants
* `camelCase` for everything else

## Code Style

Code style is implemented using [EasyCodingStandard](https://github.com/symplify/easy-coding-standard) defined at the [ecs.php](https://github.com/chevere/chevere/blob/master/ecs.php) file.

::: tip
Check the instructions on [implementing  code style](#implementing-code-style) to get the same code style on your own project.
:::

### Use Imports

The `use` keyword at the top of the document **must** be used to import all the dependencies. Fully-qualified imports should be avoided in favor of imports and aliases.

```php
// Do:
use Chevere\Components\Message\Message;

new Message('Prefer to import');
```

```php
// Don't:
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

## Implementing Code Style

The repository [chevere/code-style](https://github.com/chevere/code-style) is used to provide the code style configuration files.

### Adding the repository

Run the following command to add `chevere/code-style` repository as `code-style` remote in your project root.W

```sh
git remote add code-style git@github.com:chevere/code-style.git
```

### Downloading assets

Fetch the `code-style` remote, this will pull any changes.

```sh
git fetch code-style
```

Then merge `code-style` into your working branch (for example, `master`).

```sh
git merge code-style/master --allow-unrelated-histories
```

Once done, a `chevere-ecs.php` file will be available in your project root.

### Creating `ecs.php`

You will need to create an `ecs.php` [configuration](https://github.com/symplify/easy-coding-standard#configuration) file in your project root:

```php
<?php
declare(strict_types=1);

use Symfony\Component\DependencyInjection\Loader\Configurator\ContainerConfigurator;
use Symplify\EasyCodingStandard\ValueObject\Option;

return static function (ContainerConfigurator $containerConfigurator): void {
    $containerConfigurator->import(__DIR__ . '/ecs-chevere.php');
    // extra config here
};
```

The code above will import `ecs-chevere.php` configuration, allowing extra configuration depending on your project needs.
