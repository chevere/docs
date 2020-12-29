---
editLink: false
---

# Controller

`Chevere\Components\Action\Controller`

[view source](https://github.com/chevere/chevere/blob/master/src/Chevere/Components/Action/Controller.php)

## Implements

- [ActionInterface](../../Interfaces/Action/ActionInterface.md)
- [DescriptionInterface](../../Interfaces/Common/DescriptionInterface.md)
- [ControllerInterface](../../Interfaces/Action/ControllerInterface.md)

## Extends

- [Action](./Action.md)

## Constants

### PARAMETER_TYPE

Type `string`

```php
'string'
```

## Methods

### __construct()

---

### getContextParameters()

::: tip RETURN
[ParametersInterface](../../Interfaces/Parameter/ParametersInterface.md)
:::

---

### withContextArguments()

#### Parameters

1. mixed `...$namedArguments`

::: tip RETURN
self
:::

---

### contextArguments()

::: tip RETURN
[ArgumentsInterface](../../Interfaces/Parameter/ArgumentsInterface.md)
:::

---

### hasContextArguments()

::: tip RETURN
bool
:::

---

### contextParameters()

::: tip RETURN
[ParametersInterface](../../Interfaces/Parameter/ParametersInterface.md)
:::

---

### assertParametersType()

::: tip RETURN
void
:::

---

### getParameters()

::: tip RETURN
[ParametersInterface](../../Interfaces/Parameter/ParametersInterface.md)
:::

---

### getResponseDataParameters()

::: tip RETURN
[ParametersInterface](../../Interfaces/Parameter/ParametersInterface.md)
:::

---

### run()

#### Parameters

1. [ArgumentsInterface](../../Interfaces/Parameter/ArgumentsInterface.md) `$arguments`

::: tip RETURN
[ResponseSuccessInterface](../../Interfaces/Response/ResponseSuccessInterface.md)
:::

---

### parameters()

::: tip RETURN
[ParametersInterface](../../Interfaces/Parameter/ParametersInterface.md)
:::

---

### responseDataParameters()

::: tip RETURN
[ParametersInterface](../../Interfaces/Parameter/ParametersInterface.md)
:::

---

### getArguments()

#### Parameters

1. mixed `...$arguments`

::: tip RETURN
[ArgumentsInterface](../../Interfaces/Parameter/ArgumentsInterface.md)
:::

---

### getResponseSuccess()

#### Parameters

1. array `$data`

::: tip RETURN
[ResponseSuccessInterface](../../Interfaces/Response/ResponseSuccessInterface.md)
:::

---

### getDescription()

::: tip RETURN
string
:::

---

### description()

::: tip RETURN
string
:::

---
