# Installation

## System Requirements

* PHP 8.0
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

## Now what?

Chevere will now be available project-wide, just make sure to load `vendor/autoload.php` in your project.

```php
require 'vendor/autoload.php';
```

From now you can head to [Learn by Example](./learn-by-example.md) to pick-up some general idea on what you can do with this. You can also start learning the [Action](../components/Action.md), [Parameter](../components/Parameter.md) and [Type](../components/Type.md) components which will allow you to get a progressive approach into the Chevere realm.

There are also lots of [tests](https://github.com/chevere/chevere/tree/master/tests) to experiment and [run](../architecture/development/workspace.md#running-tests).
