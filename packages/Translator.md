# Translator

```sh
composer require chevere/translator
```

`🚧 OUTDATED DOCS`

The Translator component is in charge of providing generation and loading for translations.

## How it Works

Translator is built on top of [gettext](https://www.gnu.org/software/gettext/) and it provides a set of [functions](https://github.com/chevere/chevere/blob/main/src/Chevere/Components/Translator/functions.php) that are used to designate translatable strings, which will define a base language translation file which can be used as the base translation for other languages.

::: danger
This implementation **doesn't support** domain-related gettext functions for translatable strings neither follows gettext directory structure.
:::

## Translatable Functions

All translatable [functions](https://github.com/chevere/chevere/blob/main/src/Chevere/Components/Translator/functions.php) are provided at the `Chevere\Translator` namespace.

## Singular

Singular form expressions can be handled with `__` function:

```php
__(message: 'Hi there');
// Hola ahí
```

### Singular formatting

Formatting based on [sprintf](https://php.net/sprintf) is supported with `__f` function:

```php
__f(message: 'Hi %s', $userFirstName);
// Hola Rodolfo
```

### Singular replacement

Replacement based on [strtr](https://php.net/strtr) is supported with `__t` function:

```php
__t(
    message: 'Hi %userFirstName%, %friendName% is now following you!',
    fromTo: [
        '%userFirstName%' => $userFirstName,
        '%friendName%' => $friendName,
    ]
);
// Hola Rodolfo, Bombo Fica ahora te está siguiendo!
```

## Plural

Expressions that depends on the subject number can be handled with `__n`, in which is required to pass singular expression, plural expression and the subject count.

```php
__(
    singular: 'file',
    plural: 'files',
    count: $filesCount
);
```

### Plural formatting

Formatting based on [sprintf](https://php.net/sprintf) is supported with `__nf` function. Passing `count` determines the singular/plural form to use and `$arg` is the actual argument passed to `sprintf`.

```php
__nf(
    singular: '%s file removed',
    plural: '%s files removed',
    count: $filesCount,
    $arg
);
```

### Plural replacement

Replacement based on [strtr](https://php.net/strtr) is supported with `__nt` function:

```php
__nt(
    singular: 'Hi %userFirstName%, %friendName% is now following you!',
    plural: 'Hi %userFirstName%, %friendsNames% are now following you!',
    count: $newFollowersCount,
    fromTo: [
        '%userFirstName%' => $userFirstName,
        '%friendName%' => $friendName,
        '%friendsNames%' => $friendsNamesCommaList,
    ]
);
```

## PoMaker

The [PoMaker](../reference/Chevere/Components/Translator/PoMaker.md) component is in charge of providing generation of translations in [PO File](https://www.gnu.org/software/gettext/manual/html_node/PO-Files.html) format.

### Creating PoMaker

Pass the `locale` and `domain`arguments to construct a PoMaker. For example, to create `messages.po` for Chilean Spanish:

```php
use Chevere\Translator\PoMaker;

$poMaker = new PoMaker(locale: 'es-CL', domain: 'messages');
```

### Scan Directory

Method `withScannerFor` is used to scan a directory for `.php` files with calls for [translatable](#how-it-works) functions.

```php
$poMaker = $poMaker->withScannerFor(sourceDir: $source);
```

### Make file

Method `make` is used to make the `.po` translation file at `{targetDir}/{locale}/{domain}.po` file at the target directory.

```php
$poMaker->make(targetDir: $target);
```

## TranslatorMaker

The [TranslatorMaker](../reference/Chevere/Components/Translator/TranslatorMaker.md) component is in charge of converting from PO File format to PHP, which is the format that will be actually used at runtime.

### Creating TranslatorMaker

Create TranslatorMaker by passing the `sourceDir` to read translation `.po` files, and the `targetDir` desired to store generated `.php` translation files.

```php
use Chevere\Translator\TranslatorMaker;

$translatorMaker = new TranslatorMaker(
    sourceDir: $source,
    targetDir: $target
);
```

### Making PHP Translations

Method `withMakeTranslation` is used to generate the PHP translation file at `{targetDir}/{locale}/{domain}.php`.

```php
use Chevere\Translator\TranslatorMaker;

$translatorMaker = $translatorMaker->withMakeTranslation(
    locale: $locale,
    domain: $domain
);
```

## TranslatorLoader

The [TranslatorLoader](../reference/Chevere/Components/Translator/TranslatorLoader.md) component is in charge of providing a Translator, which provides PHP translations.

### Creating TranslatorLoader

Create a TranslatorLoader by passing the load directory.

```php
use Chevere\Translator\TranslatorLoader;

$translatorLoader = new TranslatorLoader(loadDir: $dir);
```

### Get Translator

The `getTranslator` method allows to get the [Translator](https://github.com/php-gettext/Translator) for the PHP translation file at `{loadDir}/{locale}/{domain}.php`.

```php
$translator = $translatorLoader->getTranslator(
    locale: 'en-US',
    domain: 'message'
);
```

## TranslatorInstance

The [TranslatorInstance](../reference/Chevere/Components/Translator/TranslatorInstance.md) component is in charge of providing a static translator instance.

## Creating TranslatorInstance

A static instance can be provided by creating a new instance:

```php
use Chevere\Translator\TranslatorInstance;

new TranslatorInstance($translator);
```

This will bind `$translator` as the runtime translator service.

## Functions

### getTranslator

Function `getTranslator` allows to get the current registered Translator by [TranslatorInstance](#translatorinstance).

```php
use function Chevere\Translator\getTranslator;

$translator = getTranslator();
```
