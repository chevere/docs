# Writer

A Writer writes strings to some context. [WriterInterface](../reference/Chevere/Interfaces/Writer/WriterInterface.md) describe the interface for a component in charge of _writing_.

## Writers Container

[WritersInterface](../reference/Chevere/Interfaces/Writer/WritersInterface.md) describes a service container providing access to `out`, `error`, `debug` and `log` writers.

> 🧔🏾 Writers are intended to be used for providing multi-channel output

```php
use Chevere\Components\Writer\Writers;

$writers = new Writers;
```

> 🧞 By default, it populates `out` to `php://stdout (w)` and `error` to `php://stderr (w)` 

Methods `withOut`, `withError`, `withDebug` and `withLog` can be used to specify each writer.

In the example below, the `withDebug` method is used to pass a stream writer for `/var/debug_output` file.

```php
use Chevere\Components\Writer\StreamWriterFromString;

$writers = $writers
    ->withDebug(
        new StreamWriterFromString('/var/debug_output', 'w')
    );
```

## Concrete Writers

### StreamWriter

The `Chevere\Components\Writer\StreamWriter` is a writer that writes to a [stream](https://www.php.net/manual/en/intro.stream.php).

Code below shows how to initiate a `StreamWriter`.

```php
use Chevere\Components\Writer\StreamWriter;
use Laminas\Diactoros\StreamFactory;

$stream = (new StreamFactory)->createStream('');
$writer = new StreamWriter($stream);
$writer->write('write some');
```

A `StreamWriter` can be also created with `StreamWriterFromString`.


```php
use Chevere\Components\Writer\StreamWriterFromString;

$writer = new StreamWriterFromString('');
$writer->write('something else');
```

