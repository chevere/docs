# Installation

> ⚠ This is just for future reference as the package `chevere/chevere` is still not available

## System Requirements

* PHP >= 7.4 (will target PHP 8)
* ext-ctype
* ext-ds
* ext-json
* ext-mbstring
* ext-zend-opcache

## Installing

To use Chevere you need add it as a dependency for your project.

```shell
composer require chevere/chevere
```

The above command will add `chevere/chevere` to the project `composer.json` file and build the dependencies at `vendor/`.

> 👨🏾‍💻 Once installed, you can access the console at `vendor/bin/chevere`

## Now what?

Once installed Chevere will be available project-wide. Just make sure to load `vendor/autoload.php` in your scripts.

```php
require 'vendor/autoload.php';
```

From now you can head to [Learn by Example](./learn-by-example.md) and start with [Controller](./../components/Controller.md) and [Plugin](./../components/Plugin.md) components.