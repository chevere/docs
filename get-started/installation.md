# Installation

## System Requirements

* PHP >= 7.4 (will target PHP 8)
* ext-ctype
* ext-ds
* ext-json
* ext-mbstring
* ext-zend-opcache

## Installing

* Requires [Composer](https://getcomposer.org/)

```sh
composer require chevere/chevere dev-master
```

The above command will install Chevere and its dependencies at `vendor/`.

> 👨🏾‍💻 Once installed, you can access the console at `vendor/bin/chevere`

## Now what?

Chevere will now be available project-wide, just make sure to load `vendor/autoload.php` in your scripts.

```php
require 'vendor/autoload.php';
```

From now you can head to [Learn by Example](./learn-by-example.md) and start learning the [Controller](./../components/Controller.md) component.