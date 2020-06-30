# FileInterface

`Chevere\Interfaces\Filesystem\FileInterface`

[view source](https://github.com/chevere/chevere/blob/master//home/rodolfo/git/chevere/chevere/interfaces/Filesystem/FileInterface.php)

## Constants

### CHECKSUM_ALGO

Type `string`

```php
'sha256'
```

### CHECKSUM_LENGTH

Type `integer`

```php
64
```


## Methods

### path()

> Provides access to the PathInterface instance.

#### Return

[PathInterface](./PathInterface.md)

---

### isPhp()

> Returns a boolean indicating whether the file name is a PHP file.

#### Return

bool

---

### exists()

> Returns a boolean indicating whether the file exists.

#### Return

bool

---

### assertExists()

#### Return

void

---

### checksum()

> Retrieves the file checksum using the CHECKSUM_ALGO algorithm.

#### Return

string

---

### contents()

> Retrieves the file contents.

#### Return

string

---

### remove()

> Remove the file.

#### Return

void

---

### create()

> Create the file.

#### Return

void

---

### put()

> Put contents to the file. If the file doesn't exists it will be created.

#### Parameters

- string `$contents`

#### Return

void

---

