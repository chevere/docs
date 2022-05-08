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

## Helpers

💡 **TL;DR:** You can replace `var_dump` using the following helpers:

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

## Instances

The following helper functions can be used to save boilerplate when needing to initialize a VarDump instance.

* Namespace `Chevere\VarDump`
  * `varDumpPlain` to return a plain var dump
  * `varDumpConsole` to return a console var dump
  * `varDumpHtml` to return a HTML var dump
  * `getVarDump` to retrieve the var dump instance
  * `getVarDumpWriters` to retrieve the var dump writers

## Customizing output stream

By declaring `Chevere/VarDump/VarDumpInstance` you can change the default stream used by VarDump, including helpers `vd` and `vdd`.

## Initialization

A VarDump needs a format and an output. In the example below a VarDump is created with console colored formatting and output:

```php
use Chevere\VarDump\Formats\VarDumpConsoleFormat;
use Chevere\VarDump\Outputs\VarDumpConsoleOutput;
use Chevere\VarDump\VarDump;
use function Chevere\VarDump\varDumpConsole;

$varDump = new VarDump(
    formatter: new VarDumpConsoleFormat,
    outputter: new VarDumpConsoleOutput
);
// Same as:
$varDump = varDumpConsole();
```

## Passing variables

The method `withVars` is used to pass `...$variables` (variadic).

```php
$varDump = $varDump->withVars('a var', [], null);
```

## Shifting traces

The dump information could be affected by layers on top of VarDump, the method `withShift` can be used to indicate how many previous backtrace should be removed.

```php
$varDump = $varDump->withShift(1); // removes the first trace
```

## Process

The method `process` is used to trigger the var dumping process. It requires to pass a [writer](../library/writer.md) where the dump information will be written.

```php
use Chevere\Writer\StreamWriter;
use function Chevere\Writer\streamFor;

$varDump->process(
    writer: new StreamWriter(streamFor('php://stdout', 'w'))
);
```
