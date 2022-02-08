# ThrowableHandler

The [ThrowableHandler](../reference/Chevere/Components/ThrowableHandler/ThrowableHandler.md) component provides handling for [throwable](https://www.php.net/throwable) with rich formatting support for console, HTML and plain text.

::: tip Learn by Example
Check the ThrowableHandler [examples](https://github.com/chevere/examples/tree/main/01.ThrowableHandler) to learn playing with code.
:::

## Initialization

In the example below, a `ThrowableHandler` object is created by passing a [ThrowableRead](../reference/Chevere/Components/ThrowableHandler/ThrowableRead.md).

```php
use Chevere\ThrowableHandler\ThrowableHandler;
use Chevere\ThrowableHandler\ThrowableRead;

$read = new ThrowableRead($e);
$handler = new ThrowableHandler($read);
```

## Debug

The debug flag can be passed to alter the document generation. This flag will be used by ThrowableHandler documents, and it defaults to `true`.

```php
$handler = $handler->withIsDebug(false);
```

> Pass `false` to generate documents that shouldn't disclose sensitive information

## Generating Documents

In the code below console, plain and HTML throwable documents are created by passing `$handler`.

```php
use Chevere\ThrowableHandler\Documents\ConsoleDocument;
use Chevere\ThrowableHandler\Documents\HtmlDocument;
use Chevere\ThrowableHandler\Documents\PlainDocument;
use Chevere\Interfaces\ThrowableHandler\ThrowableHandler;

/**
 * @var ThrowableHandler $handler
 */
$console = new ConsoleDocument($handler);
$plain = new PlainDocument($handler);
$html = new HtmlDocument($handler);
```

Use `toString` method to access the document contents. In the example below, the `$console` document is printed to the output.

```php
echo $console->toString();
```
