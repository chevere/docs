# Workspace

The workspace refers to the working directory where Chevere is developed.

## IDE

Chevere provides snippets and recommendation on extensions that goes better for development, this includes the provisioning IDE resources.

> 🧔🏾 The default IDE of choice is [Visual Studio Code](https://code.visualstudio.com/)

### Assets

All Visual Studio Code assets and settings are at the [.vscode/](https://github.com/chevere/chevere/tree/master/.vscode) folder.

### Extensions

This is a list of the essential extensions that I can recommend for using Visual Studio Code for developing Chevere.

* [Psalm (PHP Static Analysis Linting Machine)](https://marketplace.visualstudio.com/items?itemName=getpsalm.psalm-vscode-plugin)
* [Coverage Gutters](https://marketplace.visualstudio.com/items?itemName=ryanluker.vscode-coverage-gutters)
* [PHP Intelephense](https://marketplace.visualstudio.com/items?itemName=bmewburn.vscode-intelephense-client)
* [PHP Namespace Resolver](https://marketplace.visualstudio.com/items?itemName=MehediDracula.php-namespace-resolver)
* [PHPUnit Test Explorer](https://marketplace.visualstudio.com/items?itemName=recca0120.vscode-phpunit)
* [Run on Save](https://marketplace.visualstudio.com/items?itemName=emeraldwalk.RunOnSave)

## Template Snippets

[Snippets](https://code.visualstudio.com/docs/editor/userdefinedsnippets) in Visual Studio Code provide an easy way to define templates for code. It is a productivity tool that allows to rapidly cast source code just typing a keyword in the IDE.

Snippets provide this functionality for the IDE:

![Snippets in action](./../../src/screen/snippets-in-action.gif "Snippets in action")

Note that for the example above, the header comment and `strict_types` declaration are automatically provided by the [coding standard formatting](#coding-standards-formatting).

## Coding Standards Formatting

The [coding standard](../coding/coding-standard.md) is automatically implemented on save.

## Testing

[PHPUnit Test Explorer](https://marketplace.visualstudio.com/items?itemName=recca0120.vscode-phpunit) provides inline tools for code execution and reviewing. It allows to easily handle all tests.

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
