---
editLink: false
---

# PluggableHooksInterface

`Chevere\Interfaces\Plugin\Plugs\Hooks\PluggableHooksInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Plugin/Plugs/Hooks/PluggableHooksInterface.php)

## Description

Describes the interface for components requiring to implement pluggable hooks.

## Methods

### getHookAnchors()

Returns the declared hook anchors able to plug.

::: tip RETURN
[PluggableAnchorsInterface](../../PluggableAnchorsInterface.md)
:::

---

### withHooksRunner()

Return an instance with the specified `$runner`.

#### Parameters

1. [HooksRunnerInterface](./HooksRunnerInterface.md) `$runner`

::: tip RETURN
PluggableHooksInterface
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$runner`.

This method should be implemented in the runtime strategy before running hooks.

---

### hook()

Run hooks for the given anchor (if-any).

#### Parameters

1. string `$anchor`
2.  `$argument`

::: tip RETURN
void
:::

---
