# Writer

The `Chevere/Writer` namespace provides components that interact with output, error, debug and log streams.

A writer is defined by the `Chevere/Writer/Interfaces/WriterInterface`.

## Writers

The `Chevere/Writer/Writers` component describes a service container providing access to `output`, `error`, `debug` and `log` writers.

```php
use Chevere\Writer\Writers;

$writers = new Writers();
$output = $writers->output(); // streamTemp
$error = $writers->error(); // streamTemp
```

Methods [withOutput](#withoutput), [withError](#witherror), [withDebug](#withdebug) and [withLog](#withlog) can be used to specify each writer stream.

### withOutput

Output is the channel used for writing when no error happens.

```php
use Chevere\Writer\StreamWriter;
use function Chevere\Writer\streamFor;

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
use Chevere\Writer\StreamWriter;
use function Chevere\Writer\streamFor;

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
use Chevere\Writer\StreamWriter;
use function Chevere\Writer\streamFor;

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
use Chevere\Writer\StreamWriter;
use function Chevere\Writer\streamFor;

$writers = $writers
    ->withLog(
        writer: new StreamWriter(
            streamFor('/var/debug/error', 'w')
        )
    );
```

## Concrete Writers

### StreamWriter

The `Chevere/Writer/StreamWriter` component is in charge of writing strings to a stream.

```php
use Chevere\Writer\StreamWriter;
use function Chevere\Writer\streamForString;

$writer = new StreamWriter(
    stream: streamForString('given string')
);
$writer->write('write some');
```

### Streams

Use function `Chevere\Writer\streamFor` to create an stream.

```php
use function Chevere\Writer\streamFor;

$stream = streamFor('php://temp', mode: 'r+');
```

Use function `Chevere\Writers\streamTemp` to create a temp stream (r+).

```php
use function Chevere\Writer\streamTemp;

$stream = streamTemp($content);
```
