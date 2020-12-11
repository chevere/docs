# ThrowableHandler

The ThrowableHandler component provides handling for [throwable](https://www.php.net/manual/en/class.throwable.php) with rich formatting support for console, HTML and plain text.

[ThrowableHandlerInterface](../reference/Chevere/Interfaces/ThrowableHandler/ThrowableHandlerInterface.md) describe the interface for a component in charge of providing a throwable handling.

::: tip Learn by Examples
Check the ThrowableHandler [examples](https://github.com/chevere/examples/tree/master/01.ThrowableHandler) to learn directly playing with code.
:::

## Usage

### Initialization

In the example below, a `ThrowableHandler` object is created by passing a `ThrowableRead` object.

```php
use Chevere\Components\ThrowableHandler\ThrowableHandler;
use Chevere\Components\ThrowableHandler\ThrowableRead;

// $e implements Throwable
$handler = new ThrowableHandler(
    new ThrowableRead($e)
);
```

### Passing debug flag

The debug flag can be passed to alter the document generation. This flag will be used by ThrowableHandler documents, and it defaults to `true`.

```php
$handler = $handler->withIsDebug(false);
```

> 😉 Pass `false` to generate documents that shouldn't disclose sensitive information

### Documents

In the example below, console, HTML and plain throwable documents are created by passing `$handler`.

```php
use Chevere\Components\ThrowableHandler\Documents\ConsoleDocument;
use Chevere\Components\ThrowableHandler\Documents\HtmlDocument;
use Chevere\Components\ThrowableHandler\Documents\PlainDocument;
use Chevere\Interfaces\ThrowableHandler\ThrowableHandler;

/**
 * @var ThrowableHandlerInterface $handler
 */
$console = new ConsoleDocument($handler);
$plain = new PlainDocument($handler);
$html = new HtmlDocument($handler);
```

Use `toString` method to access the document contents. In the example below, the `$console` document is printed to the output.

```php
echo $console->toString() . "\n";
```
