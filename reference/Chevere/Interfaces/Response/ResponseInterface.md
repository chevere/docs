---
editLink: false
---

# ResponseInterface

`Chevere\Interfaces\Response\ResponseInterface`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Interfaces/Response/ResponseInterface.php)

## Extends

- [AttributesInterface](../Common/AttributesInterface.md)

## Description

Describes the component in charge of defining a success response.

## Methods

### __construct

::: warning Parameters
- *...namedData*: mixed
:::

---

### withStatus

Return an instance with the specified status.

::: warning Parameters
- *code*: int
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified status.

---

### withData

Return an instance with the specified data.

::: warning Parameters
- *...namedData*: mixed
:::

::: tip Return
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified data.

---

### uuid

Provides access to uuid.

::: tip Return
string
:::

---

### token

Provides access to token.

::: tip Return
string
:::

---

### data

Provides access to data.

::: tip Return
array
:::

---

### status

Provides access to status.

::: tip Return
int
:::

---

### withAddedAttribute

::: warning Parameters
- *...attributes*: string
:::

::: tip Return
static
:::

---

### withoutAttribute

::: warning Parameters
- *...attributes*: string
:::

::: tip Return
static
:::

---

### hasAttribute

::: warning Parameters
- *...attributes*: string
:::

::: tip Return
bool
:::

---

### attributes

::: tip Return
[Ds\Set](https://www.php.net/manual/class.ds\set)
:::

---
