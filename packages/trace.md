# Trace

![Trace](../src/packages/trace/trace-logo.svg)

## Summary

Tooling for handling [debug_backtrace](https://www.php.net/manual/en/function.debug-backtrace.php) items.

## Installing

Trace is available through [Packagist](https://packagist.org/packages/chevere/trace) and the repository source is at [chevere/trace](https://github.com/chevere/trace).

```sh
composer require chevere/trace
```

## Creating a Trace

Create a Trace by passing a PHP `debug_backtrace` array and a format object.

```php
use Chevere\Trace\Formats\PlainFormat;
use Chevere\Trace\Trace;

$debugBacktrace = debug_backtrace();
$format = new PlainFormat();
$trace = new Trace($debugBacktrace, $format);
```

## To Array

Use method `toArray` to get an array representation of the formatted trace.

```php
$array = $trace->toArray();
```

## To String

Use method `__toString` to get a string representation of the formatted trace.

```php
$string = $trace->__toString();
```

## Table

Use method `table` to get the array used to translate template keys to values.

```php
$table = $trace->table();
```
