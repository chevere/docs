# Components Spec

Components are elements that provide concrete functionality.

::: tip Reference
Check the [Components Reference](../../reference/components.md) to learn about all the components available.
:::

## Conventions

Components **must**:

* Define a descriptive name
* Have one single responsibility
* Name properties as nouns
* Declare private/protected properties only
* Implement a defined [interface](interfaces.md)

Components **should**:

* Prefer composition over inherence
* Prefer to implement immutability

## Design

::: tip
Components inherit the [Interface Spec](interfaces.md#design).
:::
