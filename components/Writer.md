# Writer

The [WriterInterface](../reference/Chevere/Interfaces/Writer/WriterInterface.md) describes the interface for a component in charge of writing strings to streams.

::: tip Learn by Example
Check the Writer [example](https://github.com/chevere/examples/tree/main/00.HelloWorld#01writerphp) to learn directly playing with code.
:::

## Writers Container

The [Writers](../reference/Chevere/Components/Writer/Writers.md) component describes a service container providing access to `out`, `error`, `debug` and `log` writers.

```php
use Chevere\Components\Writer\Writers;

$writers = new Writers();
```

By default, it populates `out` and `error` to two temp streams`. Methods [withOutput](#withoutput), [withError](#witherror), [withDebug](#withdebug) and [withLog](#withlog) can be used to specify each writer stream.

### withOutput

Output is the channel used for writing when no error happens.

```php
use Chevere\Components\Writer\StreamWriter;
use function Chevere\Components\Writer\streamFor;

$writers = $writers
    ->withOutput(
        writer: new StreamWriter(
            streamFor('/var/debug/output', 'w')
        )
    );
```

### withError

Error is the channel for writing when some error happens.

```php
use Chevere\Components\Writer\StreamWriter;
use function Chevere\Components\Writer\streamFor;

$writers = $writers
    ->withError(
        writer: new StreamWriter(
            streamFor('/var/debug/error', 'w')
        )
    );
```

### withDebug

Debug is the channel for writing debug information.

```php
use Chevere\Components\Writer\StreamWriter;
use function Chevere\Components\Writer\streamFor;

$writers = $writers
    ->withDebug(
        writer: new StreamWriter(
            streamFor('/var/debug/error', 'w')
        )
    );
```

### withLog

Log is the channel for writing log information.

```php
use Chevere\Components\Writer\StreamWriter;
use function Chevere\Components\Writer\streamFor;

$writers = $writers
    ->withLog(
        writer: new StreamWriter(
            streamFor('/var/debug/error', 'w')
        )
    );
```

## Concrete Writers

### StreamWriter

The [StreamWriter](../reference/Chevere/Components/Writer/StreamWriter.md) component is in charge of writing strings to a [stream](https://www.php.net/stream).

Code below shows how to initiate a `StreamWriter` for a `given string`.

```php
use Chevere\Components\Writer\StreamWriter;
use function Chevere\Components\Writer\streamForString;

$writer = new StreamWriter(
    stream: streamForString('given string')
);
$writer->write('write some');
```
