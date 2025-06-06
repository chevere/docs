# System

This outlines the system setup and packaging used to create Chevere.

## Operating system

Chevere is built and tested on [Ubuntu](https://ubuntu.com/) `ubuntu-latest`.

## PHP

Chevere is [PHP](https://php.net/) software. We recommend using:

* [PHP packages](https://deb.sury.org/) from Ondřej Surý.
* [PHP extensions](https://www.php.net/manual/en/extensions.membership.php) provided by [PECL](https://pecl.php.net/).

Packages and PECL provide the same convenience, but as packages are made for debian-based systems you should prefer PECL if you don't have a compatible system.

::: warning Packages vs PECL
Packages not only contain the software, they could also trigger other effects in the system.
:::
