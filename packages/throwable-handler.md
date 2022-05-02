# ThrowableHandler

![ThrowableHandler](../src/packages/throwable-handler/throwable-handler-social-alt.svg)

The `Chevere/ThrowableHandler` package provides handling for [throwable](https://www.php.net/throwable) with rich formatting support for console, HTML and plain text documents.

## Installing

ThrowableHandler is available through [Packagist](https://packagist.org/packages/chevere/throwable-handler) and the repository source is at [GitHub](https://github.com/chevere/throwable-handler).

```sh
composer require chevere/throwable-handler
```

## Errors as exceptions

Use the following helpers to forward errors as exceptions, which will be then handled by ThrowableHandler.

### errorAsException

Use function `ThrowableHandler::ERROR_AS_EXCEPTION` to handle errors as exceptions. By doing this the system will throw exception instead of emitting errors.

```php
use Chevere\ThrowableHandler\ThrowableHandler;

set_error_handler(ThrowableHandler::ERROR_AS_EXCEPTION);
```

### shutdownErrorAsException

Use function `ThrowableHandler::SHUTDOWN_ERROR_AS_EXCEPTION` to register errors on shutdown. This will take care or register errors in shutdown by forwarding the error to the exception handler.

```php
use Chevere\ThrowableHandler\ThrowableHandler;

register_shutdown_function(ThrowableHandler::SHUTDOWN_ERROR_AS_EXCEPTION);
```

## Automatic handling

Use the following helpers to quick handle throwables by registering global handlers.

### Plain handler

Use `ThrowableHandler::PLAIN` to set plain handler for all exceptions.

```php
use Chevere\ThrowableHandler\ThrowableHandler;

set_exception_handler(ThrowableHandler::PLAIN);
```

### Console handler

Use `ThrowableHandler::CONSOLE` to set console handler for all exceptions.

```php
use Chevere\ThrowableHandler\ThrowableHandler;

set_exception_handler(ThrowableHandler::CONSOLE);
```

### HTML handler

Use `ThrowableHandler::HTML` to set console handler for all exceptions.

```php
use Chevere\ThrowableHandler\ThrowableHandler;

set_exception_handler(ThrowableHandler::HTML);
```

## Triggered handling

Use the following helpers to quick handle catches for throwables.

### handleAsPlain

Use function `handleAsPlain` to handle throwable as plain text.

```php
use function Chevere\ThrowableHandler\handleAsPlain;

try {
    // ...
} catch(Throwable $e) {
    handleAsPlain($e);
}
```

### handleAsConsole

Use function `handleAsConsole` to handle throwable as console text.

```php
use function Chevere\ThrowableHandler\handleAsConsole;

try {
    // ...
} catch(Throwable $e) {
    handleAsConsole($e);
}
```

### htmlHandler

Use function `htmlHandler` to handle throwable as HTML.

```php
use function Chevere\ThrowableHandler\htmlHandler;

try {
    // ...
} catch(Throwable $e) {
    htmlHandler($e);
}
```

## Manual handling

### Documents

Generate context documents with information about the throwable.

#### Plain document

Use `plainDocument` to create a plain text document.

```php
use function Chevere\ThrowableHandler\plainDocument;

$document = plainDocument($throwable);
$plain = $document->__toString();
```

Use `Documents\PlainDocument` to create a plain text document by passing its handler.

```php
use Chevere\ThrowableHandler\Documents\PlainDocument;

$handler = throwableHandler($throwable);
$document = new PlainDocument($throwable);
```

#### Console document

Use `consoleDocument` to create a console document.

```php
use function Chevere\ThrowableHandler\consoleDocument;

$document = consoleDocument($throwable);
$console = $document->__toString();
```

Use `Documents\ConsoleDocument` to create a console document by passing its handler.

```php
use Chevere\ThrowableHandler\Documents\ConsoleDocument;

$handler = throwableHandler($throwable);
$document = new ConsoleDocument($throwable);
```

#### HTML document

Use `htmlDocument` to create an HTML document.

```php
use function Chevere\ThrowableHandler\htmlDocument;

$document = htmlDocument($throwable);
$html = $document->__toString();
```

Use `Documents\HtmlDocument` to create a console document by passing its handler.

```php
use Chevere\ThrowableHandler\Documents\HtmlDocument;

$handler = throwableHandler($throwable);
$document = new HtmlDocument($throwable);
```

### Multiple documents

Multiple documents can be created **from the same** handler event:

```php
use Chevere\ThrowableHandler\Documents\ConsoleDocument;
use Chevere\ThrowableHandler\Documents\HtmlDocument;
use Chevere\ThrowableHandler\Documents\PlainDocument;
use function Chevere\ThrowableHandler\throwableHandler;

$handler = throwableHandler($throwable);
$consoleDoc = new ConsoleDocument($handler);
$plainDoc = new PlainDocument($handler);
$htmlDoc = new HtmlDocument($handler);
```

### Debug

The method `withIsDebug` in `ThrowableHandlerInterface` can be used to toggle debug information on generated documents.

```php
use Chevere\ThrowableHandler\Documents\HtmlDocument;
use function Chevere\ThrowableHandler\throwableHandler;

$handler = throwableHandler($throwable);
$docLoud = new HtmlDocument($handler);
$docSilent = new HtmlDocument(
    $handler->withIsDebug(false)
);
```

For the code above, `$docLoud` contains debug information (throwable info, file, line, trace and server) while `$docSilent` provides a generic message but referencing to the throwable handled id.
