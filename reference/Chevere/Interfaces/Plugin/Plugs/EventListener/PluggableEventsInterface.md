---
editLink: false
---

# PluggableEventsInterface

`Chevere\Interfaces\Plugin\Plugs\EventListener\PluggableEventsInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Plugin/Plugs/EventListener/PluggableEventsInterface.php)

## Description

Describes the interface for components requiring to implement pluggable events.

## Methods

### getEventAnchors()

Returns the declared event anchors able to plug.

::: tip RETURN
[PluggableAnchorsInterface](../../PluggableAnchorsInterface.md)
:::

---

### withEventListenersRunner()

Return an instance with the specified `$runner`.

#### Parameters

1. [EventListenersRunnerInterface](./EventListenersRunnerInterface.md) `$runner`

::: tip RETURN
PluggableEventsInterface
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
