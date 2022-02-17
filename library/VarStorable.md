# VarStorable

`🚧 OUTDATED DOCS`

The [VarStorable](../reference/Chevere/Components/VarStorable/VarStorable.md) component is in charge of handling a variable that can be stored (state).

## Storable variables

A storable variable for Chevere is any PHP variable that can be stored as a string representation. All variable types can be stored in PHP with the exception of type `resource`.

## Creating VarStorable

```php
use Chevere\VarStorable\VarStorable;

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
