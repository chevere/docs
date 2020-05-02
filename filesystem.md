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
    - [Getting Child Path](#getting-child-path)
  - [Dir](#dir)
    - [Creating a Directory](#creating-a-directory)
    - [Checking a Directory](#checking-a-directory)
      - [Directory Exists](#directory-exists)
      - [Assert Directory Exists](#assert-directory-exists)
    - [Removing a Directory](#removing-a-directory)
    - [Getting Child Dir](#getting-child-dir)
  - [File](#file)
    - [Creating a File](#creating-a-file)
    - [Putting Contents to a File](#putting-contents-to-a-file)
    - [Checking a File](#checking-a-file)
      - [File Exists](#file-exists)
      - [Assert File Exists](#assert-file-exists)
      - [File is PHP](#file-is-php)
    - [Reading a File](#reading-a-file)
      - [File Contents](#file-contents)
      - [File Checksum](#file-checksum)
    - [Removing a File](#removing-a-file)
  - [File PHP](#file-php)
    - [Caching](#caching)
  - [File PHP Return](#file-php-return)
    - [Reading File PHP](#reading-file-php)
      - [Raw contents](#raw-contents)
      - [Var contents](#var-contents)
    - [Puting contents](#puting-contents)

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

### Getting Child Path

The `getChild` method allows to create new Path instances for sub-paths.

```php
$childPathDir  = $path->getChild('child/'); // /home/var/child/
$childPathFile  = $path->getChild('child-2/some-file.php'); // /home/var/child-2/some-child.php
```

## Dir

A Dir is a class implementing [DirInterface](Chevere\Components\Filesystem\Interfaces\DirInterface). A Dir is in charge of interact with filesystem directories.

```php
use Chevere\Components\Filesystem\Dir;

$absolute = '/home/var/';
$dir = new Dir(new Path($absolute));
```

### Creating a Directory

The `create` method creates the directory in the filesystem. The method takes the argument `int $mode` for the octal mode.

```php
$dir->create(0755);
```

### Checking a Directory

#### Directory Exists

The `exist` method determines if the directory exists. It returns `true` when a directory exists in the filesystem.

```php
$dirExists = $dir->exists();
```

#### Assert Directory Exists 

The `assertExists` method asserts if the directory exists. Throws exception when the directory doesn't exists in the filesystem.

```php
use Chevere\Components\Filesystem\Exceptions\DirNotExistsException;

$dir->assertExists(); // Throws DirNotExistsException
```

### Removing a Directory

The `removeContents` method removes the _contents_ of the directory. The `remove` method removes the directory and its contents. 

```php
$removed = $dir->removeContents(); // dir is now empty
$removed = $dir->remove(); // dir is gone
```

Both methods returns type `array` with a list of removed paths.

### Getting Child Dir

The `getChild` method allows to create new Dir instances for sub-dirs.

```php
$childDir  = $dir->getChild('child/'); // /home/var/child/
```

## File

A File is a class implementing [FileInterface](Chevere\Components\Filesystem\Interfaces\FileInterface). A File is in charge of interact with filesystem files.

```php
use Chevere\Components\Filesystem\File;

$absolute = '/home/var/the-file.php';
$file = new File(new Path($absolute));
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

#### Assert File Exists 

The `assertExists` method asserts if the file exists. Throws exception when the file doesn't exists in the filesystem.

```php
use Chevere\Components\Filesystem\Exceptions\FileNotExistsException;

$file->assertExists(); // Throws FileNotExistsException
```

#### File is PHP

The `isPhp` method determines if the file name is a PHP file. It returns `true` when the file name ends with `.php`.

```php
$fileIsPhp = $file->isPhp(); // bool
```

### Reading a File

#### File Contents

The `contents` method retrieve the contents of the file. It returns `string` with the file contents.

```php
$contents = $file->contents(); // raw file contents
```

#### File Checksum

The `checksum` method retrieve the checksum of the file. It returns `string` with the file checksum.

```php
$checksum = $file->checksum(); // sha256'd
```

> 👍 FileInterface::CHECKSUM_ALGO determines the algo used for file hashing.


### Removing a File

The `remove` method removes the file.

```php
$file->remove(); // file is gone
```

## File PHP

A File PHP is a class implementing [FilePhpInterface](Chevere\Components\Filesystem\Interfaces\FilePhpInterface). A File PHP is in charge of interact with PHP files.

```php
use Chevere\Components\Filesystem\File;
use Chevere\Components\Filesystem\FilePhp;
use Chevere\Components\Filesystem\Path;

$absolute = '/home/var/the-file.php';
$file = new File(new Path($absolute));
$filePhp = new FilePhp($file);
```

### Caching

The `cache` method will cache the PHP file. The `flush` method will destroy the cache.

```php
$filePhp->cache(); // OPCache'd
$filePhp->flush(); // OPCache is gone

```

> 👍 Cache works with OPCache.

## File PHP Return

A File PHP Return is a class implementing [FilePhpReturnInterface](Chevere\Components\Filesystem\Interfaces\FilePhpReturnInterface). A File PHP Return is in charge of interact with the return value of PHP files.

```php
use Chevere\Components\Filesystem\File;
use Chevere\Components\Filesystem\FilePhp;
use Chevere\Components\Filesystem\FilePhpReturn;
use Chevere\Components\Filesystem\Path;

$absolute = '/home/var/the-file.php';
$filePhp = new FilePhp(new File(new Path($absolute)));
$filePhpReturn = new FilePhpReturn($filePhp);
$filePhpReturn = $filePhpReturn->withStrict(false);
```

The `withStrict` method allows to set the flag for file contents validation. Strict `true` will require that the file contents begins with `<?php return `. Strict `false` will allow comments and other code before `return`.

### Reading File PHP

#### Raw contents

The `raw` method returns a type `string` with the raw contents of the PHP file.

```php
$filePhpReturn->raw();
```

#### Var contents

The `var` method retuns a PHP variable. If the return value of the PHP file is a serialized string, it will return the unserialized object instance.

```php
$filePhpReturn->var();
```

### Puting contents

The `put` method puts the contents of a variable export into the PHP file as `<?php return $var;`. Type `object` will be stored with serialize.

```php
use Chevere\Components\Variable\VariableExport;

$variableExport = new VariableExport($var);
$filePhpReturn->put($variableExport);
```