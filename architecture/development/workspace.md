# Workspace

The workspace refers to the working directory where Chevere is developed.

## IDE

Chevere provides snippets and recommendation on extensions that goes better for development, this includes the provisioning IDE resources.

> 🧔🏾 The default IDE of choice is [Visual Studio Code](https://code.visualstudio.com/)

Workspace settings are at `.vscode/settings.json`

### Extensions

* [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)
* [Coverage Gutters](https://marketplace.visualstudio.com/items?itemName=ryanluker.vscode-coverage-gutters)
* [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)
* [php cs fixer](https://marketplace.visualstudio.com/items?itemName=junstyle.php-cs-fixer)
* [PHP Debug](https://marketplace.visualstudio.com/items?itemName=felixfbecker.php-debug)
* [PHP Intelephense](https://marketplace.visualstudio.com/items?itemName=bmewburn.vscode-intelephense-client)
* [PHP Namespace Resolver](https://marketplace.visualstudio.com/items?itemName=MehediDracula.php-namespace-resolver)
* [PHPUnit Test Explorer](https://marketplace.visualstudio.com/items?itemName=recca0120.vscode-phpunit)

## Snippets

Snippets provide an easy way to define templates for code. It is a productivity tool that allows to rapidly create source code just typing a keyword in the IDE.

> 👍🏾 Built-in snippets are at `.vscode/Templates.code-snippets`

Snippets are designed to be context-aware, to parse information from the file system. That way, a lot of code can be autocompleted and prompt for easier editing.

In the following two-steps, a new test will be created following the snippets workflow.

### Step 1: Create the file

An empty `ExampleTest.php` file must be created at `Tests/Example/ExampleTest.php`. The tree should look like as below.

```shell
Tests
└── Example
    └── ExampleTest.php
```

> 🧙🏾 `Example` will be implemented in the namespace path and `ExampleTest` will be taken used as class name.

### Step 2: Inserting the snippet

Triggering snippets is easy as typing the snippet prefix in the editor. Alternatively, snippets can be triggered by using the [command palette](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette).

The screen below shows triggering `test` right after typing it, then the `test-method` snippet is triggered, which prompt to edit method's `Name`.

Class name and namespace path is automatically resolved by the IDE.

![Snippets in action](./../../src/screen/snippets-in-action.gif "Snippets in action")

> 🧙🏾 Header comment and `strict_types` declaration are automatically formatted on save

## Coding Standards

The [coding standard](../coding/coding-standard.md) is automatically implemented by extension [php cs fixer](https://marketplace.visualstudio.com/items?itemName=junstyle.php-cs-fixer), which allows to register PHP CS Fixer as formatter.

> 🧙🏾 Formatting can be configured on save and or typing

## Testing

[PHPUnit Test Explorer](https://marketplace.visualstudio.com/items?itemName=recca0120.vscode-phpunit) provides inline tools for code execution and reviewing. It allows to easily handle all tests.

### Configuration

* `phpunit.xml` for running test
* `phpunit-report.xml` same as above, plus code coverage report

### Running tests

To run tests:

```shell
vendor/bin/phpunit -c phpunit.xml
```

To run tests with code coverage report at `./build/coverage/html`:

```shell
vendor/bin/phpunit -c phpunit-report.xml
```

To run filtered tests use the `--filter` option:

```shell
vendor/bin/phpunit -c phpunit-report.xml --filter ActionTest
```

Kindly check [PHPUnit Documentation](https://phpunit.de/documentation.html) for all available options.

## Code Coverage

[Coverage Gutters](https://marketplace.visualstudio.com/items?itemName=ryanluker.vscode-coverage-gutters) provides visual feedback regarding covered lines right into the editor.
