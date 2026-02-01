# VarSupport

## Summary

Extra tools for handling variables.

## Installing

VarSupport is available through [Packagist](https://packagist.org/packages/chevere/var-support) and the repository source is at [chevere/var-support](https://github.com/chevere/var-support).

```sh
composer require chevere/var-support
```

## ObjectVariable

The `ObjectVariable` component is in charge of handling an object variable.

### Creating ObjectVariable

```php
use Chevere\VarSupport\ObjectVariable;

$object = new ObjectVariable($var);
$var = $object->variable();
```

### Assert clonable

Use `assertClonable` to assert if the object variable can be cloned.

```php
$boolean = $object->assertClonable();
```

## StorableVariable

The `StorableVariable` component is in charge of handling a variable that can be stored (state).

A storable variable for Chevere is any PHP variable that can be stored as a string representation. All variable types can be stored with the exception of type `resource`.

### Creating StorableVariable

```php
use Chevere\VarSupport\StorableVariable;

$storable = new StorableVariable($var);
$var = $storable->variable();
```

### Export

The `toExport` method exports the variable, this return value should be used when creating a file return.

```php
$export = $storable->toExport();
file_put_contents(
    'file-return.php',
    '<?php return '.$export.';'
);
```

### Serialize

The `toSerialize` method provides a shortcut for `serialize($var)`.

```php
$string = $storable->toSerialize();
```
