# Filesystem

The Filesystem component is in charge of interact with the filesystem, offering a myriad of related functionalities.

## Path

The [Path](../reference/Chevere/Components/Filesystem/Path.md) component is charge of interact with filesystem paths.

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

The `isWritable` method determines if the path is writable. It returns `true` when a path is writable and it supports NFS mounts.

```php
$pathIsWritable = $path->isWritable();
```

#### Path is Readable

The `isReadable` method determines if the path is readable. It returns `true` when a path is readable.

```php
$pathIsReadable = $path->isReadable();
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

The [Dir](../reference/Chevere/Components/Filesystem/Dir.md) component is in charge of interact with filesystem directories.

```php
use Chevere\Components\Filesystem\Dir;
use Chevere\Components\Filesystem\Path;
use function Chevere\Components\Filesystem\dirForPath;

$path = '/home/var/';
$dir = new Dir(new Path($path))
// It can be also created with...
$dir = dirForPath($path);
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
use Chevere\Exceptions\Filesystem\DirNotExistsException;

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

The [File](../reference/Chevere/Components/Filesystem/File.md) component in charge of interact with filesystem files.

```php
use Chevere\Components\Filesystem\File;
use Chevere\Components\Filesystem\Path;
use function Chevere\Components\Filesystem\fileForPath;

$path = '/home/var/the-file.php';
$file = new File(new Path($path));
// It can be also created with...
$file = fileForPath($path);
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
$contents = $file->contents(); // raw file contents
```

#### File Checksum

The `checksum` method retrieve the checksum of the file. It returns `string` with the file checksum.

```php
$checksum = $file->checksum(); // sha256'd
```

> 👍🏾 FileInterface::CHECKSUM_ALGO determines the algorithm used for file hashing.

### Removing a File

The `remove` method removes the file.

```php
$file->remove(); // file is gone
```

## File PHP

The [FilePhp](../reference/Chevere/Components/Filesystem/FilePhp.md) component in charge of interact with PHP files.

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
$filePhp->cache(); // OPCache cache
$filePhp->flush(); // OPCache cache is gone

```

> 👍🏾 Cache works with OPCache.

## File PHP Return

The [FilePhpReturn](../reference/Chevere/Components/Filesystem/FilePhpReturn.md) component in charge og interact with the return value of PHP files.

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

The `withStrict` method allows to set the flag for file contents validation. Strict `true` will require that the file contents begins with `<?php return`. Strict `false` will allow comments and other code before `return`.

### Reading File PHP

#### Raw contents

The `raw` method returns a type `string` with the raw contents of the PHP file.

```php
$filePhpReturn->raw();
```

#### Var contents

The `var` method retuns a PHP variable. If the return value of the PHP file is a serialized string, it will return the not serialized object instance.

```php
$filePhpReturn->var();
```

### Putting contents

The `put` method puts the contents of a variable export into the PHP file as `<?php return $var;`. Type `object` will be stored with serialize.

```php
use Chevere\Components\Variable\VarExportable;

$varExportable = new VarExportable($var);
$filePhpReturn->put($varExportable);
```
