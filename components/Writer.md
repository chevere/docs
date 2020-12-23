# Writer

The Writer component is in charge of writing strings to some context, specially streams. [WriterInterface](../reference/Chevere/Interfaces/Writer/WriterInterface.md) describe the interface for a component in charge of writing.

::: tip Learn by Example
Check the Writer [example](https://github.com/chevere/examples/tree/master/00.HelloWorld#01writerphp) to learn directly playing with code.
:::

## Writers Container

[WritersInterface](../reference/Chevere/Interfaces/Writer/WritersInterface.md) describes a service container providing access to `out`, `error`, `debug` and `log` writers.

> 🧔🏾 Writers are intended to be used for providing multi-channel output

```php
use Chevere\Components\Writer\Writers;

$writers = new Writers;
```

> 🧞 By default, it populates `out` and `error` to two different temp streams`.

Methods `withOut`, `withError`, `withDebug` and `withLog` can be used to specify each writer.

In the example below, the `withDebug` method is used to pass a stream writer for `/var/debug_output` file.

```php
use Chevere\Components\Writer\StreamWriter;
use function Chevere\Components\Writer\streamFor;

$writers = $writers
    ->withDebug(
        new StreamWriter(
            streamFor('/var/debug_output', 'w')
        )
    );
```

## Concrete Writers

### StreamWriter

The `Chevere\Components\Writer\StreamWriter` is a writer that writes to a [stream](https://www.php.net/stream).

Code below shows how to initiate a `StreamWriter` for a `given string`.

```php
use Chevere\Components\Writer\StreamWriter;
use function Chevere\Components\Writer\streamForString;

$stream = streamForString('given string');
$writer = new StreamWriter($stream);
$writer->write('write some');
```
