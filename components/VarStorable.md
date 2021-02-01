# VarStorable

The [VarStorable](../reference/Chevere/Components/VarStorable/VarStorable.md) component is in charge of handling a storable variable.

## Storable variables

A storable variable for Chevere is any PHP variable that can be stored as a string representation. All variable types can be stored, except type `resource`.

## Creating VarStorable

```php
use Chevere\Components\VarStorable\VarStorable;

$varStorable = new VarStorable(var: $var);
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
