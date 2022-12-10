# Regex

Namespace `Chevere\Regex`

The Regex component is in charge of providing tooling for [regular expression](https://en.wikipedia.org/wiki/Regular_expression) (regex) patterns.

## Creating Regex

Create a Regex by passing the pattern.

```php
use Chevere\Regex\Regex;

$regex = new Regex('/^Hello World!$/');
```

## Regex pattern

### As-is (constructor)

The `__toString` method is used to access the pattern passed on instance creation.

```php
$string = $regex->__toString();
// /^Hello World!$/
```

### Without delimiters

The `toNoDelimiters` method is used to access to the regex pattern without delimiters.

```php
$string = $regex->toNoDelimiters();
// ^Hello World!$
```

### Without delimiters and anchors

The `toNoDelimitersNoAnchors` method is used to access to the regex pattern without delimiters and anchors.

```php
$string = $regex->toNoDelimitersNoAnchors();
// Hello World!
```

## Match

The `match` method provides [preg_match](https://www.php.net/preg-match).

```php
$array = $regex->match('Hello World!');
// [Hello World!]
```

## Assert Match

The `assertMatch` method asserts that the string matches. It throws `Exceptions\NoMatchException` when failing to assert.

```php
$regex->assertMatch('Hello World!');
```

## Match All

The `matchAll` method provides [preg_match_all](https://www.php.net/preg-match-all).

```php
$regex->matchAll();
// [Hello World!]
```

## Assert Match All

The `assertMatchAll` method asserts that the string matches all. It throws `Exceptions\NoMatchException` when failing to assert.

```php
$regex->assertMatchAll('Hello World!');
```
