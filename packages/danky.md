# Danky

![Danky](../src/packages/danky/danky-logo.svg)

The `Chevere/Danky` package provides a native PHP template system.

👏 With this package you can create re-usable, strict, highly-testable templates that work as file-functions.

## Installing

Danky is available through [Packagist](https://packagist.org/packages/chevere/danky) and the repository source is at [GitHub](https://github.com/chevere/danky).

```sh
composer require chevere/danky
```

## Templates

A Danky template is a `.php` file returning a closure following this convention:

- Return must be an anonymous function
- Can take any type of argument(s)
- The return type **must** be of type string

💡 In the code below, the return is an string formatted in [Heredoc](https://www.php.net/manual/en/language.types.string.php#language.types.string.syntax.heredoc) syntax. You can also use [Nowdoc](https://www.php.net/manual/en/language.types.string.php#language.types.string.syntax.nowdoc), [double quoted](https://www.php.net/manual/en/language.types.string.php#language.types.string.syntax.double) and [single quoted](https://www.php.net/manual/en/language.types.string.php#language.types.string.syntax.single) string literals.

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

## Import

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

Arguments for Danky functions must be passed to run the function. Lack of any argument will fail to generate the document.

💡 Danky will check for missing variables, and it will emit an exception with the missing variables.

## Extra Features

Danky doesn't has extra features yet, but we are aware of the needs that usually sprout in the presentational layer. At this time we hope that the built-in PHP library will be enough for most use cases. Don't hesitate to [open an issue](https://github.com/chevere/danky/issues/new) if you need extra features.

### Escaping

Danky doesn't provide escaping functionality. You can use the built-in [String Functions](https://www.php.net/manual/en/ref.strings.php) of the standard PHP library.

For example, using [htmlspecialchars](https://www.php.net/manual/en/function.htmlspecialchars.php):

```php
$safe  = htmlspecialchars($string, ENT_QUOTES, 'UTF-8')
```

👉 We encourage you to bring your favorite safe-string package, for example [voku/stringy](https://packagist.org/packages/voku/stringy) or even your own.

### Filtering & Validation

Danky doesn't provide filtering functionality. You can use the built-in [filter_var](https://www.php.net/manual/en/function.filter-var.php) function which provides a myriad of [filters](https://www.php.net/manual/en/filter.filters.php) which can be used for filtering and validation.
