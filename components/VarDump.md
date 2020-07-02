# VarDump

An alternative to [var_dump](https://www.php.net/manual/en/function.var-dump.php), but with a richer feature set including formatting for the generation of different type of documents.

[VarDumpInterface](../reference/Chevere/Interfaces/VarDump/VarDumpInterface.md) describe the interface for a component in charge of providing the ability to dump any variable.

## Learn by Examples

> 🧔🏾 Check the VarDump [examples](https://github.com/chevere/examples/tree/master/02.VarDump).

## Usage

### Initialization

It requires a formatter implementing [FormatterInterface](../reference/Chevere/Interfaces/VarDump/FormatterInterface.md) and a outputter implementing [OutputterInterface](../reference/Chevere/Interfaces/VarDump/VarOutputterInterface.md).

In the example below, a VarDump is created with console colored formatting and output:

```php
<?php

declare(strict_types=1);

use Chevere\Components\VarDump\Formatters\ConsoleFormatter;
use Chevere\Components\VarDump\Outputters\ConsoleOutputter;
use Chevere\Components\VarDump\VarDump;
use Chevere\Components\Writer\StreamWriterFromString;
use function Chevere\Components\VarDump\getVarDumpConsole;

$varDump = new VarDump(
    new ConsoleFormatter,
    new ConsoleOutputter
);
// Same as:
$varDump = getVarDumpConsole();
```

### Passing variables

The method `withVars` is used to pass variables (variadic).

```php
$varDump = $varDump->withVars('a var', [], null);
```

### Processing the dump

The method `process` is used to trigger the var dumping process. It requires to pass a [writer](./writer.md) where the dump information will be written.

```php
use use Chevere\Components\Writer\StreamWriterFromString;

$writer = new StreamWriterFromString('php://stdout', 'w');
$varDump->process($writer);
```

### Shifting traces

The dump information could be affected by layers on top of VarDump, the method `withShift` can be used to indicate how many previous back traces should be removed.

> 😉 Check [source code](https://github.com/chevere/chevere/blob/master/components/VarDump/functions.php) of functions `xd` and `xdd` for a better understanding

### Helper functions

The following helper functions can be used to save some boilerplate.

* Namespace `Chevere\Components\VarDump`
  * `getVarDumpPlain` to create a plain var dump
  * `getVarDumpConsole` to create a console var dump
  * `getVarDumpHtml` to create a HTML var dump

## Replacing var_dump

Function `xd` prints information about one of more variables to the output stream. It is a drop-in replacement for `var_dump`.

Function `xdd` does the same as `xd`, but it dies.

> 🧔🏾 Both `xd` and `xdd` are instance aware for [VarDumpInstance]() and [WritersInstance]()