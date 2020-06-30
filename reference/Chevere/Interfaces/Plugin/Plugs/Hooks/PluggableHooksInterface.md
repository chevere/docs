---
editLink: false
---

# PluggableHooksInterface

`Chevere\Interfaces\Plugin\Plugs\Hooks\PluggableHooksInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Plugin/Plugs/Hooks/PluggableHooksInterface.php)

## Methods

### getHookAnchors()

::: tip RETURN
[PluggableAnchorsInterface](../../PluggableAnchorsInterface.md)
:::

---

### withHooksRunner()

Attach the hooks runner for this hookable.

**Parameters**

1. [HooksRunnerInterface](./HooksRunnerInterface.md) `$runner`

::: tip RETURN
PluggableHooksInterface
:::

---

### hook()

Run hooks for the given anchor (if-any).

**Parameters**

1. string `$anchor`
2.  `$argument`

::: tip RETURN
void
:::

---

