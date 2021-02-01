# Regex

The [Regex](../reference/Chevere/Components/Regex/Regex.md) component is in charge of providing tooling for regex patterns.

## Creating Regex

Create a new Regex by passing the pattern.

```php
use Chevere\Components\Regex\Regex;

$regex = new Regex(pattern: '/^Hello World!$/');
```

## Accessing Pattern

### As-is (constructor)

The `toString` method is used to access the pattern passed on instance creation.

```php
$regex->toString(); // /^Hello World!$/
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
$regex->match(string: 'Hello World!'); // [Hello World!]
```

The `matchAll` method provides [preg_match_all](https://www.php.net/preg-match-all).

```php
$regex->matchAll(); // Hello World!
```
