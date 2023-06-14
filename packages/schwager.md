# Schwager

![Schwager](../src/packages/schwager/schwager-logo.svg)

Namespace `Chevere\Schwager`

The Schwager package provides an API spec generator for the [Router](router.md) package.

<!-- ::: tip 💡 Schwager introduction
 Read [Schwager API](https://rodolfoberrios.com/404) at Rodolfo's blog for a compressive introduction to this package.
::: -->

## Installing

Schwager is available through [Packagist](https://packagist.org/packages/chevere/schwager) and the repository source is at [GitHub](https://github.com/chevere/schwager).

```sh
composer require chevere/schwager
```

## Specification

The Schwager API spec has the following format:

```json
{
    "api": "<API>",
    "name": "<NAME>",
    "version": "<VERSION>",
    "servers": [
        {
            "url": "<SERVER_URL>",
            "description": "<SERVER_DESCRIPTION>"
        }
    ],
    "paths": {
        "<PATH>": {
            "name": "<PATH_NAME>",
            "regex": "<PATH_REGEX>",
            "wildcards": {
                "<WILDCARD>": {
                    "type": "string",
                    "description": "<WILDCARD_DESCRIPTION>",
                    "regex": "<WILDCARD_REGEX>"
                }
            },
            "endpoints": {
                "<METHOD>": {
                    "description": "<ENDPOINT_DESCRIPTION>",
                    "body": {
                        <BODY_SCHEMA>
                    },
                    "query": {
                        <QUERY_SCHEMA>
                    },
                    "responses": {
                        "<STATUS_CODE>": [
                            {
                                "headers": {
                                    <RESPONSE_HEADERS>
                                },
                                "body": {
                                    "type": "array#map",
                                    "parameters": {
                                        "<PARAMETER>": {
                                            <PARAMETER_SCHEMA>
                                        }
                                    }
                                }
                            },
                        ]
                    }
                }
            }
        }
    }
}
```

## Creating API spec

To create an API spec pass an object implementing `RouterInterface` and a `DocumentSchema`. Optionally, you can provide one or more `ServerSchema` objects.

```php
use Chevere\Schwager\DocumentSchema;
use Chevere\Schwager\ServerSchema;
use Chevere\Schwager\Spec;
use function Chevere\Router\router;

$router = router();
$document = new DocumentSchema(
    api: 'chevere',
    name: 'Chevere API',
    version: '1.0.0'
);
$server = new ServerSchema(
    url: 'https://localhost:8080',
    description: 'Development server'
);
$spec = new Spec($router, $document, $server);
```

## Accessing API spec

Use method `toArray` to get the printer-ready array needed to export to other formats.

```php
$array = $spec->toArray();
```

## Filtering result

The `arrayFilter*` functions provided by the [Standard](../library/standard.md) component can become handy to modify and/or filter the generated API spec. This is useful to remove `null` values, empty strings and redundant information.

To recursive filter the array by value `$v` and key `$k`:

```php
use function Chevere\Standard\arrayFilterBoth;

$array = arrayFilterBoth($spec->toArray(), function ($v, $k) {
    return match (true) {
        $v === null => false, // 1
        $v === [] => false, // 2
        $v === '' => false, // 3
        $k === 'required' && $v === true => false, // 4
        $k === 'regex' && $v === '^.*$' => false, // 5
        $k === 'body' && $v === [ // 6
            'type' => 'array#map',
        ] => false,
        default => true, // 7
    };
});
```

The `match` used in the code above indicates that:

* `1` Remove if the value is `null`
* `2` Remove if the value is `[]`
* `3` Remove if the value is empty string
* `4` Remove if the key is `required` and value is `true`
* `5` Remove if the key is `regex` and value is `^.*$`
* `6` Remove if the key is `body` and value is `['type' => 'array#map']`
* `7` Keep everything else

For cases `1,2,3` the removal is for empty values while for cases `4,5,6` is because of redundant info.

## Export

Use the built-in [Filesystem](../library/filesystem.md#file) component to store the converted array with native [json_encode](https://www.php.net/manual/en/function.json-encode.php)into a JSON file.

```php
use function Chevere\Filesystem\fileForPath;

$json = json_encode($array, JSON_PRETTY_PRINT);
$file = fileForPath(__DIR__ . '/api.json');
$file->put($json);
```

A PHP array can be converted to any format including [YAML](https://www.php.net/manual/en/book.yaml.php), [XML](https://github.com/spatie/array-to-xml) and more.
