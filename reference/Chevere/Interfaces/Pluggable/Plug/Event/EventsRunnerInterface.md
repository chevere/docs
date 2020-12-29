---
editLink: false
---

# EventsRunnerInterface

`Chevere\Interfaces\Pluggable\Plug\Event\EventsRunnerInterface`

[view source](https://github.com/chevere/chevere/blob/master/Pluggable/Plug/Event/EventsRunnerInterface.php)

## Description

Describes the component in charge of running the event listeners queue.

## Methods

### __construct()

#### Parameters

1. [EventsQueue](../../../../Components/Pluggable/Plug/Event/EventsQueue.md) `$queue`
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
