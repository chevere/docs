# Standard

Namespace `Chevere\Standard`

The Standard component provides improvements and alternatives to PHP's standard function library.

## arrayFilterBoth

This function enables to recursive filter an array by key and value. It improves on [array_filter](https://www.php.net/manual/en/function.array-filter.php).

```php
use function Chevere\Standard\arrayFilterBoth;

$array = ['foo', false, -1, null];
$callable = function ($v, $k): bool {
    return match (true) {
        $k === 2 || $v === 'foo' => true,
        default => false,
    };
};
$filter = arrayFilterBoth($array, $callable);
/*
[
    0 => 'foo',
    2 => -1
]
*/
```

## arrayFilterValue

This function enables to recursive filter an array by value. It improves on [array_filter](https://www.php.net/manual/en/function.array-filter.php).

```php
use function Chevere\Standard\arrayFilterValue;

$array = ['foo', false, -1, null];
$callable = function ($v): bool {
    return match (true) {
        $v === 'foo' => true,
        default => false,
    };
};
$filter = arrayFilterValue($array, $callable);
/*
[
    0 => 'foo',
]
*/
```

## arrayFilterKey

This function enables to recursive filter an array by key. It improves on [array_filter](https://www.php.net/manual/en/function.array-filter.php).

```php
use function Chevere\Standard\arrayFilterKey;

$array = ['foo', false, -1, null];
$callable = function ($k): bool {
    return match (true) {
        in_array($k, [0, 3]) => true,
        default => false,
    };
};
$filter = arrayFilterKey($array, $callable);
/*
[
    0 => 'foo',
    3 => null,
]
*/
```

## getBits

This function provides an array of bits (powers of two) for the given integer value.

```php
use function Chevere\Standard\getBits;

$bits = getBits(7);
// [1, 2, 4]
```

## arrayChangeKey

This function enables to change key(s) in an array.

```php
use function Chevere\Standard\arrayChangeKey;

$array = [
    'foo' => 1,
];
$change = arrayChangeKey($array, foo: 'baz');
// ['baz' => 1]
```

## arrayPrefixKeys

This function enables to prefix all keys in an array.

```php
use function Chevere\Standard\arrayPrefixKeys;

$array = [
    'foo' => 1,
];
$prefixed = arrayPrefixKeys($array, 'v.');
// ['v.foo' => 1]
```

## arrayUnsetKey

This function enables to unset key(s) in an array.

```php
use function Chevere\Standard\arrayUnsetKey;

$array = [
    'foo' => 1,
];
$unset = arrayUnsetKey($array, 'foo');
// []
```

## arrayFromKey

This function enables to create a new array by selecting key(s) in an array.

```php
use function Chevere\Standard\arrayFromKey;

$array = [
    'foo' => 1,
    'bar' => 2,
];
$unset = arrayFromKey($array, 'foo');
// ['foo' => 1]
```
