# Workflow

![Workflow](../src/packages/workflow/workflow-logo.svg)

Namespace `Chevere\Workflow`

The Workflow package provides tooling for define an execution procedure based on the [workflow pattern](https://en.wikipedia.org/wiki/Workflow_pattern). Its purpose is to allow to abstract procedure instructions as logic units of interconnected independent async jobs.

👏 With this package you can design a Workflow procedures in a similar fashion to GitHub Actions.

::: tip 💡 Workflow introduction
 Read [Workflow for PHP](https://rodolfoberrios.com/2022/04/09/workflow-php/) at Rodolfo's blog for a compressive introduction to this package.
:::

## Installing

Workflow is available through [Packagist](https://packagist.org/packages/chevere/workflow) and the repository source is at [GitHub](https://github.com/chevere/workflow).

```sh
composer require chevere/workflow
```

## Creating a Workflow

To create a Workflow, define the Workflow named [jobs](#job). A job is defined by passing an [Action](../library/action.md) class name and its arguments.

In the example below, a Workflow describes an image uploading procedure.

```php
use function Chevere\Workflow\job;
use function Chevere\Workflow\reference;
use function Chevere\Workflow\variable;
use function Chevere\Workflow\workflow;

$workflow = workflow(
    getUser: job(
        GetUser::class,
        request: variable('payload')
    ),
    validate: job(
        ValidateImage::class,
        size: 100000,
        mime: 'image/png',
        file: variable('file')
    ),
    setName: job(
        NameFile::class,
        prefix: variable('timestamp'),
    ),
    store: job(
        StoreFile::class,
        file: variable('file'),
        name: reference('setName:output')
    ),
);
```

For the code above, `variable('payload')`, `variable('file')` and `variable('timestamp')` declares a [Workflow variable](#variable) that will be passed when [running](#running-workflow) the Workflow. At `reference('setName:output')` it declares a [job reference](#reference) which uses the return value key `output` of `setName` Job.

The graph for the Workflow previously defined looks like this:

```php
//$workflow->jobs()->graph();
[
    ['getUser', 'validate', 'setName'],
    ['store']
];
```

The graph above says that `getUser`, `validate` and `setName` runs in parallel and `store` runs after `setName`. When using references it is implicit declared that the given job depends on the previous reference.

To complete the example, here's how to [run](#running-workflow) the Workflow previously defined:

```php
use function Chevere\Workflow\run;

run($workflow, [
    'payload' => $_REQUEST,
    'file' => '/path/to/file',
    'timestamp' => time(),
]);
```

## Variable

A Workflow variable gets declared using function `variable`. This denotes a variable which must be injected by at Workflow run layer.

```php
use function Chevere\Workflow\variable;

variable('myVar');
```

### Reference

A Job reference gets declared using function `reference`. This denotes a reference to a response key returned by a previous Job. It will **auto declare** the referenced Job as [dependency](#dependencies).

```php
use function Chevere\Workflow\reference;

reference(job: 'task', key: 'id');
```

## Job

The `Job` class defines an [Action](../library/action.md) with arguments to pass, supporting direct arguments and variable references to previous jobs response keys.

👉 The `action` parameter must be a class name implementing the `Chevere/Action/Interfaces/ActionInterface`. See the [Action](../library/action.md) component.

```php
use function Chevere\Workflow\job;

job(getOptions::class, ...$argument);
```

Argument can be passed passed "as-is", [variable](#variable) or [reference](#reference) on constructor using named arguments.

```php
job(
    getOptions::class
    repo: 'public',
    role: variable('role'),
    user: reference('getRate', 'hourly'),
);
```

For the code above, argument `name` will be passed "as-is" (`Rodolfo`) to `SomeAction`, arguments `role` and `rate` will be dynamic provided. When running the Workflow these arguments will be matched against the Parameters defined at the [run](../library/action.md#run) method for `SomeAction`.

### Conditional running

Method `withRunIf` enables to pass arguments of type [variable](#variable) or [reference](#reference) for conditionally running a Job.

```php
job(
    CompressImage::class,
    file: variable('file')
)
    ->withRunIf(
        variable('compress_images'),
        reference('getOptions', 'image_compress')
    )
```

For the code above, all conditions must meet to run the Job: The variable `compress_images` and the reference `getOptions:image_compress` must be `true`.

### Dependencies

Use `withDepends` method to explicit declare previous jobs as dependencies. The dependent Job won't run until the dependencies are resolved.

```php
job(SomeAction::class)->withDepends('job1', 'job2');
```

### Synchronous jobs

Jobs will run in **parallel (async)** by default, must use `withIsSync` method to use sync processing for running a Job. Sync Jobs will always run in sequence.

```php
job(SomeAction::class)->withIsSync();
```

## Running Workflow

To run a Workflow use the `run` function by passing a Workflow and an `array` for its arguments (variables) if any.

```php
use function Chevere\Workflow\run;

$run = run($workflow, $arguments);
```

Variable `$run` will be assigned to an object implementing `Interfaces\RunInterface`, which you can query for obtaining data from the workflow runtime.

```php
use Chevere\DataStructure\Interfaces\VectorInterface;
use Chevere\Response\Interfaces\ResponseInterface;

$run->keys(): array;
$run->uuid(): string;
$run->workflow(): WorkflowInterface;
$run->arguments(): ArgumentsInterface;
$run->skip(): VectorInterface;
$run->getResponse(string $job): ResponseInterface;
```

### Injecting services

Pass a [PSR-Container](../library/action.md#container) for injecting services that will be available at Action layer.

```php
use Chevere\Container\Container;

$container = new Container();
$run = run($workflow, $arguments, $container);
```
