# Filesystem

- [Filesystem](#filesystem)
  - [Introduction](#introduction)
  - [Path](#path)
    - [Checking a Path](#checking-a-path)
      - [Path Exists](#path-exists)
      - [Path is Writable](#path-is-writable)
      - [Path is Readable](#path-is-readable)
      - [Path is a Directory](#path-is-a-directory)
      - [Path is a File](#path-is-a-file)
    - [Altering a Path](#altering-a-path)
      - [CHMOD](#chmod)
    - [Getting Children](#getting-children)
  - [Dir](#dir)
  - [File](#file)
    - [Creating a File](#creating-a-file)
    - [Putting Contents to a File](#putting-contents-to-a-file)
    - [Checking a File](#checking-a-file)
      - [File Exists](#file-exists)
      - [File Exists (assert)](#file-exists-assert)
      - [File is PHP](#file-is-php)
    - [Reading a File](#reading-a-file)
      - [File Contents](#file-contents)
      - [File Checksum](#file-checksum)
    - [Removing a File](#removing-a-file)
  - [File PHP](#file-php)
  - [File PHP Return](#file-php-return)

## Introduction

Filesystem is a collection of classes that interact with the filesystem. Namespace `Chevere\Components\Filesystem` holds all the Filesystem classes, offering a myriad of filesystem related functionalies.

## Path

A Path is a class implementing [PathInterface](Chevere\Components\Filesystem\Interfaces\PathInterface). A Path is in charge of interact with filesystem paths.

```php
use Chevere\Components\Filesystem\Path;

$path = new Path('/home/var/the-path/');
```

### Checking a Path

#### Path Exists

The `exist` method determines if the path exists. It returns `true` when a path exists in the filesystem.

```php
$pathExists = $path->exists();
```

#### Path is Writable

The `isWritable` method determines if the path is writable. It returns `true` when a path is writeable.

```php
$pathisWritable = $path->isWritable();
```

#### Path is Readable

The `isReadable` method determines if the path is readable. It returns `true` when a path is readable.

```php
$pathisReadable = $path->isReadable();
```

#### Path is a Directory

The `isDir` method determines if the path is a directory. It returns `true` when a path exists in the filesystem and it is a directory.

```php
$pathIsDir = $path->isDir();
```

#### Path is a File

The `isFile` method determines if the path is a file. It returns `true` when a path exists in the filesystem and it is a file.

```php
$pathIsFile = $path->isFile();
```

### Altering a Path

#### CHMOD

The `chmod` method applies chmod on the path.

```php
$path->chmod(0777);
```

### Getting Children

The `getChild` method allows to create new Path instances for sub-paths. 

```php
$path = new Path('/home/')
$childPath  = $path->getChild('some-child.php'); // /home/some-child.php
```

## Dir

## File

A File is a class implementing [FileInterface](Chevere\Components\Filesystem\Interfaces\FileInterface). A File is in charge of interact with filesystem files.

```php
use Chevere\Components\Filesystem\File;

$absolute = '/home/var/the-file.php';
$file = new File(new Path($absolute));
// A File can be also created with...
$file = (new FileFromString($absolute))->file();
```

### Creating a File

The `create` method creates the file in the filesystem.

```php
$file->create();
```

### Putting Contents to a File

The `put` method sets the `$contents` of the file.

```php
$file->put($contents);
```

### Checking a File

#### File Exists

The `exist` method determines if the file exists. It returns `true` when a file exists in the filesystem.

```php
$fileExists = $file->exists();
```

#### File Exists (assert) 

The `assertExists` method asserts if the file exists. Throws exception when the file doesn't exists in the filesystem.

```php
$file->assertExists();
```

#### File is PHP

The `isPhp` method determines if the file name is a PHP file. It returns `true` when the file name ends with `.php`.

```php
$fileIsPhp = $file->isPhp();
```

### Reading a File

#### File Contents

The `contents` method retrieve the contents of the file. It returns `string` with the file contents.

```php
$contents = $file->contents();
```

#### File Checksum

The `checksum` method retrieve the checksum of the file. It returns `string` with the file checksum.

```php
$checksum = $file->checksum();
```

> 👍 FileInterface::CHECKSUM_ALGO determines the algo used for file hashing.


### Removing a File

```php
$file->remove();
```

## File PHP

## File PHP Return