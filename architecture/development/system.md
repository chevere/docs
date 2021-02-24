# 🖥 System

This outlines the relevant system setup and packaging used to create Chevere.

## Operating System

Chevere is build and tested on [Ubuntu](https://ubuntu.com/) `ubuntu-latest`.

## PHP

Packages and PECL provides the same convenience, but as packages are made for debian-based systems you should prefer PECL if you don't have a compatible system.

* [PHP packages](https://deb.sury.org/) from Ondřej Surý.
* [PHP extensions](https://www.php.net/manual/en/extensions.membership.php) provided by [PECL](https://pecl.php.net/).

::: warning Packages vs PECL
Note that packages not only contain the software, it could also trigger other effects in the system.
:::
