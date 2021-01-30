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

**Parameters:**

- *...namedArguments*: mixed

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

**Parameters:**

- *arguments*: [ArgumentsInterface](../../Interfaces/Parameter/ArgumentsInterface.md)

::: tip RETURN
[ResponseInterface](../../Interfaces/Response/ResponseInterface.md)
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

**Parameters:**

- *...namedArguments*: mixed

::: tip RETURN
[ArgumentsInterface](../../Interfaces/Parameter/ArgumentsInterface.md)
:::

---

### getResponse()

**Parameters:**

- *...namedData*: mixed

::: tip RETURN
[ResponseInterface](../../Interfaces/Response/ResponseInterface.md)
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
