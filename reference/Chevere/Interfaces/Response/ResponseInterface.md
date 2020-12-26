---
editLink: false
---

# ResponseInterface

`Chevere\Interfaces\Response\ResponseInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Response/ResponseInterface.php)

## Description

Describes the component in charge of handling the response.

## Methods

### __construct()

#### Parameters

1. mixed `...$data`

---

### withData()

Return an instance with the specified data.

#### Parameters

1. mixed `...$data`

::: tip RETURN
self
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified data.

---

### uuid()

Provides access to response uuid.

::: tip RETURN
string
:::

---

### token()

Provides access to response token.

::: tip RETURN
string
:::

---

### data()

Provides access to response data.

::: tip RETURN
array
:::

---
