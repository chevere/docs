# Installation

## System Requirements

* PHP >= 7.4 (will target PHP 8)
* ext-ctype
* ext-ds
* ext-json
* ext-mbstring
* ext-zend-opcache

## Installing

1. Add Chevere as a dependency in your `composer.json` project file.

```json
{
    "repositories": [{
        "type": "vcs",
        "url": "https://github.com/chevere/chevere"
    }],
    "require": {
        "chevere/chevere": "dev-master"
    }
}

```

2. Install the dependencies (requires [Composer](https://getcomposer.org/)).

```sh
composer install
```

The above command will install the dependencies at `vendor/`.

> 👨🏾‍💻 Once installed, you can access the console at `vendor/bin/chevere`

## Now what?

Chevere will now be available project-wide, just make sure to load `vendor/autoload.php` in your scripts.

```php
require 'vendor/autoload.php';
```

From now you can head to [Learn by Example](./learn-by-example.md) and start learning the [Controller](./../components/Controller.md) component.