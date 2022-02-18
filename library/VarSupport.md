# VarSupport

The `Chevere/VarSupport` namespace is in charge of providing extra tools for handling variables.

## VarObject

The `Chevere/VarSupport/VarObject` component is in charge of handling an object variable.

### Creating VarObject

```php
use Chevere\VarSupport\VarObject;

$varObject = new VarObject($var);
```

### Assert clonable

Use `assertClonable` to assert if the object variable can be cloned.

```php
$varObject->assertClonable();
```

## VarStorable

The `Chevere/VarSupport/VarStorable` component is in charge of handling a variable that can be stored (state).

A storable variable for Chevere is any PHP variable that can be stored as a string representation. All variable types can be stored in PHP with the exception of type `resource`.

### Creating VarStorable

```php
use Chevere\VarSupport\VarStorable;

$varStorable = new VarStorable($var);
```

### Export

The `toExport` method provides a shortcut for `var_export($var, true)`.

```php
$export = $varStorable->toExport();
```

### Serialize

The `toSerialize` method provides a shortcut for `serialize($var)`.

```php
$serialize = $varStorable->toSerialize();
```
