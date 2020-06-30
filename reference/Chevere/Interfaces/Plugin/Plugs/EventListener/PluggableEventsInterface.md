# PluggableEventsInterface

`Chevere\Interfaces\Plugin\Plugs\EventListener\PluggableEventsInterface`

[view source](https://github.com/chevere/chevere/blob/master//home/rodolfo/git/chevere/chevere/interfaces/Plugin/Plugs/EventListener/PluggableEventsInterface.php)

## Methods

### getEventAnchors()

#### Return

[PluggableAnchorsInterface](../../PluggableAnchorsInterface.md)

---

### withEventListenersRunner()

> Attach the events runner.

#### Parameters

- [EventListenersRunnerInterface](./EventListenersRunnerInterface.md) `$runner`

#### Return

PluggableEventsInterface

---

### event()

> Run events for the given anchor (if-any).

#### Parameters

- string `$anchor`
- array `$data`

#### Return

void

---

