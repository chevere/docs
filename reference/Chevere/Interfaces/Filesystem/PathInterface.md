# PathInterface

`Chevere\Interfaces\Filesystem\PathInterface`

[view source](https://github.com/chevere/chevere/blob/master//home/rodolfo/git/chevere/chevere/interfaces/Filesystem/PathInterface.php)

## Methods

### absolute()

#### Return

string

---

### exists()

> Returns a boolean indicating whether the path exists.

#### Return

bool

---

### isDir()

> Returns a boolean indicating whether the path is a directory and exists.

#### Return

bool

---

### isFile()

> Returns a boolean indicating whether the path is a file and exists.

#### Return

bool

---

### chmod()

> Wrapper for \chmod.

#### Parameters

- int `$mode`

#### Return

void

---

### isWritable()

> Wrapper for \is_writeable.

#### Return

bool

---

### isReadable()

> Wrapper for \is_writeable.

#### Return

bool

---

### getChild()

> Get a child path as a PathInterface

#### Parameters

- string `$child`

#### Return

PathInterface

---

