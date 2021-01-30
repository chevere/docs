---
editLink: false
---

# EventInterface

`Chevere\Interfaces\Pluggable\Plug\Event\EventInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Pluggable/Plug/Event/EventInterface.php)

## Extends

- [PlugInterface](../../PlugInterface.md)

## Description

Describes the component in charge of defining an event listener plug.

## Methods

### __invoke

Executes the event listener.

::: warning Parameters
- *data*: array
- *writers*: [WritersInterface](../../../Writer/WritersInterface.md)
:::

::: tip Return
void
:::

---

### anchor

Plugs at anchor.

::: tip Return
string
:::

---

### at

Plugs at class name.

::: tip Return
string
:::

---

### priority

Plugs at priority.

::: tip Return
int
:::

---
