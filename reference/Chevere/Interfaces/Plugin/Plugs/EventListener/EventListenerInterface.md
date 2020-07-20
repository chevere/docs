---
editLink: false
---

# EventListenerInterface

`Chevere\Interfaces\Plugin\Plugs\EventListener\EventListenerInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Plugin/Plugs/EventListener/EventListenerInterface.php)

## Implements

- [PlugInterface](../../PlugInterface.md)

## Description

Describes the component in charge of defining an event listener plug.

## Methods

### __invoke()

Executes the event listener.

#### Parameters

1. array `$data`
2. [WritersInterface](../../../Writer/WritersInterface.md) `$writers`

::: tip RETURN
void
:::

---

### anchor()

Plugs at anchor.

::: tip RETURN
string
:::

---

### at()

Plugs at class name.

::: tip RETURN
string
:::

---

### priority()

Plugs at priority.

::: tip RETURN
int
:::

---
