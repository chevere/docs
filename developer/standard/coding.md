# Coding standard

The coding standard ensures cohesive syntax. We have created our own standard which can be automatically implemented in your project.

## Casing

* `PascalCase` for classes and interfaces
* `SCREAMING_SNAKE_CASE` for constants
* `snake_case` for HTTP parameters and database columns
* `camelCase` for everything else

## Code style

Code style is provided using [EasyCodingStandard](https://github.com/symplify/easy-coding-standard), defined in the root `ecs.php` file which extends [ecs-chevere.php](https://github.com/chevere/code-style/blob/main/.ecs/ecs-chevere.php).

## Implementing in your project

Install EasyCodingStandard with Composer:

```sh
composer require symplify/easy-coding-standard --dev
```

### Download code style

Run this to download/update the base code style:

```sh
mkdir -p .ecs && cd .ecs && curl -O https://raw.githubusercontent.com/chevere/code-style/main/.ecs/ecs-chevere.php
```

💡 For **Chevere packages** you can run `composer update-cs`

### `.ecs/ecs.php`

Create your `.ecs/ecs.php` [configuration](https://github.com/symplify/easy-coding-standard#configuration) file by importing the `ecs-chevere.php` file:

```php
<?php

declare(strict_types=1);

use Symplify\EasyCodingStandard\Config\ECSConfig;

return static function (ECSConfig $ecsConfig): void {
    $ecsConfig->import(__DIR__ . '/ecs-chevere.php');
    $ecsConfig->skip([
        __DIR__ . '/vendor/*',
    ]);
};
```

### Custom header comment

Use a plain text file at `.ecs/.header` to define the header comment for your coding standard:

```txt
This file is part of projectName.

(c) My Name <user@email-hostname>

For the full copyright and license information, please view the LICENSE
file that was distributed with this source code.
```

### Format code style

To format code style, run:

```sh
vendor/bin/ecs --config='.ecs/ecs.php' check file.php --fix
```

Check the workspace documentation to configure [automatic code formatting](../environment/workspace.md#coding-standards-formatting).

### Composer commands

Add the following scripts to your `composer.json` file:

```json
{
    "scripts": {
        "cs:update": "mkdir -p .ecs && cd .ecs && curl -O https://raw.githubusercontent.com/chevere/code-style/main/.ecs/ecs-chevere.php",
        "ecs": "vendor/bin/ecs --config='.ecs/ecs.php'",
        "ecs:check": "composer ecs check",
        "ecs:fix": "composer ecs check --fix"
    }
}
```

## Typing

### Type hinting

* All parameters, properties, and return expressions **must** be type hinted

### Errors

Errors **must** be clear and concise, and must be evident where they came from.

* Markdown format
* One (1) line per error

## Code comments

Comments in logic should be used only in the following cases:

* `@codeCoverage` tags
* Type hinting (for example, in loops)

## DocBlocks

DocBlock content should be **short**, **relevant**, and **omit** the obvious.

* Markdown format
* `@param` and `@return` should be avoided (prefer type hinting)
