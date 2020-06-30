# PluggableEventsInterface

`Chevere\Interfaces\Plugin\Plugs\EventListener\PluggableEventsInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Plugin/Plugs/EventListener/PluggableEventsInterface.php)

## Methods

### getEventAnchors()

::: tip RETURN
[PluggableAnchorsInterface](../../PluggableAnchorsInterface.md)
:::


---

### withEventListenersRunner()

Attach the events runner.

**Parameters**

1. [EventListenersRunnerInterface](./EventListenersRunnerInterface.md) `$runner`

::: tip RETURN
PluggableEventsInterface
:::


---

### event()

Run events for the given anchor (if-any).

**Parameters**

1. string `$anchor`
2. array `$data`

::: tip RETURN
void
:::


---

