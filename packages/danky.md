# Danky

![Danky](../src/packages/danky/danky-logo.svg)

The `Chevere/Danky` package provides a native PHP template system.

👏 With this package you can create re-usable, strict, highly-testable templates that work as file-functions.

## Installing

Danky is available through [Packagist](https://packagist.org/packages/chevere/danky) and the repository source is at [GitHub](https://github.com/chevere/danky).

```sh
composer require chevere/danky
```

## Danky template

A Danky template is a `.php` file returning a closure following this convention:

- Return must be an anonymous function
- Can take any type of argument(s)
- The return type **must** be of type string

💡 In the code below, the return is an string formatted in [Heredoc](https://www.php.net/manual/en/language.types.string.php#language.types.string.syntax.heredoc) syntax. You can also use [Nowdoc](https://www.php.net/manual/en/language.types.string.php#language.types.string.syntax.nowdoc), [double quoted](https://www.php.net/manual/en/language.types.string.php#language.types.string.syntax.double) and [single quoted](https://www.php.net/manual/en/language.types.string.php#language.types.string.syntax.single) string representations.

```php
<?php // h1.php

return function(string $text): string {
    return
        <<<HTML
        <h1 class="scream">
            $text
        </h1>
        HTML;
};
```

## Danky import

The `import` function runs a Danky template and it returns its evaluated value. To import a template pass its [path](#path) and its required [arguments](#arguments).

```php
<?php // view.php

use Chevere\Danky\import;

$h1 = import('h1', text: 'Danky!');
```

Generated string at `$h1`:

```html
<h1 class="scream">
    Danky!
</h1>
```

### Path

Danky paths for `import` can be absolute or relative and it also supports to pass path **shorthands**.

💡 Don't need to pass trailing `.php` - it gets auto-added.

| Shorthand | Same as         |
| --------- | --------------- |
| h1        | ./h1.php        |
| folder/h1 | ./folder/h1.php |

### Arguments

Arguments for Danky functions must be passed to run the function.

💡 Danky will check for missing variables, and it will emit an exception with the missing variables.
