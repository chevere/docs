---
editLink: false
---

# PluggableEventsInterface

`Chevere\Interfaces\Pluggable\Plug\Event\PluggableEventsInterface`

[view source](https://github.com/chevere/chevere/blob/master/Pluggable/Plug/Event/PluggableEventsInterface.php)

## Description

Describes the interface for components requiring to implement pluggable events.

## Methods

### getEventAnchors()

Returns the declared event anchors able to plug.

::: tip RETURN
[PluggableAnchorsInterface](../../PluggableAnchorsInterface.md)
:::

---

### withEventsRunner()

Return an instance with the specified `$runner`.

#### Parameters

1. [EventsRunnerInterface](./EventsRunnerInterface.md) `$runner`

::: tip RETURN
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified `$runner`.

This method should be implemented in the runtime strategy before running events.

---

### event()

Run events for the given anchor (if-any).

#### Parameters

1. string `$anchor`
2. array `$data`

::: tip RETURN
void
:::

---
