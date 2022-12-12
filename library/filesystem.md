# Filesystem

Namespace `Chevere\Filesystem`

The Filesystem component is in charge of interact with the filesystem, offering a myriad of related functionalities.

## Path

The `Path` component is charge of interact with filesystem paths (files and folders).

```php
use Chevere\Filesystem\Path;

$path = new Path('/home/var/the-path/');
```

### Checking a Path

#### Path Exists

The `exist` method determines if the path exists. It returns `true` when a path exists in the filesystem.

```php
$boolean = $path->exists();
```

#### Path is Writable

The `isWritable` method determines if the path is writable. It returns `true` when a path is writable and it supports NFS mounts.

```php
$boolean = $path->isWritable();
```

#### Path is Readable

The `isReadable` method determines if the path is readable. It returns `true` when a path is readable.

```php
$boolean = $path->isReadable();
```

#### Path is Directory

The `isDir` method determines if the path is a directory. It returns `true` when a path exists in the filesystem and it is a directory.

```php
$boolean = $path->isDir();
```

#### Path is File

The `isFile` method determines if the path is a file. It returns `true` when a path exists in the filesystem and it is a file.

```php
$boolean = $path->isFile();
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
$childPathDirectory = $path
    ->getChild('child/');
$childPathFile = $path
    ->getChild('child-2/some-file.php');
```

## Directory

The `Directory` component is in charge of interact with filesystem directories.

```php
use Chevere\Filesystem\Directory;
use Chevere\Filesystem\Path;
use function Chevere\Filesystem\directoryForPath;

$path = '/home/var/';
$directory = new Directory(
    new Path($path)
);
// It can be also created with:
$directory = directoryForPath($path);
```

### Creating a Directory

The `create` method creates the directory in the filesystem. The method takes the argument `int $mode` for the octal mode.

```php
$directory->create(0755);
```

The `createIfNotExists` method does exactly the same as `create`, but only if the directory doesn't exists.

```php
$directory->createIfNotExists(0755);
```

### Checking a Directory

#### Directory Exists

The `exist` method determines if the directory exists. It returns `true` when a directory exists in the filesystem.

```php
$boolean = $directory->exists();
```

#### Assert Directory Exists

The `assertExists` method asserts if the directory exists. Throws exception when the directory doesn't exists in the filesystem.

```php
use Chevere\Exceptions\Filesystem\DirNotExistsException;

$directory->assertExists(); // Throws DirNotExistsException
```

### Removing Directory contents

The `removeContents` method removes the contents of the directory.

```php
$removed = $directory->removeContents(); // dir is now empty
```

### Removing a Directory

The `remove` method removes the directory and its contents. It returns an `array<int, string>` with the items removed.

```php
$array = $directory->remove();
```

The `removeIfExists` method removes the directory and its contents if the directory exists.

```php
$array = $directory->removeIfExists();
```

### Get child directory

The `getChild` method allows to create new Directory instances for sub-directories.

```php
$childDirectory  = $directory
    ->getChild('child/');
```

## File

The `File` component in charge of interact with filesystem files.

```php
use Chevere\Filesystem\File;
use Chevere\Filesystem\Path;
use function Chevere\Filesystem\fileForPath;

$path = '/home/var/the-file.php';
$file = new File(
    new Path($path)
);
// It can be also created with:
$file = fileForPath($path);
```

### Creating a File

The `create` method creates the file in the filesystem.

```php
$file->create();
```

The `createIfNotExists` method creates the file in the filesystem if it doesn't exists.

```php
$file->createIfNotExists();
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
$boolean = $file->exists();
```

#### Assert File Exists

The `assertExists` method asserts if the file exists. Throws `Exceptions\FileNotExistsException` when the file doesn't exists in the filesystem.

```php
$file->assertExists();
```

#### File is PHP

The `isPhp` method determines if the file name is a PHP file. It returns `true` when the file name ends with `.php`.

```php
$boolean = $file->isPhp();
```

### Reading a File

#### File Contents

The `contents` method retrieve the contents of the file. It returns `string` with the file contents.

```php
$string = $file->getContents();
```

#### File Checksum

The `checksum` method retrieve the checksum of the file. It returns `string` with the file checksum (SHA256 default).

```php
$string = $file->getChecksum();
```

> FileInterface::CHECKSUM_ALGO determines the algorithm used for file hashing.

### Removing a File

The `remove` method removes the file.

```php
$file->remove();
```

The `removeIfExists` method removes the file if exist.

```php
$file->removeIfExists();
```

## File PHP

The `FilePhp` component in charge of interact with PHP files.

```php
use Chevere\Filesystem\File;
use Chevere\Filesystem\FilePhp;
use Chevere\Filesystem\Path;
use function Chevere\Filesystem\filePhpForPath;

$absolute = '/home/var/the-file.php';
$file = new File(
    new Path($absolute)
);
$filePhp = new FilePhp($file);
// It can be also created with:
$filePhp = filePhpForPath($absolute);
```

### Caching

The `compileCache` method will cache the PHP file (OPcache).

```php
$filePhp->compileCache();
```

The `flushCache` method will destroy the cache (OPcache).

```php
$filePhp->flushCache();
```

## File PHP Return

The `FilePhpReturn` component in charge of interact with the return value of PHP files.

```php
use Chevere\Filesystem\File;
use Chevere\Filesystem\FilePhp;
use Chevere\Filesystem\FilePhpReturn;
use Chevere\Filesystem\Path;
use function Chevere\Filesystem\filePhpReturnForPath;

$absolute = '/home/var/the-file.php';
$filePhp = new FilePhp(
    new File(
        new Path($absolute)
    )
);
$filePhpReturn = new FilePhpReturn($filePhp);
// It can be also created with:
$filePhp = filePhpReturnForPath($absolute);

```

### Reading File PHP Return

#### Get return

The `get` method returns the file return "as-is", equivalent to `return include <file>`.

```php
$mixed = $filePhpReturn->get();
```

#### Get return typed

The `get<Type>` method does the same as `get`, but it validates the variable against the target type.

```php
use function Chevere\Type\typeInteger;

$array => $filePhpReturn->getArray();
$boolean => $filePhpReturn->getBoolean();
$float => $filePhpReturn->getFloat();
$integer => $filePhpReturn->getInteger();
$object => $filePhpReturn->getObject();
$string => $filePhpReturn->getString();
```

### Putting contents

The `put` method puts the contents of a variable export into the PHP file as `<?php return $variable;`.

Type `object` will be stored as `return 'serialized string';`.

```php
use Chevere\VariableSupport\StorableVariable;

$storable = new StorableVariable($var);
$filePhpReturn->put($storable);
```
