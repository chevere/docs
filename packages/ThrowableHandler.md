# ThrowableHandler

The **ThrowableHandler** component provides handling for [throwable](https://www.php.net/throwable) with rich formatting support for console, HTML and plain text documents.

👏 With this component you can create multiple exception documents, enabling to generate the document that you will display to end-user, the one for your logs and the one that you may want to see while on development.

## Installing

```sh
composer require chevere/throwable-handler
```

## Handling exceptions

Use the following helpers to quickly handle an exception in different contexts. See [advanced usage](#advanced-usage) for more use strategies.

### handleAsPlain

Use function `Chevere\ThrowableHandler\handleAsPlain` to handle throwables as plain text.

```php
use Chevere\ThrowableHandler\ThrowableHandler;

set_exception_handler(ThrowableHandler::PLAIN);
```

### handleAsConsole

Use function `Chevere\ThrowableHandler\handleAsConsole` to handle throwables as console.

```php
use Chevere\ThrowableHandler\ThrowableHandler;

set_exception_handler(ThrowableHandler::CONSOLE);
```

### handleAsHtml

Use function `Chevere\ThrowableHandler\handleAsHtml` to handle throwables as HTML.

```php
use Chevere\ThrowableHandler\ThrowableHandler;

set_exception_handler(ThrowableHandler::HTML);
```

## Handing errors

Use the following helpers to forward errors as exceptions.

### errorAsException

Use function `Chevere\ThrowableHandler\errorAsException` to handle errors as exceptions.

👉 By doing this the system will throw exception instead of emitting errors.

```php
use Chevere\ThrowableHandler\ThrowableHandler;

set_error_handler(ThrowableHandler::ERROR_AS_EXCEPTION);
```

### shutdownErrorAsException

Use function `Chevere\ThrowableHandler\shutdownErrorAsException` to register errors on shutdown.

👉 This will take care or register errors in shutdown by forwarding the error to the exception handler.

```php
use Chevere\ThrowableHandler\ThrowableHandler;

register_shutdown_function(ThrowableHandler::SHUTDOWN_ERROR_AS_EXCEPTION);
```

## Advanced usage

### Documents

Generate context documents with information about the throwable.

#### Plain

Use `Chevere\ThrowableHandler\plainDocument` to create a plain text document.

```php
use function Chevere\ThrowableHandler\plainDocument;

$document = plainDocument($throwable);
$plain = $document->__toString();
```

#### Console

Use `Chevere\ThrowableHandler\consoleDocument` to create a console document.

```php
use function Chevere\ThrowableHandler\consoleDocument;

$document = consoleDocument($throwable);
$console = $document->__toString();
```

#### HTML

Use `Chevere\ThrowableHandler\htmlDocument` to create an HTML document.

```php
use function Chevere\ThrowableHandler\htmlDocument;

$document = htmlDocument($throwable);
$html = $document->__toString();
```

### Debug

The method `withDebug` in `Chevere\ThrowableHandler\Interfaces\ThrowableHandlerInterface` can be used to toggle debug information on generated documents.

```php
use Chevere\ThrowableHandler\Documents\ThrowableHandlerHtmlDocument;
use function Chevere\ThrowableHandler\throwableHandler;

$handler = throwableHandler($throwable);
$docLoud = new ThrowableHandlerHtmlDocument($handler);
$docSilent = new ThrowableHandlerHtmlDocument(
    $handler->withIsDebug(false)
);
$loud = $docLoud->__toString();
$silent = $docSilent->__toString();
```

For the code above, `$docLoud` contains debug information (Throwable info, file, line, trace and server) while `$docSilent` provides a generic message but referencing to the throwable handled id.

### Muliple documents

💡 Multiple documents and contexts can be used to create a myriad of throwable handler documents.

```php
use Chevere\ThrowableHandler\Documents\ThrowableHandlerConsoleDocument;
use Chevere\ThrowableHandler\Documents\ThrowableHandlerHtmlDocument;
use Chevere\ThrowableHandler\Documents\ThrowableHandlerPlainDocument;
use function Chevere\Writer\writers;

$handler = throwableHandler($throwable);
if (PHP_SAPI === 'cli') {
    $docInternal = new ThrowableHandlerConsoleDocument($handler);
} else {
    $docInternal = new ThrowableHandlerPlainDocument($handler);
    if (!headers_sent()) {
        http_response_code(500);
    }
    $docPublic = new ThrowableHandlerHtmlDocument(
        $handler->withIsDebug(true)
    );
    writers()->output()
        ->write($docPublic->__toString() . "\n");
}
writers()->error()
    ->write($docInternal->__toString() . "\n");
```

For the previous example, if the `PHP_SAPI === 'cli'` it will create a CLI internal document and write it to the error output stream. For `PHP_SAPI !== 'cli'`, it will generate a plain-text internal document and an HTML document (without debug) for displaying to the end-user.
