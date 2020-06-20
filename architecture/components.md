# Components

All components must follow the [Interfaces](./interfaces.md), [Exceptions](./exceptions.md) and [Testing](./testing.md) spec. On top of that, components have the following conventions.

Components **must**:

* Have one single responsibility
* Name properties as nouns
* Declare private/protected properties only

Components **should**:

* Prefer composition over inherence
* Prefer to implement immutability
* Provide exceptions in the same namespaceS