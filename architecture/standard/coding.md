# Coding Standard

The coding standard exists as good practice for keeping the syntax cohesive as possible.

## Casing

* `PascalCase` for classes and interfaces
* `SCREAMING_SNAKE_CASE` for constants
* `camelCase` for everything else

## Code Style

Code style is provided using [EasyCodingStandard](https://github.com/symplify/easy-coding-standard), defined at the [ecs.php](https://github.com/chevere/chevere/blob/main/ecs.php) file, which extends [ecs-chevere.php](https://github.com/chevere/code-style/blob/main/ecs-chevere.php).

## Implement in your project

To implement the code style is simple as get the `ecs-chevere.php` file then create your own `ecs.php` file inheriting the base defined by Chevere.

### Installing assets

Install ECS with composer.

```sh
composer require symplify/easy-coding-standard --dev
```

Install [chevere/code-style](https://github.com/chevere/code-style) remote repository as `code-style` in your project root using GIT.

```sh
git remote add code-style git@github.com:chevere/code-style.git
```

### `ecs.php`

You will need to create an `ecs.php` [configuration](https://github.com/symplify/easy-coding-standard#configuration) file in your project root.

```php
<?php // ecs.php

declare(strict_types=1);

use Symfony\Component\DependencyInjection\Loader\Configurator\ContainerConfigurator;

return static function (ContainerConfigurator $containerConfigurator): void {
    $containerConfigurator->import(__DIR__ . '/ecs-chevere.php');
    // extra config here
};
```

### Retrieving assets

Fetch `code-style` to download the `ecs-chevere.php` file (or any of its changes).

```sh
git fetch code-style
```

Merge `code-style` changes into your working branch (for example, `main`).

```sh
git merge code-style/main --allow-unrelated-histories
```

✔ The `chevere-ecs.php` file will be available in your project root, repeat fetch & merge to keep it updated.

### Custom header comment

Use a file named `.header` in your project root to define the header comment for your `.php` files.

:::tip Example
Use the following contents as an example for your project.
:::

```txt
This file is part of projectName.

(c) My Name <user@email-hostname>

For the full copyright and license information, please view the LICENSE
file that was distributed with this source code.
```

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
