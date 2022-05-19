# VarDump

![VarDump](../src/packages/var-dump/var-dump-social.svg)

The `Chevere\VarDump` package provides an alternative to [var_dump](https://www.php.net/var-dump) with a richer feature set, including formatting for the generation of a myriad of dump documents.

## Installing

VarDump is available through [Packagist](https://packagist.org/packages/chevere/var-dump) and the repository source is at [GitHub](https://github.com/chevere/var-dump).

```sh
composer require chevere/var-dump
```

## Demo

![HTML demo](../src/packages/var-dump/demo.svg)

* [HTML](https://chevere.github.io/var-dump/demo/output/html.html)
* [Plain text](https://chevere.github.io/var-dump/demo/output/plain.txt)
* [Console (asciinema)](https://asciinema.org/a/492994)

## Features

* Provides vd (VarDump) and vdd (VarDump & die) [helpers](#helpers)
* Colorful typed variable introspection
* Reports visibility
* Detects circular references
* Stream-based
  * Writes line-by-line
  * It can handle _really_ large documents
* Provides caller information
* Console document
  * Colorful console output (where available)
* Plain document
  * Same as console (no-color)
  * Same as copy HTML text
* HTML document
  * Colorful representation
  * Portable (we also use it on [XR Debug](xr.md))

## Helpers

💡 **TL;DR:** You can replace `var_dump` in both CLI and HTTP context using the following helpers:

### VarDump (vd)

Function `vd` is a drop-in replacement for `var_dump`. It prints information about one or more variables to the output stream.

```php
vd($var1, $var2,);
// more code
```

### VarDump and die (vdd)

Function `vdd` does same as `vd`, but with `die(0)` which halts further execution.

```php
vdd($var);
// exit()
```

## Advanced usage

A VarDump needs a format and an output. In the example below a VarDump object is created with console colored formatting and output:

```php
use Chevere\VarDump\Formats\ConsoleFormat;
use Chevere\VarDump\Outputs\ConsoleOutput;
use Chevere\VarDump\VarDump;
use function Chevere\VarDump\console;

$varDump = new VarDump(
    formatter: new ConsoleFormat,
    outputter: new ConsoleOutput
);
// Same as:
$varDump = console();
```

### Instance helpers

The following helper functions can be used to initialize a VarDump object.

* Namespace `Chevere\VarDump`
  * `plain` to return a plain VarDump
  * `console` to return a console VarDump
  * `html` to return a HTML VarDump
  * `instance` to retrieve the VarDump instance
  * `writers` to retrieve the VarDump writers

### Passing variables

The method `withVars` is used to pass `...$variables` (variadic).

```php
$varDump = $varDump->withVars('a var', [], null);
```

### Shifting traces

The dump information could be affected by layers on top of VarDump, the method `withShift` can be used to indicate how many previous backtrace should be removed.

```php
$varDump = $varDump->withShift(1); // removes the first trace
```

### Process

The method `process` is used to trigger the var dumping process. It requires to pass a [writer](../library/writer.md) where the dump information will be written.

```php
use Chevere\Writer\StreamWriter;
use function Chevere\Writer\streamFor;

$varDump->process(
    writer: new StreamWriter(
      streamFor('php://stdout', 'w')
    )
);
```

### Custom instance

By initializing `Chevere/VarDump/VarDumpInstance` you can change the default VarDump context, used in helpers `vd` and `vdd`.

In the code below, `html` has been passed to configure `VarDumpInstance` to handle everything as HTML.

```php
use Chevere\VarDump\VarDumpInstance;
use function Chevere\VarDump\html;

new VarDumpInstance(html());
```
