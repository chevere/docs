# Installation

## System Requirements

💡 Chevere system requirements can be found in the `composer.json` file.

### PHP

Chevere is built and tested for [unix-like systems](../architecture/development/system.md).

* [PHP 8](https://www.php.net/releases/8.0)
* [ext-ctype](https://www.php.net/ctype)
* [ext-json](https://www.php.net/json)
* [ext-ds](https://www.php.net/ds)
* [ext-mbstring](https://www.php.net/mbstring)

The [chevere.ini](https://github.com/chevere/chevere/blob/main/chevere.ini) file provides the PHP settings required for Chevere.

## Installing

* Requires [Composer](https://getcomposer.org/)

```sh
composer require chevere/chevere
```

The above command will install Chevere and its [dependencies](https://github.com/chevere/chevere/blob/main/composer.json) at `vendor/`.

## Now what?

Chevere will be available project-wide. Make sure to load `vendor/autoload.php` in your entry point:

```php
require 'vendor/autoload.php';
```

Once installed you can start using any of the built-in [chevere](../chevere/README.md) components.
