# Installation

## System Requirements

💡 Chevere system requirements can be found in the `composer.json` file.

### PHP

Chevere is built and tested for [unix-like systems](../developer/environment/system.md#operating-system).

* [PHP 8](https://www.php.net/releases/8.0)

The [chevere.ini](https://github.com/chevere/chevere/blob/main/chevere.ini) file provides the PHP settings required for Chevere.

## Installing

* Requires [Composer](https://getcomposer.org/)

```sh
composer require chevere/chevere
```

The above command will install Chevere and its dependencies at `vendor/`.

## Now what?

Chevere will be available project-wide. Make sure to load `vendor/autoload.php` in your entry point:

```php
require 'vendor/autoload.php';
```

Once installed you can start using any of the built-in [components](../library/README.md).
