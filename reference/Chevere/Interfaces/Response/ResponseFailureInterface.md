---
editLink: false
---

# ResponseFailureInterface

`Chevere\Interfaces\Response\ResponseFailureInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Response/ResponseFailureInterface.php)

## Implements

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

1. array `$data`

---

### data()

Provides access to response data.

::: tip RETURN
array
:::

---
