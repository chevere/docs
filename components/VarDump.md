# VarDump

The [VarDump](../reference/Chevere/Components/VarDump/VarDump.md) component provides an alternative to [var_dump](https://www.php.net/var-dump), but with a richer feature set including formatting for the generation of different type of documents.

::: tip Learn by Example
Check the VarDump [examples](https://github.com/chevere/examples/tree/main/02.VarDump) to learn directly playing with code.
:::

## Formatters & Helpers

The following helper functions can be used to save some boilerplate when needing to initialize a VarDump instance.

* Namespace `Chevere\Components\VarDump`
  * `getVarDumpPlain` to create a plain var dump
  * `getVarDumpConsole` to create a console var dump
  * `getVarDumpHtml` to create a HTML var dump

## Initialization

VarDump requires a formatter implementing [VarDumpFormatterInterface](../reference/Chevere/Interfaces/VarDump/VarDumpFormatterInterface.md) and a outputter implementing [VarOutputterInterface](../reference/Chevere/Interfaces/VarDump/VarOutputterInterface.md).

In the example below, a VarDump is created with console colored formatting and output:

```php
use Chevere\Components\VarDump\Formatters\VarDumpConsoleFormatter;
use Chevere\Components\VarDump\Outputters\VarDumpConsoleOutputter;
use Chevere\Components\VarDump\VarDump;
use function Chevere\Components\VarDump\getVarDumpConsole;

$varDump = new VarDump(
    formatter: new VarDumpConsoleFormatter,
    outputter: new VarDumpConsoleOutputter
);
// Same as:
$varDump = getVarDumpConsole();
```

## Passing variables

The method `withVars` is used to pass variables (variadic).

```php
$varDump = $varDump->withVars('a var', [], null);
```

## Process

The method `process` is used to trigger the var dumping process. It requires to pass a [writer](Writer.md) where the dump information will be written.

```php
use Chevere\Components\Writer\StreamWriter;
use function Chevere\Components\Writer\streamFor;

$varDump->process(
    writer: new StreamWriter(streamFor('php://stdout', 'w'))
);
```

## Shifting traces

The dump information could be affected by layers on top of VarDump, the method `withShift` can be used to indicate how many previous back traces should be removed.

> Check [source code](https://github.com/chevere/chevere/blob/main/src/Chevere/Components/VarDump/functions.php) for functions `xd` and `xdd` for a better understanding

## Replacing `var_dump`

Following functions can be used as drop-in replacement for [var_dump](https://www.php.net/var-dump).

### xd

Function [xd](https://github.com/chevere/chevere/blob/main/src/Chevere/Components/VarDump/functions.php#L75) is a drop-in replacement for `var_dump` and it prints information about one of more variables to the output stream.

### xdd

Function [xdd](https://github.com/chevere/chevere/blob/main/src/Chevere/Components/VarDump/functions.php#L101) does the same as `xd`, but it `exit`.

### Customizing output stream

By declaring [VarDumpInstance](../reference/Chevere/Components/VarDump/VarDumpInstance.md) you can change the default stream used by `xd` and `xdd`.
