# Writer

A Writer is in charge of writing strings to some context and to retrieve the contents written. A Writer is a class implementing `Chevere\Interfaces\Writer\WriterInterface`.

## Writers Container

The class `Chevere\Componets\Writer\Writers` is a service container providing access to `out`, `error`, `debug` and `log` writers.

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

## Concrete writers

### StreamWriter

The [StreamWriter]() is a writer that writes to a stream.

In the example below, a stream factory provides the stream required for `new StreamWriter` and how to achieve the same using `new StreamWriterFromString`.

```php
use Chevere\Components\Writer\StreamWriter;
use Chevere\Components\Writer\StreamWriterFromString;
use Laminas\Diactoros\StreamFactory;
use Psr\Http\Message\StreamInterface;

$stream = (new StreamFactory)->createStream('');
$writer = new StreamWriter($stream);
// Same as:
$writer = new StreamWriterFromString('');
```