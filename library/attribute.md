# Attribute

Namespace `Chevere\Attribute`

The Attribute component is in charge of providing [attributes](https://www.php.net/attribute).

## StringRegex

The `StringRegex` attribute provides context for parameters of type `string`, enabling to define a [Regex](regex.md) and a description.

```php
use Chevere\Attribute\StringRegex;

function mucho(
    #[StringRegex('/^[0-9]{2}$/')]
    string $id
);

function macho(
    #[StringRegex('/^\W+$/', 'The name')]
    string $name
);

function man(
    #[StringRegex(description: 'No time to talk')]
    string $user
);
```
