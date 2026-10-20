---
sidebarDepth: 3
---

# Translate

## Summary

Translator is built on top of [gettext](https://www.gnu.org/software/gettext/) and it provides a set of tools to manage translations in PHP applications.

## Installing

Translate is available through [Packagist](https://packagist.org/packages/chevere/translate) and the repository source is at [chevere/translate](https://github.com/chevere/translate).

```sh
composer require chevere/translate
```

## Quick Start

Mark translatable strings in your code using the [translation functions](#functions).

```php
// /app/src/hello.php
use function Chevere\Translate\__;

echo __('Hello, world!');
```

Extract the strings into a `.po` file, translate it, compile it to PHP and load it at runtime.

```php
use Chevere\Translate\PoMaker;
use Chevere\Translate\TranslatorBuilder;
use Chevere\Translate\TranslatorInstance;
use Chevere\Translate\TranslatorLoader;
use function Chevere\Filesystem\directoryForPath;

$source = directoryForPath('/app/src/');
$locales = directoryForPath('/app/locales/');
$compiled = directoryForPath('/app/compiled/');

// 1. Scan source and create /app/locales/es-CL/messages.po
(new PoMaker('es-CL', 'messages'))
    ->withScanFor($source)
    ->make($locales);

// 2. Translate messages.po using any PO editor

// 3. Compile to /app/compiled/es-CL/messages.php
(new TranslatorBuilder($locales, $compiled))
    ->withBuild('es-CL', 'messages');

// 4. Load the translator and register it
$translator = (new TranslatorLoader())
    ->withLoad($compiled, 'es-CL', 'messages')
    ->translator();
new TranslatorInstance($translator);

echo __('Hello, world!');
// ¡Hola, mundo!
```

Steps 1 to 3 are build-time tasks, only step 4 is needed at runtime.

When using a `domain` files are stored at `{directory}/{locale}/{domain}`. Pass an empty domain to store files at `{directory}/{locale}` instead.

| Domain       | PO file                          | PHP file                           |
| ------------ | -------------------------------- | ---------------------------------- |
| `'messages'` | `/app/locales/es-CL/messages.po` | `/app/compiled/es-CL/messages.php` |
| `''`         | `/app/locales/es-CL.po`          | `/app/compiled/es-CL.php`          |

## PoMaker

PoMaker scans `.php` and `.js` files for translatable strings and generates a [PO file](https://www.gnu.org/software/gettext/manual/html_node/PO-Files.html) for a given locale.

### Create PoMaker

Pass the `locale` and optionally the `domain`. Use `writer` to log the scan progress (defaults to `NullWriter`).

```php
use Chevere\Translate\PoMaker;
use Chevere\Writer\StreamWriter;
use function Chevere\Writer\streamFor;

$poMaker = new PoMaker(
    locale: 'es-CL',
    domain: 'messages',
    writer: new StreamWriter(streamFor('php://stdout', 'w')),
);
```

### Scan directory

Use `withScanFor` to recursively scan a directory. It returns a new instance.

```php
use function Chevere\Filesystem\directoryForPath;

$poMaker = $poMaker->withScanFor(
    directoryForPath('/app/src/')
);
```

By default it scans for `__` and `__n` calls. Use `functions` to map additional function names to its gettext handler. For example, to also extract strings with context and domain, or calls to your own helpers:

```php
$poMaker = $poMaker->withScanFor(
    directory: directoryForPath('/app/src/'),
    functions: [
        '__p' => 'pgettext',
        '__np' => 'npgettext',
        '__d' => 'dgettext',
        '__dn' => 'dngettext',
        '__dp' => 'dpgettext',
        '__dnp' => 'dnpgettext',
        'myTranslate' => 'gettext',
    ],
);
```

Available handlers are `gettext`, `ngettext`, `pgettext`, `npgettext`, `dgettext`, `dngettext`, `dpgettext` and `dnpgettext`.

Strings passed to domain functions are only extracted when their domain matches the PoMaker domain. For example, `__d('admin', 'Dashboard')` is extracted by `new PoMaker('es-CL', 'admin')` but not by `new PoMaker('es-CL', 'messages')`.

### Make PO file

Use `make` to generate the `.po` file at the target directory, which is created if it doesn't exist.

```php
$poMaker->make(
    directoryForPath('/app/locales/')
);
```

`make` overwrites any existing `.po` file at the target path, including translations already in it. Generate into a separate directory and merge the result with your translated files (for example, using [msgmerge](https://www.gnu.org/software/gettext/manual/html_node/msgmerge-Invocation.html)).

Calling `make` before `withScanFor` throws `BadMethodCallException`.

## TranslatorBuilder

TranslatorBuilder compiles `.po` files to `.php` files, which is the format used at runtime by [TranslatorLoader](#translatorloader).

### Create TranslatorBuilder

Pass the `sourceDirectory` containing the `.po` files and the `targetDirectory` for the generated `.php` files. Use `writer` to log the generated files (defaults to `NullWriter`).

```php
use Chevere\Translate\TranslatorBuilder;
use function Chevere\Filesystem\directoryForPath;

$builder = new TranslatorBuilder(
    sourceDirectory: directoryForPath('/app/locales/'),
    targetDirectory: directoryForPath('/app/compiled/'),
);
```

The source directory must exist or `DirectoryNotExistsException` is thrown.

### Build translations

Use `withBuild` to compile the `.po` file for a `locale` and `domain`. It returns a new instance, so calls can be chained.

```php
$builder = $builder
    ->withBuild(locale: 'es-CL', domain: 'messages')
    ->withBuild(locale: 'es-CL', domain: 'admin')
    ->withBuild(locale: 'pt-BR', domain: 'messages');
```

It throws `DirectoryNotExistsException` if the locale directory doesn't exist and `FileNotExistsException` if the `.po` file doesn't exist.

## TranslatorLoader

TranslatorLoader loads compiled `.php` translation files into a [Translator](#translator).

### Load translations

Use `withLoad` to load the translation file for a `locale` and `domain` from a directory. It returns a new instance, so calls can be chained to load multiple domains.

```php
use Chevere\Translate\TranslatorLoader;
use function Chevere\Filesystem\directoryForPath;

$compiled = directoryForPath('/app/compiled/');
$loader = (new TranslatorLoader())
    ->withLoad($compiled, 'es-CL', 'messages')
    ->withLoad($compiled, 'es-CL', 'admin');
```

The first loaded domain becomes the default domain, used by functions that don't take a domain argument.

It throws `DirectoryNotExistsException` if the locale directory doesn't exist and `FileNotExistsException` if the `.php` file doesn't exist.

### Get Translator

Use `translator` to get the Translator.

```php
$translator = $loader->translator();
```

### Translator

Translator extends [gettext/translator](https://github.com/php-gettext/Translator), so it provides all gettext methods such as `gettext`, `ngettext`, `pgettext` and `dgettext`.

```php
$translator->gettext('Hello, world!');
// ¡Hola, mundo!
```

Use `withAdd` to add or override messages at runtime. Messages are indexed by context, with `''` for no context. Plural translations are passed as a list of forms.

```php
$translator = $translator->withAdd(
    messages: [
        '' => [
            'Hello, world!' => '¡Hola, mundo!',
            '%d file' => ['%d archivo', '%d archivos'],
        ],
        'menu' => [
            'Open' => 'Abrir',
        ],
    ],
    pluralForms: 'nplurals=2; plural=(n != 1);',
    domain: 'messages',
);
```

Use `withLoad` to load compiled translation files directly.

```php
use function Chevere\Filesystem\filePhpReturnForPath;

$translator = $translator->withLoad(
    filePhpReturnForPath('/app/compiled/es-CL/messages.php')
);
```

Use `domain`, `dictionary`, `pluralForms` and `toArray` to read the translator state.

## Functions

Translation functions are provided at the `Chevere\Translate` namespace.

### Register Translator

Functions use the Translator registered with `TranslatorInstance`.

```php
use Chevere\Translate\TranslatorInstance;

new TranslatorInstance($translator);
```

If no Translator is registered, functions return the original string. Plural functions return `$singular` when `$count` is `1` and `$plural` otherwise.

Use `translator` to get the registered Translator.

```php
use function Chevere\Translate\translator;

$translator = translator();
```

### Available functions

| Function                                               | Description                                 |
| ------------------------------------------------------ | ------------------------------------------- |
| `__($message)`                                         | Translate a string                          |
| `__n($singular, $plural, $count)`                      | Translate a plural string                   |
| `__p($context, $message)`                              | Translate a string with context             |
| `__np($context, $singular, $plural, $count)`           | Translate a plural with context             |
| `__d($domain, $message)`                               | Translate a string in a domain              |
| `__dn($domain, $singular, $plural, $count)`            | Translate a plural in a domain              |
| `__dp($domain, $context, $message)`                    | Translate a string in a domain with context |
| `__dnp($domain, $context, $singular, $plural, $count)` | Translate a plural in a domain with context |

```php
use function Chevere\Translate\__;
use function Chevere\Translate\__d;
use function Chevere\Translate\__p;

__('Open');
// Abierto
__p('menu', 'Open');
// Abrir
__d('admin', 'Dashboard');
// Panel
```

Functions return the translated string as-is, use [sprintf](https://php.net/sprintf) or [strtr](https://php.net/strtr) to replace placeholders.

```php
use function Chevere\Translate\__n;

$count = 3;
sprintf(__n('%d file', '%d files', $count), $count);
// 3 archivos
```

Remember to pass `__p`, `__np` and domain functions to [PoMaker](#scan-directory) so their strings are extracted.
