# VarDump

## Summary

Multi-purpose colorful modern alternative to [var_dump](https://www.php.net/manual/function.var-dump.php).

::: tip 💡 VarDump introduction
 Read [VarDump for PHP](https://rodolfoberrios.com/2022/05/24/var-dump/) at Rodolfo's blog for a compressive introduction to this package.
:::

## Installing

VarDump is available through [Packagist](https://packagist.org/packages/chevere/var-dump) and the repository source is at [chevere/var-dump](https://github.com/chevere/var-dump).

Run the following command to install VarDump as a development dependency of your project:

```sh
composer require --dev chevere/var-dump
```

### Global installation

To make the `vd()` function available globally in any PHP code, install VarDump globally:

```sh
composer global require chevere/var-dump
```

If not already configured, add the global Composer dependencies to your `php.ini`:

```ini
auto_prepend_file = ${HOME}/.composer/vendor/autoload.php
```

Run the following command to select and update the `auto_prepend_file` directive in your `php.ini`:

```sh
bash <(curl -sL chevere.org/bin/composer/global-prepend.sh)
```

You can now use VarDump in any PHP script without requiring the library for each project.

## Quick start

* Use `vd` to dump information about any variable (replaces `var_dump` and `dump`)
* Use `vdd` to do the same as `vd` and `die(0)` (replaces `dd`)

```php
vd($myVar); // var dump
vdd($myVar); // var dump and die
```

## Demo

![HTML demo](/src/packages/var-dump-demo.svg)

* [HTML](https://chevere.github.io/var-dump/demo/output/html.html)
* [Plain text](https://chevere.github.io/var-dump/demo/output/plain.txt)
* [Console (asciinema)](https://asciinema.org/a/496889)

## Features

* Provides vd (VarDump) and vdd (VarDump & die) [helpers](#helpers)
* Colorful typed variable introspection
* Reports visibility
* Detects circular references
* Stream-based
  * Writes line-by-line
  * Handles _really_ large documents
* Provides caller information
* Console document
  * Colorful console output (where available)
* Plain document
  * Same as console (no-color)
  * Same as copy HTML text
* HTML document
  * Colorful representation
  * Portable (also used on [xrDebug](./xrdebug.md))

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
use function Chevere\VarDump\varDumpConsole;

$varDump = new VarDump(
    formatter: new ConsoleFormat,
    outputter: new ConsoleOutput
);
// Same as:
$varDump = varDumpConsole();
```

### Instance helpers

The following helper functions can be used to initialize a VarDump object.

```php
use function Chevere\VarDump\varDumpPlain;
use function Chevere\VarDump\varDumpConsole;
use function Chevere\VarDump\varDumpHtml;

// Plain text
$varDump = varDumpPlain();
// Colored console
$varDump = varDumpConsole();
// HTML
$varDump = varDumpHtml();
```

The `varDump` helper can be used to access to the [VarDumpInstance](#vardumpinstance). If no instance has been created it will provide a console VarDump.

```php
use function Chevere\VarDump\varDump;

$varDump = varDump();
```

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

The method `process` is used to trigger the var dumping process. It requires to pass a [writer](./writer.md) where the dump information will be written.

```php
use Chevere\Writer\StreamWriter;
use function Chevere\Writer\streamFor;

$varDump->process(
    writer: new StreamWriter(
      streamFor('php://stdout', 'w')
    )
);
```

### VarDumpInstance

By initializing `Chevere/VarDump/VarDumpInstance` you can change the default VarDump context, which is used in `vd` and `vdd` helpers.

In the code below, `varDumpHtml` has been passed to configure `VarDumpInstance` to handle everything with HTML formatting.

```php
use Chevere\VarDump\VarDumpInstance;
use function Chevere\VarDump\varDump;
use function Chevere\VarDump\varDumpHtml;

// Default VarDump console
$varDump = varDump();
// Set instance to VarDump Html
new VarDumpInstance(varDumpHtml());
// Instance VarDump html
$varDump = varDump();
```
