# Writer

Namespace `Chevere\Writer`

The Writer component provides components that interact with output, error, debug and log streams.

A Writer is defined by the `Interfaces\WriterInterface`.

## Writers

The `Writers` component describes a service container providing access to `output`, `error`, `debug` and `log` writers.

```php
use Chevere\Writer\Writers;

$writers = new Writers();
$output = $writers->output();
$error = $writers->error();
```

Methods [withOutput](#withoutput), [withError](#witherror), [withDebug](#withdebug) and [withLog](#withlog) can be used to specify each writer stream.

### withOutput

Output is the channel used for writing output.

```php
use Chevere\Writer\StreamWriter;
use function Chevere\Writer\streamFor;

$writers = $writers
    ->withOutput(
        writer: new StreamWriter(
            streamFor('/var/stream/output', 'w')
        )
    );
```

### withError

Error is the channel for writing errors.

```php
use Chevere\Writer\StreamWriter;
use function Chevere\Writer\streamFor;

$writers = $writers
    ->withError(
        writer: new StreamWriter(
            streamFor('/var/stream/error', 'w')
        )
    );
```

### withDebug

Debug is the channel for writing debug.

```php
use Chevere\Writer\StreamWriter;
use function Chevere\Writer\streamFor;

$writers = $writers
    ->withDebug(
        writer: new StreamWriter(
            streamFor('/var/stream/debug', 'w')
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
            streamFor('/var/stream/log', 'w')
        )
    );
```

## StreamWriter

The `StreamWriter` component is in charge of writing strings to a stream.

```php
use Chevere\Writer\StreamWriter;
use function Chevere\Writer\streamForString;

$writer = new StreamWriter(
    stream: streamForString('given string')
);
$writer->write('write some');
```

### Streams

Use function `streamFor` to create an stream.

```php
use function Chevere\Writer\streamFor;

$stream = streamFor(
    stream: 'php://temp',
    mode: 'r+'
);
```

Use function `streamTemp` to create a temp stream (rw+).

```php
use function Chevere\Writer\streamTemp;

$stream = streamTemp($content);
```
