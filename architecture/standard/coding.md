# Coding Standard

The coding standard exists as good practice for keeping the syntax cohesive as possible.

## Casing

* `PascalCase` for classes and interfaces
* `SCREAMING_SNAKE_CASE` for constants
* `camelCase` for everything else

## Code Style

Code style is provided using [EasyCodingStandard](https://github.com/symplify/easy-coding-standard), defined at the [ecs.php](https://github.com/chevere/chevere/blob/main/.ecs/ecs.php) file, which extends [ecs-chevere.php](https://github.com/chevere/code-style/blob/main/.ecs/ecs-chevere.php).

## Implementing in your project

Install EasyCodingStandard with composer.

```sh
composer require symplify/easy-coding-standard --dev
```

Install [chevere/code-style](https://github.com/chevere/code-style) remote repository as `code-style` in your project root. This will provide the `.ecs/` directory.

```sh
git remote add code-style https://github.com/chevere/code-style.git
```

### Retrieving assets

Fetch `code-style` to download/update the base styling.

```sh
git fetch code-style
```

Merge `code-style` changes into your working branch (for example, `main`).

```sh
git merge code-style/main --allow-unrelated-histories
```

### `.ecs/ecs.php`

* Create your `.ecs/ecs.php` [configuration](https://github.com/symplify/easy-coding-standard#configuration) file by importing the `ecs-chevere.php` file.

```php
<?php // ecs.php

declare(strict_types=1);

use Symfony\Component\DependencyInjection\Loader\Configurator\ContainerConfigurator;

return static function (ContainerConfigurator $containerConfigurator): void {
    $containerConfigurator->import(__DIR__ . '/ecs-chevere.php');
    // extra config here
};
```

### Custom header comment

Use a plain text file at `.ecs/.header` to define the header comment for your coding standard.

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
