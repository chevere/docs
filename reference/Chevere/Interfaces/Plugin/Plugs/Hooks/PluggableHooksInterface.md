# PluggableHooksInterface

`Chevere\Interfaces\Plugin\Plugs\Hooks\PluggableHooksInterface`

[view source](https://github.com/chevere/chevere/blob/master//home/rodolfo/git/chevere/chevere/interfaces/Plugin/Plugs/Hooks/PluggableHooksInterface.php)

## Methods

### getHookAnchors()

#### Return

[PluggableAnchorsInterface](../../PluggableAnchorsInterface.md)

---

### withHooksRunner()

> Attach the hooks runner for this hookable.

#### Parameters

- [HooksRunnerInterface](./HooksRunnerInterface.md) `$runner`

#### Return

PluggableHooksInterface

---

### hook()

> Run hooks for the given anchor (if-any).

#### Parameters

- string `$anchor`
-  `$argument`

#### Return

void

---

