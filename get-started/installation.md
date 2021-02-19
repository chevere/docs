# Installation

## System Requirements

Chevere system requirements can be found in the [composer.json](https://github.com/chevere/chevere/blob/main/composer.json) file.

### PHP

Chevere is built and tested for [unix-like systems](../architecture/development/system.md).

* [PHP 8](https://www.php.net/releases/8.0)
* [ext-ctype](https://www.php.net/ctype)
* [ext-json](https://www.php.net/json)
* [ext-ds](https://www.php.net/ds)
* [ext-mbstring](https://www.php.net/mbstring)
* [ext-zend-opcache](https://www.php.net/opcache)

The [chevere.ini](https://github.com/chevere/chevere/blob/main/chevere.ini) file provides the PHP settings required for Chevere.

## Installing

* Requires [Composer](https://getcomposer.org/)

```sh
composer require chevere/chevere dev-main
```

The above command will install Chevere and its [dependencies](https://github.com/chevere/chevere/blob/main/composer.json) at `vendor/`.

## Now what?

Chevere will now be available project-wide. Make sure to load `vendor/autoload.php` in your entry point:

```php
require 'vendor/autoload.php';
```

From now you can head to [Learn by Example](../developer/examples/repository.md) to pick-up some general idea on what you can do with this. You can also start learning the [Workflow](../components/Workflow.md), [Action](../components/Action.md), [Parameter](../components/Parameter.md) components which will allow you to get a progressive approach into the Chevere realm.

There are also lots of [tests](https://github.com/chevere/chevere/tree/main/tests) to experiment and [run](../architecture/development/workspace.md#running-tests).
