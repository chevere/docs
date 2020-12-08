---
editLink: false
---

# EventListenersRunnerInterface

`Chevere\Interfaces\Plugin\Plugs\EventListener\EventListenersRunnerInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Plugin/Plugs/EventListener/EventListenersRunnerInterface.php)

## Description

Describes the component in charge of running the event listeners queue.

## Methods

### __construct()

#### Parameters

1. [EventListenersQueue](../../../../Components/Plugin/Plugs/EventListeners/EventListenersQueue.md) `$queue`
2. [WritersInterface](../../../Writer/WritersInterface.md) `$writers`

---

### run()

Run registered event listeners for the target event anchor.

#### Parameters

1. string `$anchor`
2. array `$data`

::: danger THROWS
- [RuntimeException](../../../../Exceptions/Core/RuntimeException.md) 
:::

::: tip RETURN
void
:::

---
