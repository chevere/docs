---
editLink: false
---

# HooksRunnerInterface

`Chevere\Interfaces\Plugin\Plugs\Hooks\HooksRunnerInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Plugin/Plugs/Hooks/HooksRunnerInterface.php)

## Description

Describes the component in charge of running the hooks queue.

## Methods

### run()

Run the registered hooks at the given anchor.

#### Parameters

1. string `$anchor`
2.  `$argument`

::: danger THROWS
- [InvalidArgumentException](../../../../Exceptions/Core/InvalidArgumentException.md) If the $argument type changes.
:::

::: tip RETURN
void
:::

---
