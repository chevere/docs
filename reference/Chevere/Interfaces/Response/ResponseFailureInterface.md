---
editLink: false
---

# ResponseFailureInterface

`Chevere\Interfaces\Response\ResponseFailureInterface`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Interfaces/Response/ResponseFailureInterface.php)

## Extends

- [ResponseInterface](./ResponseInterface.md)

## Description

Describes the component in charge of defining a failure controller response.

## Methods

### withData()

Return an instance with the specified data.

#### Parameters

1. array `$data`

::: tip RETURN
ResponseFailureInterface
:::

This method MUST retain the state of the current instance, and return
an instance that contains the specified data.

---

### __construct()

#### Parameters

1. [ParametersInterface](../Parameter/ParametersInterface.md) `$parameters`
2. array `$data`

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
