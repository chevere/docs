---
editLink: false
---

# EventsRunnerInterface

`Chevere\Interfaces\Pluggable\Plug\Event\EventsRunnerInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Pluggable/Plug/Event/EventsRunnerInterface.php)

## Description

Describes the component in charge of running the event listeners queue.

## Methods

### __construct

::: warning Parameters
- *queue*: [EventsQueue](../../../../Components/Pluggable/Plug/Event/EventsQueue.md)
- *writers*: [WritersInterface](../../../Writer/WritersInterface.md)
:::

---

### run

Run registered event listeners for the target event anchor.

::: warning Parameters
- *anchor*: string
- *data*: array
:::

::: danger Throws
- [RuntimeException](../../../../Exceptions/Core/RuntimeException.md) 
:::

::: tip Return
void
:::

---
