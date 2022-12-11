# Danky

![Danky](../src/packages/danky/danky-logo.svg)

Namespace `Chevere\Danky`

The Danky package provides a typed PHP template system.

👏 With this package you can create re-usable, strict, highly-testable templates that work as classes.

::: tip 💡 Danky introduction
 Read [Danky, typed templates for PHP](https://rodolfoberrios.com/2022/04/17/danky-typed-templates-php/) at Rodolfo's blog for a compressive introduction to this package.
:::

## Installing

Danky is available through [Packagist](https://packagist.org/packages/chevere/danky) and the repository source is at [GitHub](https://github.com/chevere/danky).

```sh
composer require chevere/danky
```

## Templates

A Danky template is a class extending **Template**:

💡 In the code below, the return is an string formatted in [Heredoc](https://www.php.net/manual/en/language.types.string.php#language.types.string.syntax.heredoc) syntax. You can also use [Nowdoc](https://www.php.net/manual/en/language.types.string.php#language.types.string.syntax.nowdoc), [double quoted](https://www.php.net/manual/en/language.types.string.php#language.types.string.syntax.double) and [single quoted](https://www.php.net/manual/en/language.types.string.php#language.types.string.syntax.single) string literals.

```php
<?php // Quote.php

use Chevere\Danky\Template;

class Quote extends Template
{
    public function __construct(string $text, string $author) {
        $this->render =
            <<<HTML
            <quote>"$text" --$author</quote>
            HTML;
    }
};
```

Templates must assign the `$render` property, which accepts `string` and `Template` types. When needing to render the template is easy as:

```php
<?php
echo
    new Quote(
        text: 'Hello, world!',
        author: 'Rodolfo'
    );
```

Which echoes:

```html
<quote>"Hello, world!" --Rodolfo</quote>
```

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
