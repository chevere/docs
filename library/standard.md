# Standard

Namespace `Chevere\Standard`

The Standard component provides improvements and alternatives to PHP's standard function library.

## arrayFilterBoth

This function improves on [array_filter](https://www.php.net/manual/en/function.array-filter.php). It enables to filter an array by key and value.

## arrayFilterValue

This function improves on [array_filter](https://www.php.net/manual/en/function.array-filter.php). It enables to filter an array by value.

## arrayFilterKey

This function improves on [array_filter](https://www.php.net/manual/en/function.array-filter.php). It enables to filter an array by key.

## getBits

This function provides an array of bits (powers of two) for the given integer value.

```php
$bits = getBits(7);
// [1, 2, 4]
```
