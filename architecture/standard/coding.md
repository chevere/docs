# Coding Standard

The coding standard exists as good practice for keeping the source cohesive as possible.

## Casing

* `PascalCase` for classes and interfaces
* `SCREAMING_SNAKE_CASE` for constants
* `camelCase` for everything else

## Code Style

Code style is implemented using [EasyCodingStandard](https://github.com/symplify/easy-coding-standard) defined at the [ecs.php](https://github.com/chevere/chevere/blob/main/ecs.php) file.

::: tip
Check the instructions on [implementing  code style](#implementing-code-style) to get the same styling in your project.
:::

## Implementing Code Style

The repository [chevere/code-style](https://github.com/chevere/code-style) is used to provide the code style configuration files.

### Adding the repository

Run the following command to add `chevere/code-style` repository as `code-style` remote in your project root.

```sh
git remote add code-style git@github.com:chevere/code-style.git
```

### Downloading assets

Fetch the `code-style` remote, this will pull any changes.

```sh
git fetch code-style
```

Then merge `code-style` into your working branch (for example, `main`).

```sh
git merge code-style/main --allow-unrelated-histories
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

## Typing

### Type Hinting

* All parameters, properties and return expressions **should** be type hinted

## Code comments

Comments in logic are ***very*** **discouraged** and it should be used only in the following cases:

* `@codeCoverage` tags
* Type hinting (for example, in loops)

## DocBlocks

DocBlock content should be **short** as possible, **relevant** and **omit** the obvious.

* Use markdown
* `@throws` must be provided for all known exceptions
* `@param` and `@return` should be avoided (prefer typed code)
