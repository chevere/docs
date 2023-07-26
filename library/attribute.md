# Attribute

Namespace `Chevere\Attribute` & `Chevere\Attribute`

Chevere provides [attributes](https://www.php.net/attribute) which are used to provide extra context to several symbols.

## Description

The `Description` attribute enables to define something. use `getDescription` to read this attribute.

```php
use Chevere\Attributes\Regex;

function myFunction(
    #[Regex('/^[0-9]{2}$/')]
    #[Description('Two digits')]
    string $id
): void {
    // ..
}

class MyAction {
    public function run(
        #[Regex('/^\w+$/')]
        #[Description('Any word character')]
        string $name
    ): array
    {
        // ...
    }
}
```

## Regex

The `Regex` attribute enables to define [Regex](regex.md) for parameters of type `string`.

```php
use Chevere\Attributes\Regex;

function myFunction(
    #[Regex('/^[0-9]{2}$/')]
    string $id
): void {
    // ..
}

class MyAction {
    public function run(
        #[Regex('/^\w+$/')]
        string $name
    ): array
    {
        // ...
    }
}
```

## Attribute tools

💡 At namespace `Chevere\Attribute` you can find tooling for working with attributes.

### hasAttribute

Use function `hasAttribute` to determine if a reflection has an attribute.

```php
use function Chevere\Attribute\hasAttribute;

$boolean = hasAttribute($reflection, 'AttributeName');
```

### getAttribute

Use function `getAttribute` to get an attribute.

```php
use function Chevere\Attribute\getAttribute;

$attribute = getAttribute($reflection, 'AttributeName');
```

### getDescription

Use function `getDescription` to get a [Description](#description) attribute.

```php
use function Chevere\Attribute\getDescription;

$attribute = getDescription($reflection, 'AttributeName');
```

### getRegex

Use function `getRegex` to get a [Regex](#regex) attribute.

```php
use function Chevere\Attribute\getRegex;

$attribute = getRegex($reflection, 'AttributeName');
```## Tools

💡 At namespace `Chevere\Attribute` you can find tooling for working with attributes.

### hasAttribute

Use function `hasAttribute` to determine if a reflection has an attribute.

```php
use function Chevere\Attribute\hasAttribute;

$boolean = hasAttribute($reflection, 'AttributeName');
```

### getAttribute

Use function `getAttribute` to get an attribute.

```php
use function Chevere\Attribute\getAttribute;

$attribute = getAttribute($reflection, 'AttributeName');
```

### getDescription

Use function `getDescription` to get a [Description](#description) attribute.

```php
use function Chevere\Attribute\getDescription;

$attribute = getDescription($reflection, 'AttributeName');
```

### getRegex

Use function `getRegex` to get a [Regex](#regex) attribute.

```php
use function Chevere\Attribute\getRegex;

$attribute = getRegex($reflection, 'AttributeName');
```
