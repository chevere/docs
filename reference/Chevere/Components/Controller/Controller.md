---
editLink: false
---

# Controller

`Chevere\Components\Controller\Controller`

[view source](https://github.com/chevere/chevere/blob/main/src/Chevere/Components/Controller/Controller.php)

## Implements

- [ActionInterface](../../Interfaces/Action/ActionInterface.md)
- [DescriptionInterface](../../Interfaces/Common/DescriptionInterface.md)
- [ControllerInterface](../../Interfaces/Controller/ControllerInterface.md)

## Extends

- [Action](../Action/Action.md)

## Description

#[Dispatch('dispatchName')]
#[Relation('relationName')]

## Methods

### __construct

::: warning Parameters
- *dispatch*: string
- *relation*: string
:::

---

### parameter

::: tip Return
[StringParameterInterface](../../Interfaces/Parameter/StringParameterInterface.md)
:::

---

### relation

::: tip Return
string
:::

---

### dispatch

::: tip Return
string
:::

---

### getParameters

::: tip Return
[ParametersInterface](../../Interfaces/Parameter/ParametersInterface.md)
:::

---

### getResponseParameters

::: tip Return
[ParametersInterface](../../Interfaces/Parameter/ParametersInterface.md)
:::

---

### run

::: warning Parameters
- *arguments*: [ArgumentsInterface](../../Interfaces/Parameter/ArgumentsInterface.md)
:::

::: tip Return
[ResponseInterface](../../Interfaces/Response/ResponseInterface.md)
:::

---

### parameters

::: tip Return
[ParametersInterface](../../Interfaces/Parameter/ParametersInterface.md)
:::

---

### responseParameters

::: tip Return
[ParametersInterface](../../Interfaces/Parameter/ParametersInterface.md)
:::

---

### getArguments

::: warning Parameters
- *...namedArguments*: mixed
:::

::: tip Return
[ArgumentsInterface](../../Interfaces/Parameter/ArgumentsInterface.md)
:::

---

### getResponse

::: warning Parameters
- *...namedData*: mixed
:::

::: tip Return
[ResponseInterface](../../Interfaces/Response/ResponseInterface.md)
:::

---

### getDescription

::: tip Return
string
:::

---

### description

::: tip Return
string
:::

---
