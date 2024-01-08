# Writer

![Writer](../src/packages/writer/writer-logo.svg)

## Summary

Writer provides tooling for writing to streams.

## Installing

Writer is available through [Packagist](https://packagist.org/packages/chevere/writer) and the repository source is at [chevere/writer](https://github.com/chevere/writer).

```sh
composer require chevere/writer
```

## Streams

### Stream for

Use function `streamFor` to create an stream.

```php
use function Chevere\Writer\streamFor;

$stream = streamFor(
    stream: 'php://temp',
    mode: 'r+'
);
```

### Stream temp

Use function `streamTemp` to create a temp stream (rw+).

```php
use function Chevere\Writer\streamTemp;

$stream = streamTemp($content);
```

## StreamWriter

Use `StreamWriter` to write strings to a stream.

```php
use Chevere\Writer\StreamWriter;
use function Chevere\Writer\streamFor;

$stream = streamFor('php://output', 'r');
$writer = new StreamWriter($stream);
$writer->write('Hello, world!');
```

## NullWriter

Use `NullWriter` when requiring `null` write override.

## Writers

Use `Writers` to interact with pre-defined streams for output, error, debug and log. By default only output and error streams are defined.

| Stream | Default      |
| ------ | ------------ |
| output | StreamWriter |
| error  | StreamWriter |
| debug  | NullWriter   |
| log    | NullWriter   |

```php
use Chevere\Writer\Writers;

$writers = new Writers();
$writers->error();
$writers->debug();
$writers->log();
```

### Output stream

Use `output` to interact with the output stream. Use `withOutput` to set a custom output stream.

```php
$with = $writers->withOutput($stream);
$with->output(); // $stream
```

### Error stream

Use `error` to interact with the error stream. Use `withError` to set a custom error stream.

```php
$with = $writers->withError($stream);
$with->error(); // $stream
```

### Debug stream

Use `debug` to interact with the debug stream. Use `withDebug` to set a custom debug stream.

```php
$with = $writers->withDebug($stream);
$with->debug(); // $stream
```

### Log stream

Use `log` to interact with the log stream. Use `withLog` to set a custom log stream.

```php
$with = $writers->withLog($stream);
$with->log(); // $stream
```
