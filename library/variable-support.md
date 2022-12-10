# VariableSupport

Namespace `Chevere\VariableSupport`

The VariableSupport component is in charge of providing extra tools for handling variables.

## ObjectVariable

The `ObjectVariable` component is in charge of handling an object variable.

### Creating ObjectVariable

```php
use Chevere\VariableSupport\ObjectVariable;

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

A storable variable for Chevere is any PHP variable that can be stored as a string representation. All variable types can be stored in PHP with the exception of type `resource`.

### Creating StorableVariable

```php
use Chevere\VariableSupport\StorableVariable;

$storable = new StorableVariable($var);
$var = $storable->variable();
```

### Export

The `toExport` method provides a shortcut for `var_export($var, true)`.

```php
$string = $storable->toExport();
```

### Serialize

The `toSerialize` method provides a shortcut for `serialize($var)`.

```php
$string = $storable->toSerialize();
```
