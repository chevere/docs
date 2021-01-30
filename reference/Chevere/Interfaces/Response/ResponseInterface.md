---
editLink: false
---

# ResponseInterface

`Chevere\Interfaces\Response\ResponseInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Response/ResponseInterface.php)

## Description

Describes the component in charge of defining a success response.

## Methods

### withStatus()

Return an instance with the specified status.

**Parameters:**

- *code*: int

::: tip RETURN
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified status.

---

### withData()

Return an instance with the specified data.

**Parameters:**

- *...namedData*: mixed

::: tip RETURN
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified data.

---

### uuid()

Provides access to uuid.

::: tip RETURN
string
:::

---

### token()

Provides access to token.

::: tip RETURN
string
:::

---

### data()

Provides access to data.

::: tip RETURN
array
:::

---

### status()

Provides access to status.

::: tip RETURN
int
:::

---
