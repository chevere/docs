# PlugsMapInterface

`Chevere\Interfaces\Plugin\PlugsMapInterface`

[view source](https://github.com/chevere/chevere/blob/master//home/rodolfo/git/chevere/chevere/interfaces/Plugin/PlugsMapInterface.php)

## Extends

- [Countable]()

## Methods

### type()

#### Return

[PlugTypeInterface](./PlugTypeInterface.md)

---

### withAdded()

#### Parameters

- [AssertPlugInterface](./AssertPlugInterface.md) `$assertPlug`

#### Return

PlugsMapInterface

---

### has()

#### Parameters

- [PlugInterface](./PlugInterface.md) `$plug`

#### Return

bool

---

### hasPlugsFor()

#### Parameters

- string `$pluggable`

#### Return

bool

---

### getPlugsFor()

#### Parameters

- string `$pluggable`

#### Return

[PlugsQueueTypedInterface](./PlugsQueueTypedInterface.md)

---

### count()

#### Return

void

---

