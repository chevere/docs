# EventListenersRunnerInterface

`Chevere\Interfaces\Plugin\Plugs\EventListener\EventListenersRunnerInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Plugin/Plugs/EventListener/EventListenersRunnerInterface.php)

## Methods

### __construct()

**Parameters**

1. [EventListenersQueue](../../../../Components/Plugin/Plugs/EventListeners/EventListenersQueue.md) `$queue`
2. [WritersInterface](../../../Writer/WritersInterface.md) `$writers`

---

### run()

Run registered event listeners for the target event name.

**Parameters**

1. string `$name`
2. array `$data`

::: tip RETURN
void
:::


---

