# DirInterface

`Chevere\Interfaces\Filesystem\DirInterface`

[view source](https://github.com/chevere/chevere/blob/master//home/rodolfo/git/chevere/chevere/interfaces/Filesystem/DirInterface.php)

## Methods

### path()

> Provides access to the PathInterface instance.

#### Return

[PathInterface](./PathInterface.md)

---

### create()

> Creates the directory.

#### Parameters

- int `$mode`

#### Return

void

---

### exists()

> Returns a boolean indicating whether the directory exists.

#### Return

bool

---

### assertExists()

#### Return

void

---

### removeContents()

> Removes the contents from a path without deleting the path.

#### Return

array

---

### remove()

> Removes the directory.

#### Return

array

---

### getChild()

> Gets a child DirInterface for the added path.

#### Parameters

- string `$path`

#### Return

DirInterface

---

