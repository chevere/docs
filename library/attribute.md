# Attribute

Namespace `Chevere\Attribute`

The Attribute component is in charge of providing [attributes](https://www.php.net/attribute).

## StringAttribute

The `StringAttribute` attribute provides context for parameters of type `string`, enabling to define a [Regex](regex.md) and a description.

```php
use Chevere\Attribute\StringAttribute;

function mucho(
    #[StringAttribute('/^[0-9]{2}$/')]
    string $id
);

function macho(
    #[StringAttribute('/^\W+$/', 'The name')]
    string $name
);

function man(
    #[StringAttribute(description: 'No time to talk')]
    string $user
);
```
