# Regex

The Regex component is in charge of providing tooling for regex patterns.

## Creating Regex

Create a Regex by passing the pattern.

```php
use Chevere\Regex\Regex;

$regex = new Regex('/^Hello World!$/');
```

## Accessing Pattern

### As-is (constructor)

The `__toString` method is used to access the pattern passed on instance creation.

```php
$regex->__toString(); // /^Hello World!$/
```

### Without delimiters

The `toNoDelimiters` method is used to access to the regex pattern without delimiters.

```php
$regex->toNoDelimiters(); // ^Hello World!$
```

### Without delimiters and anchors

The `toNoDelimitersNoAnchors` method is used to access to the regex pattern without delimiters and anchors.

```php
$regex->toNoDelimitersNoAnchors(); // Hello World!
```

## String matching

The `match` method provides [preg_match](https://www.php.net/preg-match).

```php
$regex->match('Hello World!'); // [Hello World!]
```

The `matchAll` method provides [preg_match_all](https://www.php.net/preg-match-all).

```php
$regex->matchAll(); // Hello World!
```

## Attributes

## RegexAttribute

The `Chevere\Regex\Attribute\RegexAttribute` attribute enables to define a matching regex anywhere attributes are supported.