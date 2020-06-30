# ControllerParametersInterface

`Chevere\Interfaces\Controller\ControllerParametersInterface`

[view source](https://github.com/chevere/chevere/blob/master//home/rodolfo/git/chevere/chevere/interfaces/Controller/ControllerParametersInterface.php)

## Extends

- [DsMapInterface]()
- [Countable]()

## Methods

### map()

#### Return

Ds\Map

---

### withParameter()

> Return an instance with the specified Controller Parameter.

This method MUST retain the state of the current instance, and return
an instance that contains the specified Controller Parameter.

#### Parameters

- [ControllerParameterInterface](./ControllerParameterInterface.md) `$controllerParameter`

#### Return

ControllerParametersInterface

---

### hasParameterName()

#### Parameters

- string `$name`

#### Return

bool

---

### get()

#### Parameters

- string `$name`

#### Return

[ControllerParameterInterface](./ControllerParameterInterface.md)

---

### keys()

#### Return

array

---

### count()

#### Return

void

---

