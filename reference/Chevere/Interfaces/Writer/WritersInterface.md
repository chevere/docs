# WritersInterface

`Chevere\Interfaces\Writer\WritersInterface`

[view source](https://github.com/chevere/chevere/blob/master//home/rodolfo/git/chevere/chevere/interfaces/Writer/WritersInterface.php)

## Methods

### with()

> Return an instance with the specified $writer for all writers.

This method MUST retain the state of the current instance, and return
an instance that contains the specified $writer for all writers.

#### Parameters

- [WriterInterface](./WriterInterface.md) `$writer`

#### Return

WritersInterface

---

### withOut()

> Return an instance with the specified out WriterInterface.

This method MUST retain the state of the current instance, and return
an instance that contains the specified out WriterInterface.

#### Parameters

- [WriterInterface](./WriterInterface.md) `$writer`

#### Return

WritersInterface

---

### out()

#### Return

[WriterInterface](./WriterInterface.md)

---

### withError()

> Return an instance with the specified error WriterInterface.

This method MUST retain the state of the current instance, and return
an instance that contains the specified error WriterInterface.

#### Parameters

- [WriterInterface](./WriterInterface.md) `$writer`

#### Return

WritersInterface

---

### error()

#### Return

[WriterInterface](./WriterInterface.md)

---

### withDebug()

> Return an instance with the specified debug WriterInterface.

This method MUST retain the state of the current instance, and return
an instance that contains the specified debug WriterInterface.

#### Parameters

- [WriterInterface](./WriterInterface.md) `$writer`

#### Return

WritersInterface

---

### debug()

#### Return

[WriterInterface](./WriterInterface.md)

---

### withLog()

> Return an instance with the specified log WriterInterface.

This method MUST retain the state of the current instance, and return
an instance that contains the specified log WriterInterface.

#### Parameters

- [WriterInterface](./WriterInterface.md) `$writer`

#### Return

WritersInterface

---

### log()

#### Return

[WriterInterface](./WriterInterface.md)

---

