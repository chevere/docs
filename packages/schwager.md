# Schwager

Namespace `Chevere\Schwager`

The Schwager package provides an API spec generator for the [Router](router.md) package. The complementary package [chevere/schwager-html](https://github.com/chevere/schwager-html) enables to create an HTML representation for Schwager.

::: tip 💡 Schwager introduction
Read [Schwager API](https://rodolfoberrios.com/2023/06/20/schwager-api/) and [Schwager HTML](https://rodolfoberrios.com/2023/10/28/schwager-html/) at Rodolfo's blog for a compressive introduction to this package.
:::

## Installing

Schwager is available through [Packagist](https://packagist.org/packages/chevere/schwager) and the repository source is at [chevere/schwager](https://github.com/chevere/schwager).

```sh
composer require chevere/schwager
```

## Specification

The Schwager API spec has the following general format:

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
            "group": "<PATH_GROUP>",
            "regex": "<PATH_REGEX>",
            "variables": {
                "<VARIABLE>": {
                    "type": "string",
                    "description": "<VARIABLE_DESCRIPTION>",
                    "regex": "<VARIABLE_REGEX>"
                }
            },
            "endpoints": {
                "<METHOD>": {
                    "description": "<ENDPOINT_DESCRIPTION>",
                    "request" : {
                        "headers": {
                            <REQUEST_HEADERS>
                        },
                        "query": {
                            <REQUEST_QUERY_SCHEMA>
                        },
                        "body":  {
                            <REQUEST_BODY_SCHEMA>
                        },

                    },
                    "responses": {
                        "<STATUS_CODE>": [
                            {
                                "context": "<RESPONSE_CONTEXT>",
                                "headers": {
                                    <RESPONSE_HEADERS>
                                },
                                "body": {
                                    <RESPONSE_BODY_SCHEMA>
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

### Identification

Properties for API identification.

* `<API>`
* `<NAME>`
* `<VERSION>`

### Servers

The `servers` array indicate the server(s) available for interacting with the API.

* `<SERVER_URL>`
* `<SERVER_DESCRIPTION>`

### Paths

The `paths` property contains a map for URI paths.

* `<PATH>`

For each path it takes the following properties:

* `<PATH_NAME>`
* `<PATH_GROUP>`
* `<PATH_REGEX>`

### Variables

Path variables are mapped by name within the `variables` property.

* `<VARIABLE>`

For each variable it provides the following properties. Path variables are always of type string.

* `<VARIABLE_DESCRIPTION>`
* `<VARIABLE_REGEX>`

### Endpoints

Path endpoints are mapped by HTTP method name within the `endpoints` property.

* `<METHOD>`
* `<ENDPOINT_DESCRIPTION>`

### Schemas

The body schema `*_BODY_SCHEMA` describes the payload body. It supports [parameter](./parameter.md) schema of any type.

The query schema `REQUEST_QUERY_SCHEMA` describes the request query string. It supports an array of [strings](./parameter.md#array-string).

### Request

Request metadata is taken from the [Request](./http.md#request) attribute

* `<REQUEST_HEADERS>`
* `<REQUEST_QUERY_SCHEMA>`
* `<REQUEST_BODY_SCHEMA>`

### Responses

Endpoint responses are mapped by status code within the `responses` property. Response metadata is taken from the [Response](./http.md#response) attribute

* `<STATUS_CODE>`

Schwager supports multiple responses for the same status code. For each response it provides the following properties:

* `<RESPONSE_CONTEXT>`
* `<RESPONSE_HEADERS>`
* `<BODY_RESPONSE_SCHEMA>`

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

Use method `toArray` to get the printer-ready array needed to export to other formats.

```php
$array = $spec->toArray();
```

## Filtering result

The `arrayFilter*` functions provided by the [Standard](./standard.md) component enable to modify and/or filter the generated API spec. This is useful to remove `null` values, empty strings and context-aware redundant information.

For example to recursive filter the array by value `$v` and key `$k`:

```php
use function Chevere\Standard\arrayFilterBoth;

$array = arrayFilterBoth($spec->toArray(), function ($v, $k) {
    return match (true) {
        $v === null => false,
        $v === [] => false,
        $v === '' => false,
        $k === 'required' && $v === true => false,
        $k === 'regex' && $v === '^.*$' => false,
        $k === 'body' && $v === [
            'type' => 'array#map',
        ] => false,
        default => true,
    };
});
```

The `match` used in the code above indicates that for every key value pair:

* Remove if the value is `null`
* Remove if the value is `[]`
* Remove if the value is empty string
* Remove if the key is `required` and value is `true`
* Remove if the key is `regex` and value is `^.*$`
* Remove if the key is `body` and value is `['type' => 'array#map']`
* (default) Keep as is

For cases `1,2,3` the removal is for empty values while for cases `4,5,6` is because of redundant info.

## Export

Use the built-in [Filesystem](./filesystem.md#file) component to store the converted array with native [json_encode](https://www.php.net/manual/en/function.json-encode.php) as a JSON file.

```php
use function Chevere\Filesystem\fileForPath;

$json = json_encode($array, JSON_PRETTY_PRINT);
$file = fileForPath(__DIR__ . '/api.json');
$file->put($json);
```

🪄 A PHP array can be converted to any format including [YAML](https://www.php.net/manual/en/book.yaml.php), [XML](https://github.com/spatie/array-to-xml) and more.
