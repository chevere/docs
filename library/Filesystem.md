# Filesystem

`🚧 OUTDATED DOCS`

The Filesystem component is in charge of interact with the filesystem, offering a myriad of related functionalities.

## Path

The `Chevere/Filesystem/Path` component is charge of interact with filesystem paths.

```php
use Chevere\Filesystem\Path;

$path = new Path('/home/var/the-path/');
```

### Checking a Path

#### Path Exists

The `exist` method determines if the path exists. It returns `true` when a path exists in the filesystem.

```php
$pathExists = $path->exists();
```

#### Path is Writable

The `isWritable` method determines if the path is writable. It returns `true` when a path is writable and it supports NFS mounts.

```php
$pathIsWritable = $path->isWritable();
```

#### Path is Readable

The `isReadable` method determines if the path is readable. It returns `true` when a path is readable.

```php
$pathIsReadable = $path->isReadable();
```

#### Path is Directory

The `isDir` method determines if the path is a directory. It returns `true` when a path exists in the filesystem and it is a directory.

```php
$pathIsDir = $path->isDir();
```

#### Path is File

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
$childPathDir  = $path
    ->getChild('child/'); // /home/var/child/
$childPathFile  = $path
    ->getChild('child-2/some-file.php'); // /home/var/child-2/some-child.php
```

## Dir

The `Chevere/Filesystem/Dir` component is in charge of interact with filesystem directories.

```php
use Chevere\Filesystem\Dir;
use Chevere\Filesystem\Path;
use function Chevere\Filesystem\dirForPath;

$path = '/home/var/';
$dir = new Dir(new Path($path))
// It can be also created with:
$dir = dirForPath($path);
```

### Creating a Directory

The `create` method creates the directory in the filesystem. The method takes the argument `int $mode` for the octal mode.

```php
$dir->create(0755);
```

The `createIfNotExists` method does exactly the same as `create`, but only if the directory doesn't exists.

```php
$dir->createIfNotExists(0755);
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
use Chevere\Exceptions\Filesystem\DirNotExistsException;

$dir->assertExists(); // Throws DirNotExistsException
```

### Removing Directory contents

The `removeContents` method removes the contents of the directory.

```php
$removed = $dir->removeContents(); // dir is now empty
```

### Removing a Directory

The `remove` method removes the directory and its contents.

```php
$removed = $dir->remove(); // dir is gone
```

The `removeIfExists` method removes the directory and its contents if the directory exists.

```php
$removed = $dir->removeIfExists();
```

### Getting Child Dir

The `getChild` method allows to create new Dir instances for sub-dirs.

```php
$childDir  = $dir->getChild('child/'); // /home/var/child/
```

## File

The `Chevere/Filesystem/File` component in charge of interact with filesystem files.

```php
use Chevere\Filesystem\File;
use Chevere\Filesystem\Path;
use function Chevere\Filesystem\fileForPath;

$path = '/home/var/the-file.php';
$file = new File(new Path($path));
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
$fileExists = $file->exists();
```

#### Assert File Exists

The `assertExists` method asserts if the file exists. Throws exception when the file doesn't exists in the filesystem.

```php
use Chevere\Exceptions\Filesystem\FileNotExistsException;

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
$contents = $file->getContents(); // raw file contents
```

#### File Checksum

The `checksum` method retrieve the checksum of the file. It returns `string` with the file checksum.

```php
$checksum = $file->getChecksum(); // sha256'd
```

> FileInterface::CHECKSUM_ALGO determines the algorithm used for file hashing.

### Removing a File

The `remove` method removes the file.

```php
$file->remove(); // file is gone
```

The `removeIfExists` method removes the file if exist.

```php
$file->removeIfExists(); // doesn't throw assert exists
```

## File PHP

The `Chevere/Filesystem/FilePhp` component in charge of interact with PHP files.

```php
use Chevere\Filesystem\File;
use Chevere\Filesystem\FilePhp;
use Chevere\Filesystem\Path;
use function Chevere\Filesystem\filePhpForPath;

$absolute = '/home/var/the-file.php';
$file = new File(new Path($absolute));
$filePhp = new FilePhp($file);
// It can be also created with:
$filePhp = filePhpForPath($absolute);
```

### Caching

The `cache` method will cache the PHP file. The `flush` method will destroy the cache.

```php
$filePhp->compileCache(); // OPCache cache
$filePhp->flushCache(); // OPCache cache is gone

```

> Cache works with OPCache.

## File PHP Return

The `Chevere/Filesystem/FilePhpReturn` component in charge of interact with the return value of PHP files.

```php
use Chevere\Filesystem\File;
use Chevere\Filesystem\FilePhp;
use Chevere\Filesystem\FilePhpReturn;
use Chevere\Filesystem\Path;
use function Chevere\Filesystem\filePhpReturnForPath;

$absolute = '/home/var/the-file.php';
$filePhp = new FilePhp(new File(new Path($absolute)));
$filePhpReturn = new FilePhpReturn($filePhp);
// It can be also created with:
$filePhp = filePhpReturnForPath($absolute);

```

### Reading File PHP Return

#### Raw contents

The `raw` method returns the file return "as-is", equivalent to `return include <file>`.

```php
$filePhpReturn->raw();
```

#### Var contents

The `var` method returns a PHP variable. If the return is a serialized string, it will attempt to deserialize the string to cast an object.

```php
$var = $filePhpReturn->var();
```

#### Var contents typed

The `varType` method does the same as `var`, but it validates the variable against the passed type.

```php
use function Chevere\Type\typeInteger;

$var = $filePhpReturn->varType(typeInteger());
```

### Putting contents

The `put` method puts the contents of a variable export into the PHP file as `<?php return $var;`.

Type `object` will be stored as `return 'serialized string';`.

```php
use Chevere\VarSupport\VarStorable;

$varStorable = new VarStorable($var);
$filePhpReturn->put($varStorable);
```
