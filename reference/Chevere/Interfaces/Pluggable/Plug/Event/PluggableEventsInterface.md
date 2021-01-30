---
editLink: false
---

# PluggableEventsInterface

`Chevere\Interfaces\Pluggable\Plug\Event\PluggableEventsInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Pluggable/Plug/Event/PluggableEventsInterface.php)

## Description

Describes the interface for components requiring to implement pluggable events.

## Methods

### getEventAnchors

Returns the declared event anchors able to plug.

::: tip Return
[PluggableAnchorsInterface](../../PluggableAnchorsInterface.md)
:::

---

### withEventsRunner

Return an instance with the specified `$runner`.

::: warning Parameters
- *runner*: [EventsRunnerInterface](./EventsRunnerInterface.md)
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$runner`.

This method should be implemented in the runtime strategy before running events.

---

### event

Run events for the given anchor (if-any).

::: warning Parameters
- *anchor*: string
- *data*: array
:::

::: tip Return
void
:::

---
