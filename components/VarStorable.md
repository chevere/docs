# VarStorable

The VarStorable component is in charge of handling a storable variable.

[VarStorableInterface](../reference/Chevere/Interfaces/VarStorable/VarStorableInterface.md) describes the interface for the component in charge of defining a VarStorable.

## Storable variables

A storable variable for Chevere is any PHP variable that can be stored as a string representation. Almost all variable types can be stored, except type `resource`.

## Creating VarStorable

```php
use Chevere\Components\VarStorable\VarStorable;

$varStorable = new VarStorable($var);
```

## Export

The `toExport` method provides a shortcut for `var_export($var, true)`.

```php
/**
 * @var string $export
 */
$export = $varStorable->toExport();
```

## Serialize

The `toSerialize` method provides a shortcut for `serialize($var)`.

```php
/**
 * @var string $serialize
 */
$serialize = $varStorable->toSerialize();
```
